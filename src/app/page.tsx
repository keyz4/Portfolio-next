"use client";
import React from "react";
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MagicBento } from "@/components/MagicBento"
import Projects from "@/components/Projects"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function HomePage(){
  return (
    <main className="relative bg-slate-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden" >
      <TracingBeam className="max-w-7xl w-full" >
        <Hero/>
        <MagicBento/>
        <Projects/>
        <Footer/>
      </TracingBeam>
    </main>
  )
}