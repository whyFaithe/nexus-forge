import { Space_Grotesk, Familjen_Grotesk as Cabinet_Grotesk } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import type { Metadata } from "next"
import type React from "react" // Import React

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const cabinetGrotesk = Cabinet_Grotesk({
  subsets: ["latin"],
  variable: "--font-cabinet-grotesk",
})

export const metadata: Metadata = {
  title: "Nexus Forge - Tech Startup Studio",
  description: "Building the Future, One Startup at a Time",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cabinetGrotesk.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <ScrollToTop />
        <Nav />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}

