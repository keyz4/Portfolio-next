"use client";
import { NavBar } from '@/components/NavBar';
import Signup from '@/components/Signup';
import React from 'react';
import Image from 'next/image';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";


function page() {
  return (
    <div className='h-max w-screen flex flex-col items-center overflow-x-hidden mb-8' >
      <NavBar/>
      <div className="flex flex-col items-center md:flex-row md:items-start w-screen md:justify-center mt-24 overflow-hidden" >
        <div className="flex-col justify-center items-center p-12 w-[95%] md:w-[50%] h-max md:mt-8">
          <div className="text-2xl md:text-4xl w-full h-max text-wrap text-center mx-auto font-mono  font-medium text-slate-400 mb-8  overflow-hidden">Ready to bring your ideas to life? <div/> <span className='text-purple-600 font-poppins font-semibold md:text-5xl' >Let&apos;s chat!</span></div>
          <div className='w-full h-max flex justify-center mt-4' >
            <TextRevealCard
                text="Your ambition, my technology"
                revealText="let&apos;s build the future."
              >
              <TextRevealCardTitle className='md:w-[22rem] w-full text-wrap h-max font-mono' >
                The best way to get a project done faster is to start sooner.
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                I&apos;m always excited to work on new projects and collaborate with passionate people. Whether you have a question, an idea, or just want to say hello, feel free to drop me a message!
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
        <div className='h-max w-[70%] md:w-[45%] flex justify-center md:mt-12 overflow-hidden' >
          <Signup/>
        </div>
      </div>
      <div className='relative w-[80%] h-[20rem] rounded-lg border-2 border-purple-800 saturate-150 bg-white opacity-75 mt-4'>
          <Image 
            className='relative w-full h-full rounded-lg'
            src='/map.png'
            alt = 'map image'
            width={500}
            height={500}/>
          <div className='absolute left-0 top-0 bg-black w-full h-full rounded-lg opacity-55' ></div>
      </div>
    </div>
  )
}

export default page