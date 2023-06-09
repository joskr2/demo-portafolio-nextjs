import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=' px-6 py-5 md:px-16 md:py-20 rounded-lg border-zinc-950 mt-6 flex flex-col md:flex-row '>
      <h1 className=' text-5xl md:text-8xl font-bold text-green-600 whitespace-break-spaces my-5 mx:my-10 md:flex-2 md:w-fit text-center'>
        Hi Im Mario, Frontend developer
      </h1>
      <Image
        className='w-9/12 md:w-9/12  h:30  md:h-80 '
        src='/computer.svg'
        alt='Picture of the author'
        width={550}
        height={250}
      />
    </div>
  )
}

export default Hero