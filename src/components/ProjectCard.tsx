import React, { FC } from 'react'
import Image from 'next/image'

interface Project {
  title: string,
  description: string,
}

// interface Props {
//   array: Array<Project>
// }

const ProjectCard: FC<Project> = ({ title,description }) => {
  return (
    <section className='flex flex-col rounded-lg p-4 m-2'>
      <Image
        className='w-9/12 md:w-9/12  h:30  md:h-80 '
        src='/computer.svg'
        alt='Picture of the author'
        width={550}
        height={250}/>
      <h1 className='text-2xl font-bold text-green-600 text-center my-10'>{title}</h1>
      <p className='text-center'>{description}</p>
    </section>
  )
}

export default ProjectCard