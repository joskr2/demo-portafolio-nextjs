'use client'

import { FC } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  description: string
}

const Header: FC<Props> = () => {


  return (
    <header className='flex w-full h-8 border-b-black justify-between p-3'>
      <p className='font-bold  text-xl  md:text-3xl'>Dev Mario</p>
      <nav>
        <ul className='flex'>
          <li>
            <Link className='px-2 cursor-pointer  no-underline  text-lg  md:text-xl' href="/">Home</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-lg  md:text-xl' href="/about">About</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-lg  md:text-xl' href="/contact">Contact</Link>
          </li>
          <li>
            <Link className='px-2 cursor-pointer  no-underline text-lg  md:text-xl' href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header