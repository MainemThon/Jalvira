import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import './WhySection.css'

const WhySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const checkItems = [
    'Security embedded in every operation',
    'Single pane of glass for IT & Security',
    'AI-powered predictive analytics',
    'Automated threat response'
  ]

  return (
    <section className="why-section" ref={ref}>
      <div className="container">
        <div className="why-content">
          <motion.div 
            className="why-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Our Approach</span>
            <h2>Why Jalvira?</h2>
            <p>
              In the midst of modern IT complexity, Jalvira offers simplicity without sacrificing feature depth. 
              With a "Security-by-Design" approach to operations management, Jalvira ensures that security is not 
              just an add-on, but the core of every IT operational activity.
            </p>
            <ul className="check-list">
              {checkItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <FaCheck />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="why-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="visual-box">
              <motion.div 
                className="pulse-ring"
                animate={{ 
                  scale: [0.8, 1.2],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div 
                className="visual-content"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaCheck size={60} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhySection
