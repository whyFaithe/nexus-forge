"use client"

import Image from "next/image"
import { Sparkle } from "@/components/ui/sparkle"
import { motion } from "framer-motion"

export function Process() {
  const steps = [
    {
      id: "01",
      title: "Ideation",
      description:
        "We help refine your startup idea, validate the market opportunity, and define the value proposition.",
      image: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg",
    },
    {
      id: "02",
      title: "Strategy",
      description:
        "We develop a comprehensive roadmap covering technical architecture, market entry, and growth strategies.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    },
    {
      id: "03",
      title: "Development",
      description:
        "Our expert team builds your MVP, focusing on scalable architecture and user-centered design principles.",
      image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
    },
    {
      id: "04",
      title: "Launch & Scale",
      description: "We support your market launch and help scale your startup through our network and resources.",
      image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
    },
  ]

  return (
    <section className="relative px-10 pt-24 bg-[#232323] overflow-hidden">
      {/* Top Slanted Accent Edge */}
      <div
        className="absolute top-0 left-0 w-full h-[75px] bg-accent z-0 translate-y-0"
        style={{
          clipPath: "polygon(0% -2%, 0% 100%, 100% 40%, 100% -2%)", // Creates a triangle with a flat top
        }}
      />
      {/* Top Slanted White Edge */}
      <div
        className="absolute top-0 left-0 w-full h-[65px] bg-white z-0 translate-y-0"
        style={{
          clipPath: "polygon(0% -2%, 0% 100%, 100% 40%, 100% -2%)", // Creates a triangle with a flat top
        }}
      />

      {/* HOW IT WORKS side text */}
      <div className="absolute left-0 top-0 bg-[#1a1a1a] mt-24 py-4 px-2 z-10">
        <p className="vertical-text text-xs font-medium tracking-widest text-white">THE PROCESS</p>
      </div>

      {/* Decorative sparkles */}
      <Sparkle className="absolute top-24 right-24 text-accent w-8 h-8 animate-pulse" />
      <Sparkle className="absolute bottom-24 left-24 text-accent w-8 h-8 animate-pulse" />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto z-10">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            How We Build{" "}
            <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-md">Success</span>
          </h2>
          <p className="text-white/60">
            Our proven startup studio model combines strategic guidance, technical expertise, and hands-on support to
            maximize your startup's chances of success.
          </p>
        </div>

        {/* Process Grid */}
        <div className="relative grid md:grid-cols-2 gap-6 z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl p-8 space-y-6"
            >
              <span className="text-accent text-xl font-display">{step.id}</span>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={`${step.title} process visualization`}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display text-white">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bottom slanted edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] bg-white z-0 "
        style={{
          clipPath: "polygon(0% 102%, 100% 102%, 100% 0%, 0% 40%)", // Creates a triangle with a flat top
        }}
      />
    </section>
  )
}

