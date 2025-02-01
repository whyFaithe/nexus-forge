"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      title: "TechFlow - AI Workflow Automation",
      description:
        "A revolutionary AI-powered platform that automates complex business workflows, increasing efficiency by 300%.",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI/ML", "SaaS", "Enterprise"],
      outcome: "Raised $10M in Series A funding and acquired over 500 enterprise clients within the first year.",
    },
    {
      title: "HealthTech Connect - Telemedicine Platform",
      description:
        "An innovative telemedicine solution connecting patients with healthcare providers through secure video consultations.",
      image:
        "https://images.pexels.com/photos/3846005/pexels-photo-3846005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Healthcare", "Mobile", "Cloud"],
      outcome: "Facilitated over 1 million virtual consultations and expanded to 5 countries in just 18 months.",
    },
    {
      title: "FinStack - Open Banking Platform",
      description:
        "A comprehensive open banking solution enabling seamless integration between financial institutions and fintech innovations.",
      image:
        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Fintech", "API", "Security"],
      outcome: "Partnered with 50+ banks and processed over $1 billion in transactions within the first two years.",
    },
    {
      title: "GreenCommute - Sustainable Transport App",
      description:
        "An eco-friendly transportation app helping users reduce their carbon footprint through smart route planning.",
      image:
        "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Sustainability", "Mobile", "IoT"],
      outcome:
        "Reached 2 million active users and contributed to a 15% reduction in carbon emissions in partner cities.",
    },
    {
      title: "EduTech Pro - Adaptive Learning Platform",
      description: "An AI-driven educational platform that personalizes learning experiences for students of all ages.",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["EdTech", "AI", "SaaS"],
      outcome: "Adopted by 1000+ schools worldwide, improving student performance by an average of 25%.",
    },
    {
      title: "SecureChain - Blockchain Security Solution",
      description: "A cutting-edge blockchain-based security system for supply chain management and data integrity.",
      image:
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Blockchain", "Security", "Enterprise"],
      outcome: "Secured $15M in seed funding and onboarded 20 Fortune 500 companies as early adopters.",
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
          Our Success <span className="text-accent">Stories</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">
          Discover how Nexus Forge has helped transform innovative ideas into thriving tech ventures. These success
          stories showcase our commitment to nurturing groundbreaking startups and driving technological advancement.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image src={story.image || "/placeholder.svg"} alt={story.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{story.title}</h3>
                <p className="text-white/60 mb-4">{story.description}</p>
                <p className="text-accent mb-6">{story.outcome}</p>
                <Button variant="outline" className="group">
                  Read Full Story
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

