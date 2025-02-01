"use client"
import { motion } from "framer-motion"

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Terms of Service</h1>
        <div className="bg-[#1a1a1a] rounded-3xl p-8">
          <p className="text-white/60 mb-4">
            This is a placeholder for the Nexus Forge Terms of Service. The actual terms of service will be added here,
            outlining the rules and guidelines for using our services.
          </p>
          <p className="text-white/60">
            For any questions or concerns regarding our terms of service, please contact us at legal@nexusforge.com.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

