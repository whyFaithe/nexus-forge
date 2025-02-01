import { notFound } from "next/navigation"
import Image from "next/image"
import { caseStudies } from "@/data/case-studies"
import { MotionDiv } from "@/components/MotionWrapper"

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">{study.title}</h1>
        <div className="aspect-video relative mb-8">
          <Image
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Challenge</h2>
            <p className="text-white/60 mb-8">{study.challenge}</p>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Solution</h2>
            <p className="text-white/60 mb-8">{study.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Impact</h2>
            <p className="text-white/60 mb-8">{study.impact}</p>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Outcome</h2>
            <p className="text-accent mb-8">{study.outcome}</p>
            <div className="bg-[#1a1a1a] rounded-3xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">Testimonial</h3>
              <p className="text-white/60 italic mb-4">"{study.testimonial.quote}"</p>
              <p className="text-accent">- {study.testimonial.author}</p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}

