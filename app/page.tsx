"use client";
import { useRef, useEffect, Component, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Logo() {
  const logoRef = useRef(null);

  return (
    <>
      <motion.div
        ref={logoRef}
        className="relative m-auto aspect-square h-4/5 w-4/5 lg:h-4/5 lg:w-auto object-contain"
      >
        <Image
          className="object-fit: contain"
          alt="fleet services of florida logo"
          src="/fleetServicesOfFloridaLogo.png"
          fill
        />
      </motion.div>
      <h2 className=" text-l sm:text-xl md:text-2xl lg:text-3xl text-black font-bold pt-2 text-center">
        The Worlds Finest Fleet Maintenance Provider
      </h2>
    </>
  );
}

function Services() {
  return <div className="h-full w-full"></div>;
}

function Logo3() {
  return <h2>Asss</h2>;
}

function Group({ id, children }: { id: number; children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -50);
  useEffect(() => {}, [scrollYProgress]);
  return (
    <section className="m-auto  sm:w-full md:w-4/5 h-screen py-[50px] ">
      <motion.div
        style={{
          y,
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        className={`m-auto w-full h-4/5 bg-teal-100`}
        ref={ref}
      >
        {children}
      </motion.div>
    </section>
  );
}

let display = [<Logo />, <Services />, <Logo3 />];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
      {display.map((child, i) => (
        <Group key={i} id={i}>
          {child}
        </Group>
      ))}
      <motion.div style={{ scaleX }} />
    </div>
  );
}
