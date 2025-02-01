"use client"

import { Button } from "@/components/ui/button"
import { Sparkle } from "@/components/ui/sparkle"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function CiTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(true)

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} purpose="start_project" />
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-12 left-12"
        >
          <Sparkle className="text-accent w-8 h-8 animate-pulse" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-12 right-12"
        >
          <Sparkle className="text-accent w-8 h-8 animate-pulse" />
        </motion.div>

        <div className="container relative">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-[#232323] flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <span className="relative">Innovate,</span>
              <span className="relative">Build,</span>
              <span>
                <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-md">Scale</span>
              </span>
            </h2>
          </motion.div>

          {/* Decorative line with star */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 max-w-4xl mx-auto mb-20"
          >
            <div className="h-px bg-[#232323]/10 flex-1" />
            <span className="text-accent transform rotate-0 hover:rotate-180 transition-transform duration-500">
              <Sparkle className="text-accent w-8 h-8" />
            </span>
            <div className="h-px bg-[#232323]/10 flex-1" />
          </motion.div>

          {/* CTA Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-[#232323]/70 mb-12 font-display leading-relaxed">
              Ready to turn your innovative idea into the next big tech success? Join Nexus Forge's startup studio and
              let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={toggleModal}
                className="bg-[#232323] text-white hover:bg-[#232323]/90 min-w-[200px] h-14 text-lg relative overflow-hidden group hover:text-[#232323]"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20 rounded-br-3xl" />
      </section>
    </>
  )
}

