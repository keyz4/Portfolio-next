"use client"
import React from 'react'
import { AnimatedTooltip } from "../ui/animated-tooltip";

const skills = [
    {
      id: 1,
      name: "C++",
      designation: "Programming Language",
      image: "/cpp.svg"
    },
    {
      id: 2,
      name: "Python",
      designation: "Programming Language",
      image: "/python.svg"
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "Programming Language",
      image: "/javascript.svg"
    },
    {
      id: 4,
      name: "React.js",
      designation: "JavaScript Library",
      image: "/react.svg"
    },
    {
      id: 5,
      name: "Next.js",
      designation: "Web Framework",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
    {
      id: 6,
      name: "MERN",
      designation: "Web Development Stack",
      image: "/mern.svg"
    },
    {
      id: 7,
      name: "Socket.io",
      designation: "Real-time Web Library",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
    },
    {
      id: 8,
      name: "GitHub",
      designation: "Version Control Platform",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    }
  ];

function ContactInfo() {
  return (
    <div className='relative h-60 md:h-full w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 to-slate-800 z-5' >
        
        <div className='w-full flex justify-center h-20 items-center text-3xl text-white mt-4 md:mt-4 font-Wallpoet' >About Me</div>
        <div className='w-[90%] h-max grid grid-cols-2 gap-4 mx-auto mt-4 mb-4 text-xs md:text-xl'>
            <div className='flex justify-between items-center w-max' >
                <span className='mr-2 font-poppins font-bold' >Name :</span>
                <span className='ml-2 font-merienda text-purple-500'>Ashutosh Mishra</span>
            </div>
            <div className='flex justify-between items-center w-max ml-8 md:ml-16' >
                <span className='mr-2 font-poppins font-bold' >Age :</span>
                <span className='ml-2 font-merienda text-purple-500'>20</span>
            </div>
            <div className='flex justify-between items-center w-max' >
                <span className='mr-2 font-poppins font-bold' >Phone :</span>
                <span className='ml-2 font-merienda text-purple-500'>+91 7033098768</span>
            </div>
            <div className='flex justify-between items-center w-max ml-8 md:ml-16' >
                <span className='mr-2 font-poppins font-bold' >Country :</span>
                <span className='ml-2 font-merienda text-purple-500'>India</span>
            </div>
            <div className='flex justify-between items-center w-max' >
                <span className='mr-2 font-poppins font-bold' >Email :</span>
                <span className='ml-2 font-merienda text-purple-500'>ashutosh01102004@gmail.com</span>
            </div>
            
        </div>
        <div className='flex w-full justify-center items-center bg-slate-400 opacity-70 h-20 px-8 py-2' >
            <AnimatedTooltip items={skills}/>
        </div>
        
    </div>
  )
}

export default ContactInfo