import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const pixelsRef = useRef([])
  const dolphinRef = useRef(null)

  useEffect(() => {
    // Animate pixels
    pixelsRef.current.forEach((pixel, index) => {
      gsap.to(pixel, {
        opacity: Math.random(),
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1
      })
    })

    // Animate dolphin
    if (dolphinRef.current) {
      gsap.to(dolphinRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }
  }, [])

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

  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="pixel-container">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="pixel"
              ref={el => pixelsRef.current[i] = el}
              style={{
                left: `${10 + i * 3}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>
        
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Revolutionary SaaS Platform
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ITOps & Cyber Intelligence<br />
            <span className="gradient-text">Convergence</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Bridge the gap between IT operations and cybersecurity with Jalvira's unified platform. 
            Real-time visibility, predictive analytics, and rapid response—all in one dashboard.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="btn-primary btn-lg"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className="btn-secondary btn-lg"
              onClick={scrollToFeatures}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: '360°', label: 'Visibility' },
              { value: '50+', label: 'Devices Monitored' },
              { value: '24/7', label: 'Real-time Protection' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
