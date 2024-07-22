"use client";
import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import StatusMsg from "./modal/StatusMsg";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

function Signup() {
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm('service_4gt5jos', 'template_w02a0rj', e.target as HTMLFormElement, '-tFublOejOzYfQe0F')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
      }, (error) => {
        console.log(error.text);
        setStatus('failed');
        setTimeout(()=>{
          alert('An error occurred, please try again.');
        },1500)
      }).finally(() => {
        setLoading(false);
        setTimeout(() => {
          setStatus('');
        }, 3000);
      });

    // Reset form fields
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('ashutosh01102004@gmail.com');
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className="h-full w-full md:w-max">
      <StatusMsg visible={status} />
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input required id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input required id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input required id="email" name="email" value={formData.email} onChange={handleChange} placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            className="h-36 w-full p-2 rounded-md flex text-start items-start justify-start resize-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here ..."
          />
        </LabelInputContainer>

        <button
          className={`bg-gradient-to-br relative group/btn from-black:  to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            <>
              Connect &rarr;
              <BottomGradient />
            </>
          )}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <a href="https://github.com/keyz4" className="w-full">
            <div className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
              <IconBrandGithub className="h-4 w-4  text-neutral-300" />
              <span className=" text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </div>
          </a>
          <div
            onClick={handleCopy}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input  bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              Gmail
            </span>
            <span className="text-sm text-gray-500 font-mono">{copy === true ? `( Mail Copied )` : " "}</span>
            <BottomGradient />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
