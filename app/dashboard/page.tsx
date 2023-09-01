"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Group({ id }: { id: number }) {
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
        className={`m-auto w-full h-4/5 bg-white`}
        ref={ref}
      ></motion.div>
    </section>
  );
}

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  //checks auth
  if (!session && status == "unauthenticated") {
    router.push("api/auth/signin");
  }
  if (session) {
    console.log(session);
  }
  return (
    <div className="">
      {[1, 2, 3, 4, 5].map((id) => (
        <Group key={id} id={id} />
      ))}
      <motion.div style={{ scaleX }} />
    </div>
  );
}
