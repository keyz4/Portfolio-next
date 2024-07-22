import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/lib/socailData";
import MagicButton from "./MagicButton";

const Footer = () => {
  
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] font-mono text-lg md:text-2xl text-wrap text-center">
          Ready to take <div></div><span className="bg-gradient-to-br from-purple-600 to-white bg-clip-text text-transparent text-xl md:text-3xl font-Wallpoet uppercase ">YOUR digital
          presence </span><div></div>to the next level?
        </h1>
        <p className="text-slate-300 mt-10 my-5 text-center text-base md:text-lg font-sans md:font-serif font-extralight">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ashutosh01102004@gmail.com">
          <MagicButton
            title="Let's get in touch"
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg hover:bg-purple-700 bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl`}
            icon={<FaLocationArrow className='m-2'/>}
            
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4">
          Copyright © 2024 Ashutosh Mishra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.url} target='_blank'>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-black-300 hover:text-slate-950 hover:bg-white hover:fill-slate-950 "
            >
                  {info.img}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

