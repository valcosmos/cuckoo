'use client'
import { ReactNode, createContext } from 'react'
import { useLocalStorageState } from 'ahooks'
import { IMAGES } from '@/constant'
import { IFuncUpdater } from 'ahooks/lib/createUseStorageState'

export const DataContext = createContext<{
  images: ImageProps[]
  setImages: (value: ImageProps[] | IFuncUpdater<ImageProps[]>) => void
}>({
  images: [],
  setImages: () => []
})

export default function DataProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useLocalStorageState<ImageProps[]>(IMAGES, { defaultValue: [] })

  const ctxValue = {
    images,
    setImages
  }

  return <DataContext.Provider value={ctxValue}>{children}</DataContext.Provider>
}
