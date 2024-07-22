"use client"
import MagicGrid from "@/components/MagicGrid";
import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaLocationDot, FaComputer, FaDatabase, FaCode, FaLaptopCode, FaNetworkWired } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function About() {
  const handleDownload = () => {
    // Create an anchor element and set the href attribute to the PDF file path
    const link = document.createElement('a');
    link.href = '/resumeGo.pdf'; // Path to your PDF file in the public directory
    link.download = 'BestResumeEver.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-max w-screen flex flex-col md:flex-row justify-center items-center bg-slate-950 overflow-hidden mb-4 md:justify-end mt-8">
      <MagicGrid />
      <div className="mt-8 mb-4 relative z-10 md:h-max h-[43rem] w-[90%] md:w-[25%] border-2 border-purple-800 mr-2 rounded-2xl flex-col justify-center items-center ml-4">
        <div className="w-full h-max p-16 pt-4 pb-0">
          <Image
            src='/PF_v2_pic2.jpg'
            alt='profile pic'
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center w-full h-max font-merienda text-2xl text-purple-500 mt-4">Ashutosh <span className="ml-2 text-white">Mishra</span></div>
        <div className="flex w-full flex-col items-center justify-center mt-2">
          <button className="flex justify-center items-center border-purple-900 border-2 font-poppins mb-1 rounded-xl md:rounded-3xl md:w-[80%] w-[70%] p-3 md:p-1.5">Web Developer</button>
          <button onClick={handleDownload} className="flex justify-center items-center border-purple-600 border-2 font-poppins mt-1 rounded-xl md:rounded-3xl md:w-[80%] w-[70%] p-3 md:p-1.5 hover:bg-purple-700 hover:text-white">Download Resume <FaDownload className="ml-2" /></button>
        </div>
        <div className="flex justify-around items-center mt-8 w-full">
          <a target="blank" href="https://www.linkedin.com/in/ashutoshmishra2022/"><FaLinkedin className="text-4xl hover:text-gray-600" /></a>
          <a target="blank" href="https://github.com/keyz4"><FaGithub className="text-4xl hover:text-gray-600" /></a>
          <a target="blank" href="https://x.com/AshutoshKeyz"><FaSquareXTwitter className="text-4xl hover:text-gray-600" /></a>
        </div>
        <div className="flex-col items-center w-full mt-6 text-gray-500">
          <div className="w-full flex justify-center items-center font-mono text-gray-500"><FaLocationDot className="inline mb-1 mr-2" /> Kolkata, India</div>
          <div className="w-full flex justify-center items-center font-poppins text-sm pl-2 pr-2 text-gray-500">ashutosh01102004@gmail.com</div>
          <div className="text-gray-500 w-full flex justify-center items-center font-poppins">+91 7033098768</div>
        </div>
        <div className="w-full flex justify-center items-center mb-4">
          <a className="w-full flex justify-center items-center mb-4" href="mailto:ashutosh01102004@gmail.com">
            <button className="w-[80%] bg-purple-500 text-white font-merienda font-bold p-3 rounded-3xl mt-2 text-2xl border-2 hover:border-white border-purple-800">Email Me</button>
          </a>
        </div>
      </div>
      <div className="relative z-10 h-max md:w-[65%] w-[90%] border-2 border-purple-800 ml-2 rounded-2xl flex flex-col">
        <div className="h-[100%] w-full flex flex-col my-1 mb-4">
          <div className="h-max w-full flex justify-between p-4 pt-1 text-2xl">
            <div className="underline underline-offset-8 decoration-4 decoration-purple-600">About</div>
            <div>
              <button onClick={handleDownload} className="hover:text-purple-500 mr-2">Resume</button>
              <a href="/projects" className="hover:text-purple-500 ml-1">Projects</a>
            </div>
          </div>
          <div className="p-4 pb-0 text-wrap text-start font-serif">
            Dedicated pre-final year CSE student at BIT MESRA. I am passionate about exploring new technologies and find joy in coding.
            Proficient in Python, C++, and JavaScript, with familiarity with Java basics. Skilled in web development technologies
            including CSS, HTML, JavaScript, React, Node.js, Express, and SQL.
          </div>
        </div>
        <div className="h-max w-full flex flex-col justify-center items-center">
          <div className="flex justify-start w-full ml-8 font-poppins font-semibold text-slate-400 text-xl">What I&apos;m Doing</div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 gap-4 mt-2 w-full pb-4 px-2 mb-4">
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><FaComputer className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">Frontend Development</div>
                <div className="text-sm font-sans">I can build beautiful and scalable SPA using MERN and Next.js</div>
              </div>
            </div>
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><FaDatabase className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">Backend Development</div>
                <div className="text-sm font-sans">Handle database, server, api using Express & other popular frameworks</div>
              </div>
            </div>
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><AiOutlineApi className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">API Development</div>
                <div className="text-sm font-sans">I can develop robust REST API using django-rest-api & Node API</div>
              </div>
            </div>
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><FaCode className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">Competitive Coder</div>
                <div className="text-sm font-sans">A daily problem solver in HackerRank and Leet Code</div>
              </div>
            </div>
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><FaLaptopCode className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">UI/UX designer</div>
                <div className="text-sm font-sans">Stunning user interface designer using Figma and Framer</div>
              </div>
            </div>
            <div className="rounded-xl flex justify-start items-center">
              <div className="text-5xl ml-4"><FaNetworkWired className="fill-green-900" /></div>
              <div className="flex flex-col ml-2 p-1">
                <div className="font-poppins text-green-600 font-bold text-xl">Freelancing</div>
                <div className="text-sm font-sans">Delivering high-quality projects on time, demonstrating strong self-management, versatility, and client satisfaction.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:flex-col md:w-[10%] md:h-40 justify-around mt-2 h-20 items-center px-4 ml-2">
        <a href="/"><div className="relative z-10 flex text-gray-400 font-poppins hover:underline underline-offset-8 duration-1000 md:text-xl justify-end items-center w-max hover:text-purple-500">Home</div></a>
        <a href="/contacts"><div className="relative z-10 flex text-gray-400 font-poppins hover:underline underline-offset-8 duration-1000 md:text-xl justify-end items-center w-max hover:text-purple-500">Contact</div></a>
        <a href="/projects"><div className="relative z-10 flex text-gray-400 font-poppins hover:underline underline-offset-8 duration-1000 md:text-xl justify-end items-center w-max hover:text-purple-500">Projects</div></a>
      </div>
      <div className="md:hidden text-sm mb-2">Copyright @ 2024 Ashutosh Mishra</div>
    </div>
  );
}
