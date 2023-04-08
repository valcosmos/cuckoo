import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between p-5 bg-white shadow-md">
      {/* left  */}
      <div className="flex items-center space-x-2">
        <Image
          src={'https://avatars.githubusercontent.com/u/53572196?v=4'}
          alt="logo"
          height={30}
          width={30}
        />

        <div>
          <h1>
            Valcosmos <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2, ChatGPT & Microsoft Azure!</h2>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center text-xs text-gray-500 divide-x md:text-base">
        <Link href="https://github.com/valcosmos" className="px-2 font-light text-light">
          Github
        </Link>
        <Link href="https://github.com/valcosmos/cuckoo" className="px-2 font-light">
          Github Repo
        </Link>
      </div>
    </header>
  )
}
