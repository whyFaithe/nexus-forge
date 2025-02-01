"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah is a visionary leader with over 15 years of experience in the tech industry. She founded Nexus Forge with the mission to empower innovative startups.",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael is a tech genius with a passion for cutting-edge technologies. He leads our technical team in developing innovative solutions for our clients.",
      image:
        "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Emily brings a user-centric approach to product development. Her expertise in UX design and product strategy helps shape our clients' ideas into successful products.",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Thompson",
      role: "Head of Business Development",
      bio: "David is an expert in startup growth and business strategy. He works closely with our incubated startups to help them achieve rapid and sustainable growth.",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Aisha Patel",
      role: "Lead Designer",
      bio: "Aisha is a creative powerhouse with a keen eye for design. She ensures that all our projects have a sleek, modern, and user-friendly interface.",
      image:
        "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Carlos Mendoza",
      role: "Senior Full-Stack Developer",
      bio: "Carlos is a coding wizard with expertise in multiple programming languages. He tackles complex technical challenges and mentors our junior developers.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
          Meet Our <span className="text-accent">Team</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">
          At Nexus Forge, our team is our greatest asset. We're a diverse group of innovators, technologists, and
          entrepreneurs dedicated to turning visionary ideas into successful tech ventures.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-display font-bold text-white mb-2">{member.name}</h3>
                <p className="text-accent mb-4">{member.role}</p>
                <p className="text-white/60 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-white/60 hover:text-accent transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-white/60 hover:text-accent transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.github} className="text-white/60 hover:text-accent transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

