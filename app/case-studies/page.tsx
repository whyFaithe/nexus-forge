import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/data/case-studies"
import { MotionDiv } from "@/components/MotionWrapper"

export default function CaseStudiesPage() {
  if (!caseStudies) {
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
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 text-center">
          Our Success <span className="text-accent">Stories</span>
        </h1>
        <p className="text-xl text-white/60 mb-16 max-w-3xl mx-auto text-center">
          Discover how Nexus Forge has helped transform innovative ideas into thriving tech ventures.
        </p>
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <MotionDiv
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-white/60">{study.description}</p>
                <p className="text-accent font-semibold">{study.outcome}</p>
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="outline" className="group">
                    Read Full Story
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

