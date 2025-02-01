"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  purpose?: "general" | "start_project" | "book_consultation"
}

export function ContactModal({ isOpen, onClose, purpose = "general" }: ContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [contactPurpose, setContactPurpose] = useState(purpose)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message, contactPurpose })
    onClose()
  }

  return (
    <div className="relative z-[999999]" style={{ position: "relative", zIndex: 999999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ zIndex: 999999 }}
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] rounded-3xl p-8 w-full max-w-md my-8 relative"
              onClick={(e) => e.stopPropagation()}
              style={{ zIndex: 999999 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-white">Contact Us</h2>
                <button onClick={onClose} className="text-white/60 hover:text-accent">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-[#232323] border-[#333] text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#232323] border-[#333] text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1">Purpose</label>
                  <RadioGroup
                    defaultValue={contactPurpose}
                    onValueChange={(value) =>
                      setContactPurpose(value as "general" | "start_project" | "book_consultation")
                    }
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="text-white">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="start_project" id="start_project" />
                      <Label htmlFor="start_project" className="text-white">
                        Start a Project
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="book_consultation" id="book_consultation" />
                      <Label htmlFor="book_consultation" className="text-white">
                        Book a Consultation
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-[#232323] border-[#333] text-white"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {contactPurpose === "book_consultation" ? "Book Consultation" : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

