// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn, FaGithub,} from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x[-1]' src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font.bold text-gray-800'>I´m Felipe Lugo</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Developer',
                        2000, // wait 1s
                        'Coder',
                        2000,
                        'Tech Enthusiast',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaInstagram className='cursor-pointer hover:scale-110' size={25} />
                    <FaLinkedinIn className='cursor-pointer hover:scale-110' size={25} />
                    <FaGithub className='cursor-pointer hover:scale-110' size={25} />
                    <AiFillMail className='cursor-pointer hover:scale-110' size={25} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main