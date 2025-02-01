"use client"

import { ArrowUpRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ContactModal } from "./contact-modal"
import { Button } from "@/components/ui/button"

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: "01",
      name: "Startup Incubation",
      description: "We nurture innovative ideas and transform them into successful startups.",
      image:
        "https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "02",
      name: "App Development",
      description: "We build cutting-edge mobile and web applications tailored to your needs.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "03",
      name: "Tech Consulting",
      description: "Our experts provide strategic guidance to navigate the complex tech landscape.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "04",
      name: "MVP Development",
      description: "We help you build and launch your Minimum Viable Product quickly and efficiently.",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <section className="md:px-4 px-8 relative py-16 md:py-32 bg-white overflow-hidden">
      {/* Services side text */}
      <div className="absolute left-0 top-0 bg-accent py-4 px-2">
        <p className="vertical-text text-xs font-medium tracking-widest text-accent-foreground">SOLUTIONS</p>
      </div>
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#232323]">
            Our <span className="inline-block bg-accent px-4 py-1 rounded-full">Solutions</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Services List */}
          <div className="flex flex-col h-full">
            <p className="text-[#232323]/70 text-sm mb-8">
              Nexus Forge offers comprehensive solutions for tech startups, from initial concept to market launch and
              beyond
            </p>

            <div className="space-y-4 flex-grow">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group w-full text-left px-4 md:px-6 py-3 md:py-4 rounded-full transition-all duration-300 ${
                    index === activeService
                      ? "bg-[#232323] text-white"
                      : "bg-white text-[#232323] border-2 border-[#232323]/10 hover:border-accent"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                      <span className={index === activeService ? "text-accent" : "text-[#232323]/40"}>
                        {service.id}
                      </span>
                      <span className="font-display text-sm md:text-base">{service.name}</span>
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        index === activeService ? "text-accent" : "text-[#232323]/40"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Card */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full mt-8 lg:mt-0"
          >
            <div className="relative h-full min-h-[300px]  sm:min-h-[400px] rounded-3xl overflow-hidden group">
              <Image
                src={services[activeService].image || "/placeholder.svg"}
                alt={services[activeService].name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/40" />
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 md:mb-4">
                    {services[activeService].name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">{services[activeService].description}</p>
                </div>
                <div className="flex flex-col xs:flex-row gap-2 md:gap-4 mt-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full text-sm md:text-base py-2 md:py-3"
                  >
                    Start your journey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/team" className="w-full xs:w-auto">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-[#232323] w-full text-sm md:text-base py-2 md:py-3"
                    >
                      Meet our team
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} purpose="start_project" />
    </section>
  )
}

