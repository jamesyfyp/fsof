"use client";
import { useRef, useEffect, Component, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import caroselData from "./lpCarouselData"

import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";


function TextBox({heading, text}: any) {
  return(
    <AnimatePresence>
      <motion.div 
        className="h-full w-full p-4 bg-gradient-to-b rounded-md from-black/70  to-white/20 text-center"
      >
        <motion.h3 key={heading}
        initial={{ y:-100, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        exit={{ y:-100, opacity: 0 }}
        transition={{ duration: 0.3 }} className="font-black text-2xl">{heading}</motion.h3>
        <motion.p
        key={text}
        initial={{ y:-100, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        exit={{ y:-100, opacity: 0 }}
        transition={{ duration: 0.3 }}
         className="m-10">{text}</motion.p>
      </motion.div>
    </AnimatePresence>
    
  )
}
function ImageSlider(){
  const [positionIndex, setPositionIndex] = useState(0);
  return (
    <motion.div  className="col-start-2 col-end-12 grid grid-cols-2 h-[400px] gap-20">
        <TextBox heading={caroselData[positionIndex].heading} text={caroselData[positionIndex].text} />
        <motion.div 
          className="h-full w-full p-4">
          <AnimatePresence>
            <div className="m-auto bg-stone-300/10 rounded-md h-[300px] w-[300px]">
               <motion.div
              key={caroselData[positionIndex].svg}
              initial={{ y:100, opacity: 0}}
              animate={{ y:0, opacity: 1 }}
              exit={{ y:-100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image  width={300} height={300} alt={caroselData[positionIndex].heading} src={caroselData[positionIndex].svg}/> 
            </motion.div> 
            </div>
          </AnimatePresence>
            {positionIndex != 0 && positionIndex != caroselData.length-1 ? 
            (
              <div className="w-[75px] m-auto mt-[20px]  h-10 rounded-full grid grid-cols-2">
                <button onClick={(e)=>{e.preventDefault();setPositionIndex(positionIndex-1)}} className="bg-stone-300  hover:bg-stone-400/40  rounded-l-full"><ArrowLeftIcon className="p-2"/></button>
                <button onClick={(e)=>{e.preventDefault();setPositionIndex(positionIndex+1)}} className="bg-stone-300  hover:bg-stone-400/40   rounded-r-full"><ArrowRightIcon className="p-2"/></button>
              </div>
            ) 
            : 
            positionIndex == 0 ?
            (
              <div className="w-full flex justify-center">
                <button onClick={(e)=>{e.preventDefault();setPositionIndex(positionIndex+1)}} className="w-[50px] m-auto mt-[20px] bg-stone-300 h-10 rounded-full hover:bg-stone-400/40">
                  <ArrowRightIcon className="h-10 w-10 m-auto p-2"/>
                </button>
              </div>
              
            ) : 
            (
              <div className="w-full flex justify-center">
                <button onClick={(e)=>{e.preventDefault();setPositionIndex(positionIndex-1)}}className="w-[50px] mx-auto mt-[20px] bg-stone-300 h-10 rounded-full hover:bg-stone-400/40">
                  <ArrowLeftIcon className="h-10 w-10 m-auto p-2"/>
                </button>
              </div>
            )
            }
        </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <div className="relative grid w-[1100px] m-auto  grid-cols-12 bg-gradient-to-b from-gray-400 by-gray-500 by-gray-900 to-black">
      <div className="col-span-12  mt-10">
        <h2 className="text-center font-black text-5xl p-0">OverWhelmed by Fleet Maintenance?</h2>
        <h2 className="text-center font-black text-5xl p-0 mt-5">We've Got You Covered!</h2>
        <div className="bg-[url('/HeroImg.svg')] h-[600px] bg-transparent w-full bg-cover bg-center" /> 
        <motion.div 
          whileHover={{
            scale: 1.1,
            transition: { duration: .3 },
          }}
          className="absolute bottom-[-75px] right-[350px] bg-stone-200/40 m-auto  mt-10 h-[150px] w-[400px] rounded-md grid grid-cols-2"
        >
          <button className="bg-stone-200 text-black m-12 rounded-sm hover:bg-stone-300">
            Contact Us
          </button>
          <p className="m-auto text-sm">
            Ready to Get Started? Explore Pricing and Dive into Our Comprehensive Fleet Maintenance Program!
          </p>
        </motion.div>
      </div>
      <div className="h-[20px]"/>
      </div>
      <div className="grid w-[1100px] m-auto py-10 mt-20  grid-cols-12 bg-gradient-to-b from-stone-300  to-emerald-900 rounded-md ">
        <div className="col-span-12 pb-10">
          <h3 className="text-center font-black text-5xl p-0 text-black">
            Explore Our Comprehensive
          </h3>
          <h3 className="text-center font-black text-5xl p-0 text-black mt-5">
            Maintenance Program
          </h3>
        </div>
        <ImageSlider />
      </div>
      <div className="h-[40px]"/>
    </>
  );
}
