import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import './Pricing.css'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Up to 50 endpoints',
    'Real-time monitoring & analytics',
    'Advanced threat detection & hunting',
    'Vulnerability assessments',
    'Automated task management',
    '24/7 support'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="pricing" className="pricing-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Simple Pricing</span>
          <h2>Start Protecting Your Infrastructure Today</h2>
          <p>Transparent pricing with no hidden fees</p>
        </motion.div>

        <motion.div 
          className="pricing-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 30px 80px rgba(59, 130, 246, 0.4)' }}
        >
          <div className="pricing-header">
            <h3>Enterprise License</h3>
            <div className="price">
              <span className="currency">$</span>
              <motion.span 
                className="amount"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              >
                136
              </motion.span>
              <span className="period">/month</span>
            </div>
          </div>
          
          <div className="pricing-features">
            <ul>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <FaCheck />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="pricing-footer">
            <motion.a
              href="https://whop.com/joined/jalvira-it-operations-security/products/jalvira-1-month-license/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg btn-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase Now
            </motion.a>
            <p className="pricing-note">
              Need more than 50 devices? <a onClick={scrollToContact}>Contact us</a> for custom enterprise pricing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
