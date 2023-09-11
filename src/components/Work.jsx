// eslint-disable-next-line no-unused-vars
import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2015,
        title: 'Supervisor of production',
        duration: '7 years',
        details: 'I was working as an Industrial Enginieer, related to the producction area'
    },
    {
        year: 2022,
        title: 'Frontend developer',
        duration: '1 year',
        details: 'I have been working on my own projects'
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