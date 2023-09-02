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

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Logo() {
  return <h2>Asss</h2>;
}

function Logo2() {
  return <h2>Asss</h2>;
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
    <section className="m-auto w-4/5 h-screen py-[50px] ">
      <motion.div
        style={{
          y,
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        className={`m-auto w-full h-4/5 bg-red-300`}
        ref={ref}
      >
        {children}
      </motion.div>
    </section>
  );
}

let display = [<Logo />, <Logo2 />, <Logo3 />];

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
