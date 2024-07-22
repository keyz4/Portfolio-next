import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

function StatusMsg({ visible }: { visible: string }) {
  const [slide, setSlide] = useState(false);
  const [bordercolor, setBorderColor] = useState('border-green-600');
  const [color, setColor] = useState('text-green-600');
  const [bgcolor, setBgColor] = useState('bg-green-600');
  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState(<FaCheckCircle className='text-2xl text-green-600' />);

  const close = () => {
    setSlide(false);
  };

  useEffect(() => {
    if(visible==='success') {
      setBorderColor('border-green-600');
      setMessage('Message Sent');
      setIcon(<FaCheckCircle className='text-2xl text-green-600' />);
      setColor('text-green-600');
      setBgColor('bg-green-600');
    }
    if(visible==='failed'){
      setBorderColor('border-red-600');
      setMessage('Message not Sent');
      setIcon(<IoIosCloseCircle  className='text-2xl text-red-600' />);
      setColor('text-red-600');
      setBgColor('bg-red-600');
    } 
    if (visible === 'success' || visible === 'failed') {
      setSlide(true);
    }else{
        setSlide(false);
    }
  }, [visible]);

  return (
    <div
      className={`overflow-hidden w-60 h-[4rem] flex flex-col justify-between items-start absolute top-0 left-0 z-50 border-2 rounded-lg mt-[43rem] ml-8 bg-black md:mt-16 duration-[2000ms] transform ${
        slide ? 'translate-x-0' : '-translate-x-[150%]'
      } ${bordercolor}`}
    >
      <button onClick={close} className='absolute top-0 right-0 rounded-xl'>
        <IoMdClose className='text-2xl bg-transparent mt-1 mr-1 fill-slate-500' />
      </button>
      <div className="flex justify-center items-center mt-4 ml-4">
        <span>
          {icon}
        </span>
        <div className={`font-poppins ml-2 ${color}`}>
            {message}
        </div>
      </div>
      <div
        className={`w-full ${bgcolor} h-2 rounded-lg duration-1000 ${
          slide ? 'translate-x-0' : '-translate-x-full'
        }`}
      ></div>
    </div>
  );
}

export default StatusMsg;
