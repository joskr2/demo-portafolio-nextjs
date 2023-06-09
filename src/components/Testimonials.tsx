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
  ]

  return (
    <>
      <h1 className='text-3xl md:text-5xl font-bold text-green-600 text-center my-10'>Testimonials</h1>
      
      <div className='flex flex-col md:flex-row justify-around flex-wrap mx-auto my-6 mt-20'>
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