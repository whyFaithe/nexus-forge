"use client"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#232323] min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Privacy Policy</h1>
        <div className="bg-[#1a1a1a] rounded-3xl p-8">
          <p className="text-white/60 mb-4">
            This is a placeholder for the Nexus Forge Privacy Policy. The actual privacy policy will be added here,
            detailing how we collect, use, and protect user information.
          </p>
          <p className="text-white/60">
            For any questions or concerns regarding our privacy practices, please contact us at privacy@nexusforge.com.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

