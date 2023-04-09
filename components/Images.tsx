'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { DataContext } from './DataProvider'



function Images() {
  const { images } = useContext(DataContext)
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:px-10">
        {images?.map((image: ImageProps, i: number) => (
          <div
            className={`relative cursor-help ${
              i === 0 && 'md:col-span-2 md:row-span-2'
            } hover:scale-[103%] transition-transform duration-200 ease-in-out 
            
            `}
            key={image.name}
          >
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition-opacity duration-200 bg-white opacity-0 hover:opacity-80">
              <p className="p-5 text-lg font-light text-center">{image.name}</p>
            </div>
            {image.isLoading ? (
              <p className="text-center animate-pulse pb-7 font-extralight">
                Loading <span className="text-violet-400">AI</span> Generated Images...
              </p>
            ) : (
              <Image
                src={image.url}
                alt=""
                height={800}
                width={800}
                className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Images
