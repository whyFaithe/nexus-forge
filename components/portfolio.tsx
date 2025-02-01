"use client"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sparkle } from "@/components/ui/sparkle"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

export function Portfolio() {
  const projects = [
    {
      title: "TechFlow - AI Workflow Automation",
      description:
        "A revolutionary AI-powered platform that automates complex business workflows, increasing efficiency by 300%.",
      tags: ["AI/ML", "SaaS", "Enterprise"],
      images: [
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
      ],
    },
    {
      title: "HealthTech Connect - Telemedicine Platform",
      description:
        "An innovative telemedicine solution connecting patients with healthcare providers through secure video consultations.",
      tags: ["Healthcare", "Mobile", "Cloud"],
      images: [
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      ],
    },
    {
      title: "FinStack - Open Banking Platform",
      description:
        "A comprehensive open banking solution enabling seamless integration between financial institutions and fintech innovations.",
      tags: ["Fintech", "API", "Security"],
      images: [
        "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      ],
    },
    {
      title: "GreenCommute - Sustainable Transport App",
      description:
        "An eco-friendly transportation app helping users reduce their carbon footprint through smart route planning.",
      tags: ["Sustainability", "Mobile", "IoT"],
      images: [
        "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
        "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
      ],
    },
  ]

  const [currentProject, setCurrentProject] = React.useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="relative px-10 pt-24 pb-18 bg-white overflow-hidden">
      {/* Portfolio side text */}
      <div className="absolute left-0 top-0 mt-24 bg-accent py-4 px-2">
        <p className="vertical-text text-xs font-medium tracking-widest text-accent-foreground">PORTFOLIO</p>
      </div>

      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-display font-bold text-[#232323]">
            Our <span className="inline-block bg-accent px-4 py-1 rounded-md">Success</span> Stories
            <br />
            Built with Innovation
          </h2>
          <Link href="/success-stories">
            <Button variant="outline" className="group">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 mb-8"
          >
            {projects[currentProject].images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1"
              >
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${projects[currentProject].title} preview ${index + 1}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute left-4 top-32 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={previousProject}
              className="h-14 w-14 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent/10 transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="absolute right-4 top-32 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={nextProject}
              className="h-14 w-14 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent/10 transition-colors"
              aria-label="Next project"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Project Info */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              {projects[currentProject].tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 rounded-full px-4 py-1 text-sm text-[#232323]/60">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-display font-bold text-[#232323] mb-4 flex items-center justify-center gap-2">
              {projects[currentProject].title}
              <ArrowUpRight className="h-5 w-5" />
            </h3>
            <p className="text-[#232323]/60">{projects[currentProject].description}</p>
          </motion.div>

          {/* Project Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentProject ? "bg-accent w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Sparkle */}
      <Sparkle className="absolute bottom-12 right-12 text-accent w-6 h-6 animate-pulse" />
    </section>
  )
}

