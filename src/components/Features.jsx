import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiDesktopComputer } from 'react-icons/hi'
import { FaShieldAlt, FaChartLine } from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: HiDesktopComputer,
      title: 'Unified IT Operations',
      points: [
        { label: 'Real-time Infrastructure Monitoring', desc: 'Monitor server health, networks, databases, and cloud applications from one central dashboard.' },
        { label: 'Performance Analysis', desc: 'Identify bottlenecks and system slowdowns before they impact end users.' },
        { label: 'Task Automation', desc: 'Reduce manual workload with automated patching, backup, and system recovery.' }
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Advanced Cyber Intelligence',
      points: [
        { label: 'Threat Detection & Hunting', desc: 'Detect suspicious activities and potential cyber attacks using advanced AI algorithms.' },
        { label: 'Vulnerability Assessment', desc: 'Proactively scan infrastructure to find security gaps before attackers exploit them.' },
        { label: 'Cyber Threat Intelligence (CTI)', desc: 'Gain deep insights into latest attack trends, threat actors, and industry-relevant Indicators of Compromise (IOCs).' }
      ]
    },
    {
      icon: FaChartLine,
      title: 'Integrated Security Analytics',
      points: [
        { label: 'Event Correlation', desc: 'Jalvira connects operational logs with security feeds to understand whether an incident is a normal technical issue or a cyber attack.' },
        { label: 'Predictive Intelligence', desc: 'Shift from reactive to predictive approaches for both technical and security challenges.' },
        { label: 'Automated Response', desc: 'Enable rapid mitigation with integrated security playbooks and automated workflows.' }
      ]
    }
  ]

  return (
    <section id="features" className="features-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Core Capabilities</span>
          <h2>Comprehensive Feature Set</h2>
          <p>Jalvira eliminates silos between operations and security teams with a unified dashboard</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={30} />
              </motion.div>
              <h3>{feature.title}</h3>
              {feature.points.map((point, i) => (
                <p key={i}>
                  <strong>{point.label}:</strong> {point.desc}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
