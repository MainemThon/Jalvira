import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Problem.css'

const Problem = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="problem-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>The Challenge</h2>
          <p>
            In today's digital era, IT infrastructure has become the primary target for attacks. 
            Organizations struggle with siloed teams, fragmented tools, and reactive approaches.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
