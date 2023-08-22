"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Group({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -150);

  return (
    <section className="w-full h-screen  ">
      <motion.div
        style={{
          y,
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        className="m-auto w-[200px] h-[400px] bg-white"
        ref={ref}
      ></motion.div>
    </section>
  );
}

console.log(useScroll);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Group key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
