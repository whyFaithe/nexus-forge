"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      title: "TechFlow - AI Workflow Automation",
      description:
        "A revolutionary AI-powered platform that automates complex business workflows, increasing efficiency by 300%.",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI/ML", "SaaS", "Enterprise"],
    },
    {
      title: "HealthTech Connect - Telemedicine Platform",
      description:
        "An innovative telemedicine solution connecting patients with healthcare providers through secure video consultations.",
      image:
        "https://images.pexels.com/photos/3846005/pexels-photo-3846005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Healthcare", "Mobile", "Cloud"],
    },
    {
      title: "FinStack - Open Banking Platform",
      description:
        "A comprehensive open banking solution enabling seamless integration between financial institutions and fintech innovations.",
      image:
        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Fintech", "API", "Security"],
    },
    {
      title: "GreenCommute - Sustainable Transport App",
      description:
        "An eco-friendly transportation app helping users reduce their carbon footprint through smart route planning.",
      image:
        "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Sustainability", "Mobile", "IoT"],
    },
  ]

  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
          Our <span className="text-accent">Portfolio</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">
          Discover the innovative projects we've brought to life. Each venture in our portfolio represents our
          commitment to turning visionary ideas into successful tech realities.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/60 mb-6">{project.description}</p>
                <Button variant="outline" className="group">
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

