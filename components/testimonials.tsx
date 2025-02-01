"use client"

import Image from "next/image"
import { Sparkle } from "@/components/ui/sparkle"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const originalTestimonials = [
  {
    id: 1,
    name: "James Anderson",
    position: "CEO of TechFlow AI",
    quote:
      "Nexus Forge turned our AI concept into a thriving business. Their technical expertise and startup guidance were invaluable in our journey from idea to market leader.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    position: "Founder of HealthTech Connect",
    quote:
      "Working with Nexus Forge was transformative. They helped us navigate the complex healthcare tech landscape and build a platform that's now used by thousands of healthcare providers.",
    avatar: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO of FinStack",
    quote:
      "The technical expertise at Nexus Forge is unmatched. They helped us build a secure, scalable fintech platform that's revolutionizing open banking.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: 4,
    name: "Michelle Thompson",
    position: "Founder of GreenCommute",
    quote:
      "Nexus Forge didn't just build our product; they helped shape our entire business strategy. Their startup studio approach gave us the foundation we needed to succeed.",
    avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
  {
    id: 5,
    name: "Isabella Rodriguez",
    position: "CEO of DataSense Analytics",
    quote:
      "From day one, Nexus Forge understood our vision and helped us execute it perfectly. Their technical and strategic guidance was crucial to our success in the competitive analytics market.",
    avatar: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg",
  },
]

// Create an array with duplicated first and last items for the endless loop effect
const testimonials = [
  { ...originalTestimonials[originalTestimonials.length - 1], id: "last" },
  ...originalTestimonials,
  { ...originalTestimonials[0], id: "first" },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(autoScroll)
  }, [])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        if (currentIndex === testimonials.length - 1) {
          setCurrentIndex(1)
          carouselRef.current!.style.transition = "none"
          carouselRef.current!.style.transform = `translateX(-${100}%)`
        } else if (currentIndex === 0) {
          setCurrentIndex(testimonials.length - 2)
          carouselRef.current!.style.transition = "none"
          carouselRef.current!.style.transform = `translateX(-${(testimonials.length - 2) * 100}%)`
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, isTransitioning])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
    carouselRef.current!.style.transition = "transform 0.5s ease-in-out"
    carouselRef.current!.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
    carouselRef.current!.style.transition = "transform 0.5s ease-in-out"
    carouselRef.current!.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`
  }

  return (
    <section className="relative pt-32 pb-32 bg-[#232323] overflow-hidden">
      {/* Testimonials side text */}
      <div className="absolute left-0 top-0 mt-32 bg-[#1a1a1a] py-4 px-2 z-10">
        <p className="vertical-text text-xs font-medium tracking-widest text-white">TESTIMONIALS</p>
      </div>

      {/* Decorative sparkles */}
      <Sparkle className="absolute top-20 right-20 text-accent w-6 h-6 animate-pulse" />
      <Sparkle className="absolute bottom-40 left-40 text-accent w-6 h-6 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-md">Testimonials</span>{" "}
            that
            <br />
            Speak to Our Results
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Read through our testimonials to see why our clients love working with us and how we can help you achieve
            your business goals through creative and effective design.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full overflow-hidden ">
          <div
            ref={carouselRef}
            className="flex min-w-full "
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-10 transition-transform">
                <div className="bg-[#1a1a1a] rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-white">{testimonial.name}</h3>
                      <p className="text-white/60">{testimonial.position}</p>
                    </div>
                  </div>
                  <blockquote className="relative text-white/80 text-lg leading-relaxed px-10">
                    <span className="absolute -left-2 -top-4 text-accent/30 text-6xl font-serif">"</span>
                    {testimonial.quote}
                    <span className="absolute -right-2 -bottom-4 text-accent/30 text-6xl font-serif">"</span>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent/10 transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-accent transition-colors"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent/10 transition-colors group"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-accent transition-colors"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Top slanted edge line */}
      <div
        className="absolute top-0 left-0 w-full h-[100px] bg-white z-0 "
        style={{
          clipPath: "polygon(0% -2%, 0% 60%, 100% 30%, 100% -2%)", // Creates a triangle with a flat top
        }}
      />

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] bg-accent z-0 "
        style={{
          clipPath: "polygon(0% 102%, 0% 50%, 100% 0%, 100% 102%)", // Creates a triangle with a flat top
        }}
      />
      {/* Bottom white line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] bg-white z-0 "
        style={{
          clipPath: "polygon(0% 102%, 0% 60%, 100% 5%, 100% 102%", // Creates a triangle with a flat top
        }}
      />
    </section>
  )
}

