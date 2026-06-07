import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="nav-wrapper">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/jalvira-logo.svg" alt="Jalvira" className="logo-img" />
          </motion.div>
          
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <motion.li whileHover={{ y: -2 }}>
              <a onClick={() => scrollToSection('features')}>Features</a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a onClick={() => scrollToSection('benefits')}>Benefits</a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <a onClick={() => scrollToSection('pricing')}>Pricing</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a onClick={() => scrollToSection('contact')} className="btn-primary">Get Started</a>
            </motion.li>
          </ul>
          
          <div 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
