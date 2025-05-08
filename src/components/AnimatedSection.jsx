// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in", 
  delay = 0,
  duration = 0.5,
  once = true
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  
  const animations = {
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    "slide-down": {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  }
  
  const selectedAnimation = animations[animation] || animations["fade-in"]
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection