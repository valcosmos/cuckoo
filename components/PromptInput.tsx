'use client'

import { useState } from 'react'

export default function PromptInput() {
  const [input, setInput] = useState('')

  return (
    <div className="m-10">
      <form className="flex flex-col border rounded-md shadow-md lg:flex-row shadow-slate-400/10 lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 p-4 rounded-md outline-none"
        />
        <button type="submit" className="">
          Generate
        </button>
        <button
          type="button"
          className="p-4 font-bold text-white transition-colors duration-200 bg-violet-400 disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 font-bold transition-colors duration-200 bg-white border-none text-violet-500 rounded-b-md md:rounded-r-md md:rounded-bl-none"
        >
          New Suggestion
        </button>
      </form>
    </div>
  )
}
