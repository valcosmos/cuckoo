export async function GET() {
  const response = await fetch('...', {
    cache: 'no-store'
  })

  const textData = await response.text()

  return new Response(JSON.stringify(textData.trim()), { status: 200 })
}
