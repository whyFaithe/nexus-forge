"use client"

import { motion, type MotionProps } from "framer-motion"
import type React from "react"

type MotionComponentProps = MotionProps & {
  children: React.ReactNode
}

export const MotionDiv: React.FC<MotionComponentProps> = motion.div
export const MotionSection: React.FC<MotionComponentProps> = motion.section

// Add more motion components as needed
export const MotionH1: React.FC<MotionComponentProps> = motion.h1
export const MotionP: React.FC<MotionComponentProps> = motion.p

