"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/MotionWrapper"

export function Hero() {
  const images = [
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
    "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
    "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
  ]
  return (
    <section className="relative pt-40 md:pt-15 pb-[15rem] bg-[#232323] flex flex-col justify-start items-start ">
      <div
        className="w-full mb-50 md:mb-40 absolute inset-0 z-0 scale-120"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(35, 35, 35, .2) 0%, rgba(35, 35, 35, .9) 70%, #232323 90%),
      url("https://lh3.googleusercontent.com/d/1-2Fwmd50F4L0yc0om1RNyoEMlEhlUvFb=s1000")
    `,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="max-w-4xl mx-auto text-center space-y-4 z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md">Nexus</span> Forge
          </h1>
          <p className="text-2xl md:text-3xl font-display tracking-wide">Building the Future, One Startup at a Time</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nexus Forge is a dynamic tech startup studio that transforms innovative ideas into successful ventures. We
            combine startup incubation, cutting-edge development, and strategic guidance to build tomorrow's tech
            leaders.
          </p>
        </div>
      </MotionDiv>

      {/* Slanted Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[60px] bg-[#232323] z-0 translate-y-full"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)", // Creates a triangle with a flat top
        }}
      />

      {/* Cards */}
      <div className="absolute -bottom-10 min-w-[300px] min-h-min lg:min-w-full left-[50%] transform -translate-x-1/2 translate-y-1/2 flex flex-wrap gap-0 justify-center gap-2 md:gap-0">
        {images.map((src, i) => (
          <MotionDiv
            key={i}
            initial={{ opacity: 0, y: 50, rotate: i % 2 === 1 ? -3 : 3 }}
            animate={{ opacity: 1, y: 0, rotate: i % 2 === 1 ? -6 : 6 }}
            whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={` size-32 sm:size-36 md:size-48 lg:size-60  p-1 rounded-2xl overflow-hidden transform bg-white transition-transform duration-300 hover:scale-105 hover:z-10 ${
              i % 2 === 1 ? "mt-0" : "-mt-14"
            }`}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Startup team ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

