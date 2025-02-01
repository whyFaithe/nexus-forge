"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "./contact-modal"
import { Logo } from "@/components/ui/logo"
import { Menu } from "lucide-react"

export function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 md:hidden">
            <div className="container flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="text-sm hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/case-studies"
                className="text-sm hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/incubator"
                className="text-sm hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Incubator
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button
                onClick={() => {
                  toggleModal()
                  setMobileMenuOpen(false)
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Start Project
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* MODAL OUTSIDE NAV */}
      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} purpose="start_project" />
      )}
    </div>
  )
}

