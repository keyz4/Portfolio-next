import { Meteors } from "../ui/meteors";

const skills1 = [' ', 'JavaScript', ' ', 'C++ ', ' Figma', ' ', 'Python', 'Next.js', 'SQL', ' ', 'ML', ' '];
const skills2 = ['Node.js', ' ', 'Express.js', 'MongoDB', ' ', "Socket.IO ", ' ', 'React.js', ' ', 'AI', ' ', 'Tailwind'];

function TechStack() {
  return (
    <div className="relative flex h-[16rem] md:h-full w-full p-2">
      <Meteors number={40} className="w-0.2 h-2 z-0" />
      <div className="flex flex-col md:flex-row w-full">
        <div className="left h-20 md:h-full w-full md:w-[35%] flex flex-col justify-center items-center text-wrap text-center font-sans font-bold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-xl md:text-2xl text-transparent ml-2 md:ml-8 lg:w-[60%] sticky top-0 md:sticky md:top-1/4">
          I keep improving my
          <div></div>
          <span className="text-xs md:text-2xl uppercase font-Wallpoet text-white font-normal">Techstack</span>
        </div>
        <div className="right h-full w-full md:w-[50%] flex flex-col md:flex-row justify-end md:overflow-y-auto hide-scrollbar">
          <div className="h-max w-full flex md:flex-col md:overflow-y-scroll hide-scrollbar scroll-m-4 overflow-x-scroll mb-1">
            {skills1.map((skill, i) => (
              <span key={i} className={`bg-slate-900 font-poppins font-medium flex justify-center items-center h-max md:p-4 md:w-36  border-2 rounded-xl m-1 z-10 ${skill===' ' ? 'hidden md:flex' : 'px-8 py-4'} `}>
                {skill}
              </span>
            ))}
          </div>
          <div className="h-max w-full flex md:flex-col md:overflow-y-scroll hide-scrollbar scroll-m-4 overflow-x-scroll mb-4">
            {skills2.map((skill, i) => (
              <span key={i} className={`bg-slate-900 font-poppins font-medium flex justify-center items-center h-max md:p-4 md:w-36  border-2 rounded-xl m-1 z-10 ${skill===' ' ? 'hidden md:flex' : 'px-8 py-4'} `}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
