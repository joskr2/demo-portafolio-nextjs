import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Quote />
      <Testimonials />
    </div>
  )
}

export default Home