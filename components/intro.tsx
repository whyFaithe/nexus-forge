"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Intro() {
  const images = [
    "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg",
    "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  ]
  return (
    <section className=" pt-60 pb-16 md:pt-60 md:pb-20 bg-white">
      {/* Background Pattern */}
      <div
        className="absolute translate-y-1/2 inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container">
        <div className="space-y-12">
          {/* Text Sections */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1"
            >
              <h2 className="text-2xl md:text-4xl font-display font-black text-[#232323] ">Tech visionaries.</h2>
              <h2 className="text-2xl md:text-4xl font-display font-black  text-[#232323] ">Startup builders.</h2>
              <h2 className="text-2xl md:text-4xl font-display font-black text-[#232323] ">Future shapers.</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm text-[#232323]">
                As a tech startup studio, we believe in the power of innovation and entrepreneurship. Our hands-on
                approach combines technical expertise with startup experience to transform ideas into successful tech
                companies.
              </p>
            </motion.div>
          </motion.div>
          {/* Images Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-7 gap-6"
          >
            <div className="relative col-span-4 aspect-[4/3] bg-muted rounded-2xl overflow-hidden mt-4">
              <Image src={images[0] || "/placeholder.svg"} alt="Team collaboration" layout="fill" objectFit="cover" />
            </div>
            <div className="relative col-span-3 aspect-[4/5] bg-muted rounded-2xl overflow-hidden">
              <Image src={images[1] || "/placeholder.svg"} alt="Tech development" layout="fill" objectFit="cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

