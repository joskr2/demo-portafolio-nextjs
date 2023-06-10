'use client'

import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className='flex bg-black h-1/4 p-6 bottom-0  justify-between text-white'>
      <section className="flex-1 px-2">
        <h1 className='font-bold text-lg md:text-2xl'>Dev Mario</h1>
        <p className='text-sm overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
      <section className="flex-1 px-2">
        <h1 className='font-bold text-lg md:text-2xl'>Links</h1>
        <ul className='flex flex-col'>
          <li>
            <Link className='px-2 cursor-pointer  no-underline  text-sm md:text-xl' href="/">Home</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/about">About</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/contact">Contact</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/projects">Projects</Link>
          </li>
        </ul>
      </section>
      <section className="flex-1 px-2">
        <h1 className='font-bold text-2xl'>Social</h1>
        <ul className='flex flex-col'>
          <li>
            <Link className='px-2 cursor-pointer  no-underline  text-sm md:text-xl' href="/">Home</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/about">About</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/contact">Contact</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/projects">Projects</Link></li>
        </ul>
      </section>
      <section className="flex-1 pl-2">
        <h1 className='font-bold text-2xl'>Contact</h1>
        <ul className='flex flex-col'>
          <li>
            <Link className='px-2 cursor-pointer  no-underline  text-sm md:text-xl' href="/">Home</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/about">About</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/contact">Contact</Link></li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-sm md:text-xl' href="/projects">Projects</Link></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer