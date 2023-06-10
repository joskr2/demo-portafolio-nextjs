import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
  <main className='w-full  flex flex-col'>
    <h1 className='text-3xl md:text-5xl font-bold text-green-600 text-center my-10'>About</h1>
    <section className='flex flex-col md:flex-row md:justify-around md:items-center'>
      <div className='flex flex-col flex-1 p-5'>
        <p className=''>
        </p>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit illum praesentium amet provident consectetur nulla itaque deleniti! Culpa quis dolorem non id ullam quod omnis doloremque ipsa similique atque!
        </p>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit illum praesentium amet provident consectetur nulla itaque deleniti! Culpa quis dolorem non id ullam quod omnis doloremque ipsa similique atque!
        </p>
      </div>
      <div className='flex-1 p-5'>
        <Image
          className='w-9/12 md:w-9/12  h:30  md:h-80 '
          src='/computer.svg'
          alt='Picture of the author'
          width={550}
          height={250}
        />
      </div>
    </section>
  </main>
  )
}

export default About