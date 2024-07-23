'use client'
import React, { useEffect } from 'react';
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './MagicButton';
import MagicGrid from './MagicGrid';
import { NavBar } from './NavBar';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FaLocationArrow } from 'react-icons/fa6';
import {handleDownload} from '@/lib/handleDownload.js';

function Hero() {
    // useEffect(()=>{
    //     window.scrollTo(0,0);
    // },[]);
    const words = [
        {
          text: "ASHUTOSH ",

        },
        {
          text: "MISHRA",
        },
      ];

  return (
    <div className='pt-20 h-max ' >
        
        <NavBar/>
        <div className='h-screen w-screen absolute z-1' >
            
            <Spotlight
                className="absolute -top-20 left-0 h-screen w-[10vw] opacity-40"
                fill="white"
            />
            
            <Spotlight
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[50vw] opacity-50"
                fill="purple"
            />
        </div>
        <MagicGrid/>
        <button onClick={handleDownload} className=" hidden md:flex border text-xl font-medium absolute border-neutral-200 border-white/[0.2]  text-white px-8 py-2 rounded-lg right-0 font-mono">
          <span className='hover:text-purple-500' > Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
        <div className='flex justify-center relative my-20 z-10 '>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center' >
                <h2 className=' tracking-widest text-xl lg:text-3xl text-center max-w-80 text-slate-200 font-bungee' >HELLO  I  AM</h2>
                {/* <TextGenerateEffect
                    className=' uppercase text-center text-[40px] md:text-5xl lg:text-6xl font-Wallpoet'
                    words='Ashutosh Mishra'/> */}
                <TypewriterEffectSmooth className='uppercase text-center text-xl font-Wallpoet' words={words}/>
                <p className='text-center text-lg w-auto mx-2 lg:w-[25rem]' >A passionate <span className=' text-purple-500 uppercase font-bold font-mono'>Web Developer</span>, Designer  creating awesome websites and applications.</p>
                <a href="/projects">
                    <MagicButton 
                    icon={<FaLocationArrow className='mr-2'/>}
                    title={`See my work`} 
                    className = {`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-purple-600 `}/>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Hero