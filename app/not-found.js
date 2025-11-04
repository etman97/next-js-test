// app/not-found.js
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen">
        <Image src="/not-found.png" fill className='h-screen w-screen absolute'  alt='wood-background' />

        <div className='flex flex-col justify-center items-center z-999 p-40'>
            <h1 className='text-white font-medium text-[100px]'>404</h1>
            <p className='text-white text-[42px]'>Oops!</p>
            <p className='text-white text-[36px]'>Page NotFound</p>
        </div>
    </div>
  )
}