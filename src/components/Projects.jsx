import React from 'react'
import ProjectItem from './ProjectItem'
import placeholderImg from '../assets/placeholder_1.png'
import placeholderImg2 from '../assets/placeholder_2.png'
import placeholderImg3 from '../assets/placeholder_3.png'
import placeholderImg4 from '../assets/placeholder_4.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={placeholderImg} title='Placeholder App' />
        <ProjectItem img={placeholderImg2} title='Placeholder App' />
        <ProjectItem img={placeholderImg3} title='Placeholder App' />
        <ProjectItem img={placeholderImg4} title='Placeholder App' />
      </div>
    </div>
  )
}

export default Projects