import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Images from '@/components/Images'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="mx-0 md:10">
      <Images />
    </div>
  )
}
