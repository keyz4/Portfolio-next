"use client";
import Image from 'next/image';
import { FaLinkedin,FaGithub, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";


function AboutMe() {

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative lg:text-xl h-max w-full items-center justify-center flex "
      >
        <div className='h-max mt-4 md:h-max w-full flex justify-center items-center md:items-start rounded-xl relative' >
          <div className='md:flex flex-col justify-around h-[30%] lg:w-auto md:w-auto md:items-end items-center mt-12 ml-10 hidden top-0 absolute left-0' >
            <a target='_blank' href="https://www.linkedin.com/in/ashutoshmishra2022/">
              <FaLinkedin  className='hover:animate-bouncee h-20 w-10 hover:fill-purple-500'/></a>
            <a target='_blank' href="https://github.com/keyz4">
              <FaGithub  className='hover:animate-bouncee h-20 w-10 hover:fill-purple-500'/></a>
            <a target='_blank' href="https://x.com/AshutoshKeyz">
              <FaSquareXTwitter  className='hover:animate-bouncee h-20 w-10 hover:fill-purple-500'/></a>
          </div>
          <div className='hover:animate-bouncee rounded-full flex flex-col  lg:mt-12 items-center h-full w-max '>
            <Image className='animate-bouncee rounded-full h-40 w-40 mx-auto lg:h-[24rem] lg:w-[24rem] ' src="/PF_v2_pic2.jpg" alt="About me image" width={500} height={500} />
            <div className='mx-auto lg:w-[30rem] text-wrap text-center my-8 font-poppins w-[15rem] ' >Passionate about crafting seamless digital experiences, I thrive on transforming ideas into captivating realities through   <span className='text-purple-500 font-bold font-Wallpoet text-2xl'> {`</code>`}</span>  and creativity.</div>
            <div className="lg:hidden md:hidden flex w-[40%] h-max justify-between">
              <FaLinkedin  className='hover:animate-bouncee h-20 w-10'/>
              <FaGithub  className='hover:animate-bouncee h-20 w-10'/>
            </div>
          </div>
          <div className='md:flex lg:flex hidden flex-col justify-around h-[30%] w-auto md:items-start items-center mt-12 mr-5 absolute right-0 top-0' >
            
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
    
  )
}

export default AboutMe