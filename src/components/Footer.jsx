import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Jalvira
            </motion.h2>
            <p>Revolutionary ITOps & Cyber Intelligence Convergence Platform</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a onClick={() => scrollToSection('benefits')}>Benefits</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Jalvira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
