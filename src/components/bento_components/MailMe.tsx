'use client'
import { useState } from "react";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { FaCopy } from "react-icons/fa";
import { Vortex } from "../ui/vortex";

function MailMe() {
  const[copy, setCopy] = useState(false);
  const handleClick = ()=>{
    navigator.clipboard.writeText('ashutosh01102004@gmail.com');
    setCopy(true);
  }
  let text:string = copy===false ? `Copy my email` : `Email copied`
  return (
    <div className='h-full w-full flex justify-center items-center rounded-xl' >
      <BackgroundGradientAnimation>
        <div className="h-full w-full flex flex-col justify-center items-center" >
          <div className="font-Wallpoet lg:text-2xl text-center mb-2 mt-20 text-wrap">Do you want to start a project togeather?</div>
          <Vortex 
            backgroundColor="transparent"/>
          <MagicButton
            click={handleClick}
            icon={<FaCopy className="m-1 text-2xl fill-slate-600 stroke-white" />}
            title={text}
            className="flex h-full w-max items-center justify-center rounded-lg bg-slate-950 px-8 py-1 backdrop-blur-3xl text-xl font-mono z-10 "
            />
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default MailMe