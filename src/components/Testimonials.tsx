import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {

  const testimonialArray = [
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    },
    {
      url: '/testimonial.svg',
      name: 'John Doe'
    }
  ]

  return (
    <>
      <h1 className='text-3xl md:text-5xl font-bold text-green-600 text-center my-10'>Testimonials</h1>
      <div className='grid grid-cols-2 justify-center md:flex md:flex-row md:justify-around md:flex-wrap ,md:mx-auto md:my-6 md:mt-20'>
        {
          testimonialArray.map((testimonial, index) => (
            <TestimonialCard key={index} url={testimonial.url} name={testimonial.name} />
          ))
        }
      </div>
    </>
  )
}

export default Testimonials