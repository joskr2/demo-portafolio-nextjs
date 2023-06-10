import ProjectCard from '@/components/ProjectCard';
import React from 'react'


const projectsArray = [
  {
    title: 'Project 1',
    descripcion: 'lorem ipsum do'
  },
  {
    title: 'Project 2',
    descripcion: 'lorem ipsum do'
  },
  {
    title: 'Project 3',
    descripcion: 'lorem ipsum do'
  },
]
const Projects = () => {
  return (
    <div className='flex w-full'>
      <h1 className='text-3xl md:text-5xl font-bold text-green-600 text-center my-10'>Projects</h1>
      <section className='grid grid-cols-2  md:grid-cols-6 m-2 p-3'>
        
        {projectsArray.map(({title,descripcion}, index) => (
          <ProjectCard key={index} title={title} description={descripcion} />
        ))}

      </section>

    </div>
  )
}

export default Projects;