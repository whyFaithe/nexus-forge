"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "David Thompson",
      role: "Head of Business Development",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
          About <span className="text-accent">Nexus Forge</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">
          Nexus Forge is a dynamic tech startup studio dedicated to transforming innovative ideas into successful
          ventures. Our team of experts combines technical prowess with entrepreneurial spirit to build the future of
          technology.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1a1a1a] rounded-3xl p-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/60 mb-6">
              To empower visionary entrepreneurs and foster groundbreaking technologies that shape the future of
              industries and improve lives globally.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-3xl p-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/60 mb-6">
              To be the world's leading tech startup studio, known for consistently launching innovative, impactful, and
              successful tech ventures.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-display font-bold text-white mb-8">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white">{member.name}</h3>
                <p className="text-white/60">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/join-our-team">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Join Our Team
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

