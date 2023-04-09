import openai from '@/openai'
import axios from 'axios'

export async function POST(request: Request) {
  const req = await request.json()
  const prompt = req.prompt

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024'
    })
    const imageUrl = response.data.data[0].url

    console.log(imageUrl)

    return new Response(JSON.stringify({ url: imageUrl }), { status: 200 })
  } catch (error: any) {
    if (error.response) {
      console.log('error.response.status=>', error.response.status)
      console.log('error.response.data=>', error.response.data)
      return new Response(
        JSON.stringify({ msg: error.response.data.error.message || 'unknown error' }),
        {
          status: error.response.status
        }
      )
    } else {
      console.log('error.message=>', error.message)
    }
  }

  // const res = await axios.get(imageUrl!, { responseType: 'arraybuffer' })

  // const arraybuffer = res.data

  // const response = await fetch('')
}
