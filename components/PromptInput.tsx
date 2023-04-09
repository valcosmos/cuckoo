'use client'

import { FormEvent, useContext, useState } from 'react'
import useSWR from 'swr'
import { v4 as uuidv4 } from 'uuid'
import { DataContext } from './DataProvider'
import { toast } from 'react-hot-toast'

export default function PromptInput() {
  const [input, setInput] = useState('')
  const { images, setImages } = useContext(DataContext)

  const submitPrompt = async (useSuggestion?: boolean) => {
    setInput('')
    const id = uuidv4()
    const dataObj: ImageProps = {
      name: input,
      id,
      url: '',
      isLoading: true
    }

    await setImages((prev) => [dataObj, ...prev!])

    const res = await fetch('/api/generateImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: input })
    })
    const data = await res.json()

    if (data.msg) {
      await setImages(prev => { 
        const arr = [...prev!]
        const index = prev!.findIndex(item => item.id === id)
        arr.splice(index, 1)
        return arr
      })
      return toast.error(data.msg)
    }
    const url = data.url

    

    await setImages((prev) => {
      const index = prev!.findIndex((item) => item.id === id)
      const arr = [...prev!]
      arr?.splice(index, 1, { ...dataObj, isLoading: false, url })
      return arr
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await submitPrompt()
  }

  return (
    <div className="m-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border rounded-md shadow-md lg:flex-row shadow-slate-400/10 lg:divide-x"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'Enter a prompt...'}
          className="flex-1 p-4 rounded-md outline-none"
        />
        <button
          type="submit"
          className={`p-4 ${
            input
              ? 'bg-violet-500 text-white transition-colors duration-200'
              : 'text-gray-300 cursor-not-allowed'
          }`}
        >
          Generate
        </button>
       
      </form>

    
    </div>
  )
}
