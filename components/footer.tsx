import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const importantLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/incubator", label: "Incubator" },
    { href: "/about", label: "About" },
    { href: "/join-our-team", label: "Join Our Team" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ]

  return (
    <footer className="bg-[#232323] py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-3xl font-display text-white">
              Nexus <span className="text-accent">Forge</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white/60 font-display">Building the Future, One Startup at a Time</p>

          {/* Important Links */}
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
            {importantLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/60 hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-white/60 hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} Nexus Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

