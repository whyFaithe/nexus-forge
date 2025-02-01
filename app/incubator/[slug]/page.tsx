import { notFound } from "next/navigation"
import Image from "next/image"
import { incubatorProgram } from "@/data/incubator"
import { MotionDiv } from "@/components/MotionWrapper"
import { CheckCircle2 } from "lucide-react"

export function generateStaticParams() {
  return incubatorProgram.features.map((feature) => ({
    slug: feature.slug,
  }))
}

export default function IncubatorFeaturePage({ params }: { params: { slug: string } }) {
  const feature = incubatorProgram.features.find((f) => f.slug === params.slug)

  if (!feature) {
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
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">{feature.title}</h1>
        <div className="aspect-video relative mb-8">
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <p className="text-xl text-white/60 mb-8">{feature.description}</p>
        <h2 className="text-2xl font-display font-bold text-white mb-4">What We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {feature.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-accent mr-2 mt-1 flex-shrink-0" />
              <span className="text-white/60">{detail}</span>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </div>
  )
}

