import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    endpoints: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest in Jalvira! Our team will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      endpoints: ''
    })
  }

  return (
    <section id="contact" className="cta-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Transform Your IT Operations?</h2>
          <p>Join forward-thinking organizations that trust Jalvira to secure and optimize their infrastructure.</p>
          
          <motion.form 
            className="cta-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-row">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: 'var(--primary-color)' }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: 'var(--primary-color)' }}
              />
            </div>
            <div className="form-row">
              <motion.input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                value={formData.company}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: 'var(--primary-color)' }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: 'var(--primary-color)' }}
              />
            </div>
            <div className="form-row">
              <motion.select
                name="endpoints"
                required
                value={formData.endpoints}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: 'var(--primary-color)' }}
              >
                <option value="">Number of Endpoints</option>
                <option value="1-25">1-25 devices</option>
                <option value="26-50">26-50 devices</option>
                <option value="51-100">51-100 devices</option>
                <option value="100+">100+ devices</option>
              </motion.select>
            </div>
            <motion.button
              type="submit"
              className="btn-primary btn-lg btn-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
