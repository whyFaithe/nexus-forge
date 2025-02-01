import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { incubatorProgram } from "@/data/incubator"
import { MotionDiv } from "@/components/MotionWrapper"

export default function IncubatorPage() {
  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <div className="text-center mb-16">
          <MotionDiv
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {incubatorProgram.title}
          </MotionDiv>
          <MotionDiv
            className="text-xl text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {incubatorProgram.description}
          </MotionDiv>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {incubatorProgram.features.map((feature, index) => (
            <MotionDiv
              key={feature.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#1a1a1a] rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-[16/9] relative">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 mb-6">{feature.description}</p>
                <Link href={`/incubator/${feature.slug}`}>
                  <Button
                    variant="outline"
                    className="group absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  )
}

