import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Benefits.css'

const Benefits = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    { number: '01', title: '360° Visibility', desc: 'See the complete picture of IT health and security posture on a single screen. No more switching between multiple tools.' },
    { number: '02', title: 'Cost Efficiency', desc: 'Reduce costs by eliminating multiple separate tools and minimizing downtime through proactive monitoring.' },
    { number: '03', title: 'Rapid Response', desc: 'Detect and mitigate attacks much faster with integrated intelligence and automated response workflows.' },
    { number: '04', title: 'Proactive Protection', desc: 'Shift from reactive to predictive approach for both technical issues and security threats before they impact operations.' }
  ]

  return (
    <section id="benefits" className="benefits-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Why Choose Jalvira</span>
          <h2>Enterprise Benefits</h2>
          <p>Transform your IT operations and security posture with measurable outcomes</p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            >
              <div className="benefit-number">{benefit.number}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
