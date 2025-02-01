import { notFound } from "next/navigation"
import Image from "next/image"
import { solutions } from "@/data/solutions"
import { MotionDiv } from "@/components/MotionWrapper"
import { CheckCircle2 } from "lucide-react"

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }))
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug)

  if (!solution) {
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
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">{solution.title}</h1>
        <div className="aspect-video relative mb-8">
          <Image
            src={solution.image || "/placeholder.svg"}
            alt={solution.title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <p className="text-xl text-white/60 mb-8">{solution.description}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Features</h2>
            <ul className="space-y-2">
              {solution.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-2 mt-1" />
                  <span className="text-white/60">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Benefits</h2>
            <ul className="space-y-2">
              {solution.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-2 mt-1" />
                  <span className="text-white/60">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}

