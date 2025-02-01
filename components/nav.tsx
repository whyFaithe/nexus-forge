"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { Logo } from "@/components/ui/logo"

export function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="relative">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[50] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Nexus Forge</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="text-sm hover:text-accent transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-sm hover:text-accent transition-colors">
              Case Studies
            </Link>
            <Link href="/incubator" className="text-sm hover:text-accent transition-colors">
              Incubator
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition-colors">
              About
            </Link>
            <Button onClick={toggleModal} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* MODAL OUTSIDE NAV */}
      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} purpose="start_project" />
      )}
    </div>
  )
}

