import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { solutions } from "@/data/solutions"
import { MotionDiv, MotionH1, MotionP } from "@/components/MotionWrapper"

export default function SolutionsPage() {
  if (!solutions) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <MotionH1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 relative">
          Our <span className="text-accent">Solutions</span>
          <MotionDiv
            className="absolute -bottom-2 left-0 h-2 bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </MotionH1>
        <MotionP className="text-xl text-white/60 mb-16 max-w-3xl">
          Discover our comprehensive suite of solutions designed to turn innovative ideas into successful tech ventures.
        </MotionP>
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <MotionDiv
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[#1a1a1a] rounded-[1.4rem] overflow-hidden p-6 h-full flex flex-col">
                <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{solution.description}</p>
                <Link href={`/solutions/${solution.slug}`}>
                  <Button variant="outline" className="group w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

