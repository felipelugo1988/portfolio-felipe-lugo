// eslint-disable-next-line no-unused-vars
import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2022',
        title: 'Frontend Developer',
        duration: '1 year',
        details: 'Executed and managed personal web projects with a focus on ecommerce o projects, static websites, blogs, simple web applications.'
       
    },
    {
        year: '2020',
        title: 'Process Engineer',
        duration: '2 years',
        details: 'Process Optimization through Software: Use process management software such as Six Sigma or Lean to identify areas for improvement in industrial operations and then implement technological solutions to automate, control, and enhance these processes.'
    },
    {
        year: '2019',
        title: 'Quality Engineer',
        duration: '1 year',
        details: 'Data Analysis and Big Data: Utilize data analysis tools to collect, analyze, and visualize production, quality, and efficiency data. This can help identify patterns, trends, and improvement opportunities.'
    },
    {
        year: '2017',
        title: 'Process Engineer',
        duration: '2 years',
        details: 'Internet of Things (IoT): Implementation of sensors and connected devices to monitor and control machines, processes, and industrial assets in real-time, enabling more efficient and predictive management.'
    },
    {
        year: '2014',
        title: 'Project Manager assistant Engineer',
        duration: '3 years',
        details: 'Develop project management skills to lead the successful implementation of technological solutions in industrial settings, ensuring that objectives and timelines are met.'
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work