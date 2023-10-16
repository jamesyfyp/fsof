"use client"
import { motion } from "framer-motion";

const cardData = [
    {
        headline: "Tired of Driver and Vehicle Downtime?",
        text: "We can help you keep your drivers and your cars on the road and productive. Nobody wants to pay for a car or driver that isn't working!"
    },
     {
        headline: "Need Reliable Service Providers?",
        text: "Quality service providers are in high demand, leaving you in a bind. Dealerships often come at a premium, and empty shops can raise doubts. We offer a trusted network of reliable providers."
    },
     {
        headline: "Can’t Price Check Every Invoice?",
        text: "Don't have the time to price check all your vehicle invoices? We leverage our pool of clients to bring our vendors volume, keeping your prices as competitive as possible."
    },
]

function Card({ headline, text, index }: { headline: string; text: string; index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -100  }}
            animate={{ opacity: 1, y: 0}}
            transition={{delay: .25 + (index/3)}}
            

        className="text-center bg-stone-300/60 mt-5 h-[300px] rounded-md mt-[-170px]">
            <h2 className="text-3xl font-black my-5">{headline}</h2>
            <p className="text-lg  mx-5">{text}</p>
        </motion.div>
    )
}

export default function HeroSection () {

    return (
        <div className=" col-span-12 bg-[url('/HeroImg.svg')] h-[700px] mt-[200px] bg-transparent w-full bg-cover bg-center grid grid-cols-3 px-10 gap-10 " >
            {cardData.map((data, i) => <Card key={i} index={i} headline={data.headline} text={data.text}/>
            )}
        </div>
    ) 
}