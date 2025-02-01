"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function JoinOurTeamPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    engineering: false,
    design: false,
    marketing: false,
    sales: false,
  })

  const handleFilterChange = (filterName: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: !prev[filterName as keyof typeof filters] }))
  }

  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
          Join Our <span className="text-accent">Team</span>
        </h1>
        <p className="text-xl text-white/60 mb-12 max-w-3xl">
          While we don't have any open positions at the moment, we're always on the lookout for exceptional talent. Feel
          free to explore potential opportunities and check back later!
        </p>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1a1a1a] border-[#333] text-white"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Filter by Department</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(filters).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox id={key} checked={value} onCheckedChange={() => handleFilterChange(key)} />
                <Label htmlFor={key} className="text-white capitalize">
                  {key}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">No Open Positions</h3>
          <p className="text-white/60 mb-6">
            We currently don't have any open positions, but we're always interested in hearing from talented
            individuals. Feel free to check back later or send us your resume for future opportunities.
          </p>
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => (window.location.href = "mailto:careers@nexusforge.com")}
          >
            Send Resume to Email
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

