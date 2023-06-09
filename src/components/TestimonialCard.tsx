import Image from 'next/image'
import { FC } from 'react'


interface Props {
  url: string
  name: string
}
const TestimonialCard: FC<Props> = ({ url, name }) => {
  return (
    <div className='flex flex-col border-solid border-2 border-green-600 p-4 m-4'>
      <Image src={url} alt="testimonial" className="w-20 h-20 rounded-full mx-auto mb-4" width={100} height={100} />
      <p className="text-center text-gray-500 text-sm md:text-md">{name}</p>
    </div>
  )
}

export default TestimonialCard