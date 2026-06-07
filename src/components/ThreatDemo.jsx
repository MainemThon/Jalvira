import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLaptop, 
  FaServer, 
  FaShieldAlt, 
  FaSkullCrossbones,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBug,
  FaLock,
  FaUnlock,
  FaDatabase,
  FaNetworkWired
} from 'react-icons/fa'
import './ThreatDemo.css'

const ThreatDemo = () => {
  const [phase, setPhase] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredNode, setHoveredNode] = useState(null)

  const phases = [
    {
      id: 0,
      title: "Secure Network",
      description: "All endpoints and systems operating normally with baseline security measures in place.",
      status: "safe",
      color: "#10b981"
    },
    {
      id: 1,
      title: "Initial Attack Vector",
      description: "Cybercriminal sends targeted phishing email or exploits vulnerability to reach endpoint user.",
      status: "warning",
      color: "#f59e0b"
    },
    {
      id: 2,
      title: "Endpoint Compromised",
      description: "User credential stolen or malware installed. The endpoint becomes an insider threat.",
      status: "danger",
      color: "#ef4444"
    },
    {
      id: 3,
      title: "Lateral Movement Initiated",
      description: "Attacker uses compromised endpoint to scan network, escalate privileges, and move laterally.",
      status: "critical",
      color: "#dc2626"
    },
    {
      id: 4,
      title: "Critical Data Accessed",
      description: "Sensitive databases and systems breached. Data exfiltration in progress.",
      status: "critical",
      color: "#991b1b"
    },
    {
      id: 5,
      title: "Jalvira Intervention",
      description: "AI-powered detection identifies anomalous behavior and blocks malicious activity instantly.",
      status: "protected",
      color: "#3b82f6"
    },
    {
      id: 6,
      title: "Threat Neutralized",
      description: "Attack contained, endpoint quarantined, and security restored across entire infrastructure.",
      status: "safe",
      color: "#10b981"
    }
  ]

  const nodes = [
    { 
      id: 'attacker', 
      label: 'Threat Actor', 
      icon: FaSkullCrossbones, 
      x: 100, 
      y: 200,
      info: 'External cybercriminal or threat actor attempting to breach your network'
    },
    { 
      id: 'endpoint', 
      label: 'User Endpoint', 
      icon: FaLaptop, 
      x: 300, 
      y: 200,
      info: 'Employee workstation - often the weakest link in security'
    },
    { 
      id: 'network', 
      label: 'Internal Network', 
      icon: FaNetworkWired, 
      x: 500, 
      y: 200,
      info: 'Corporate network infrastructure and internal systems'
    },
    { 
      id: 'data', 
      label: 'Critical Data', 
      icon: FaDatabase, 
      x: 700, 
      y: 200,
      info: 'Sensitive databases, intellectual property, and confidential information'
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % phases.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const getNodeColor = (nodeId) => {
    if (phase === 0) return '#10b981'
    
    switch(nodeId) {
      case 'attacker':
        return phase >= 1 ? '#ef4444' : '#64748b'
      case 'endpoint':
        if (phase >= 5) return '#3b82f6'
        if (phase >= 2) return '#ef4444'
        if (phase === 1) return '#f59e0b'
        return '#10b981'
      case 'network':
        if (phase >= 5) return '#3b82f6'
        if (phase >= 3) return '#ef4444'
        return '#10b981'
      case 'data':
        if (phase >= 5) return '#3b82f6'
        if (phase >= 4) return '#ef4444'
        return '#10b981'
      default:
        return '#64748b'
    }
  }

  const shouldShowLine = (from, to) => {
    if (from === 'attacker' && to === 'endpoint') return phase >= 1 && phase <= 4
    if (from === 'endpoint' && to === 'network') return phase >= 3 && phase <= 4
    if (from === 'network' && to === 'data') return phase >= 4 && phase <= 4
    return false
  }

  return (
    <section className="threat-demo-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Live Attack Simulation</span>
          <h2>How Endpoints Become Attack Gateways</h2>
          <p>See how attackers exploit your weakest link—and how Jalvira stops them in real-time</p>
        </motion.div>

        <div className="demo-wrapper">
          {/* Main Demo Area */}
          <div className="demo-main">
            {/* Phase Timeline */}
            <div className="phase-timeline">
              {phases.map((p, index) => (
                <motion.div
                  key={p.id}
                  className={`timeline-dot ${phase === index ? 'active' : ''} ${phase > index ? 'completed' : ''}`}
                  onClick={() => setPhase(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    '--dot-color': p.color
                  }}
                >
                  <span className="timeline-number">{index + 1}</span>
                  <div className="timeline-tooltip">{p.title}</div>
                </motion.div>
              ))}
              <div 
                className="timeline-progress"
                style={{ width: `${(phase / (phases.length - 1)) * 100}%` }}
              />
            </div>

            {/* Current Phase Info */}
            <motion.div 
              className="phase-info"
              key={phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                borderLeftColor: phases[phase].color,
                background: `linear-gradient(90deg, ${phases[phase].color}10, transparent)`
              }}
            >
              <div className="phase-badge" style={{ background: phases[phase].color }}>
                Phase {phase + 1} of 7
              </div>
              <h3>{phases[phase].title}</h3>
              <p>{phases[phase].description}</p>
            </motion.div>

            {/* Visual Network */}
            <div className="network-visual">
              <svg viewBox="0 0 800 300" className="network-svg">
                <defs>
                  <linearGradient id="attackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection Lines */}
                {nodes.map((node, i) => {
                  if (i === nodes.length - 1) return null
                  const nextNode = nodes[i + 1]
                  const isAttackLine = shouldShowLine(node.id, nextNode.id)
                  
                  return (
                    <g key={`line-${node.id}-${nextNode.id}`}>
                      {/* Base line */}
                      <line
                        x1={node.x}
                        y1={node.y}
                        x2={nextNode.x}
                        y2={nextNode.y}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      
                      {/* Attack line */}
                      <AnimatePresence>
                        {isAttackLine && (
                          <motion.line
                            x1={node.x}
                            y1={node.y}
                            x2={nextNode.x}
                            y2={nextNode.y}
                            stroke="url(#attackGrad)"
                            strokeWidth="4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ filter: 'url(#glow)' }}
                          />
                        )}
                      </AnimatePresence>
                    </g>
                  )
                })}

                {/* Jalvira Shield - appears at phase 5 */}
                <AnimatePresence>
                  {phase >= 5 && (
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      {/* Shield behind all nodes */}
                      <motion.circle
                        cx="400"
                        cy="200"
                        r="350"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        opacity="0.3"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.circle
                        cx="400"
                        cy="200"
                        r="350"
                        fill="rgba(59, 130, 246, 0.05)"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Jalvira label */}
                      <text
                        x="400"
                        y="50"
                        textAnchor="middle"
                        fill="#3b82f6"
                        fontSize="20"
                        fontWeight="700"
                      >
                        🛡️ JALVIRA PROTECTION ACTIVE
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Nodes */}
                {nodes.map((node) => {
                  const NodeIcon = node.icon
                  const color = getNodeColor(node.id)
                  const isCompromised = (
                    (node.id === 'endpoint' && phase >= 2 && phase <= 4) ||
                    (node.id === 'network' && phase >= 3 && phase <= 4) ||
                    (node.id === 'data' && phase >= 4 && phase <= 4)
                  )

                  return (
                    <g 
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Pulse ring for compromised nodes */}
                      {isCompromised && (
                        <motion.circle
                          cx={node.x}
                          cy={node.y}
                          r="45"
                          fill="none"
                          stroke={color}
                          strokeWidth="2"
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}

                      {/* Node circle */}
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="45"
                        fill="#1e293b"
                        stroke={color}
                        strokeWidth="4"
                        animate={isCompromised ? {
                          stroke: [color, '#dc2626', color],
                        } : {}}
                        transition={{ duration: 1, repeat: isCompromised ? Infinity : 0 }}
                        whileHover={{ scale: 1.1 }}
                      />

                      {/* Icon */}
                      <motion.foreignObject
                        x={node.x - 20}
                        y={node.y - 20}
                        width="40"
                        height="40"
                        whileHover={{ scale: 1.2 }}
                      >
                        <NodeIcon size={40} color={color} />
                      </motion.foreignObject>

                      {/* Warning icon for compromised */}
                      {isCompromised && (
                        <motion.foreignObject
                          x={node.x + 20}
                          y={node.y - 35}
                          width="30"
                          height="30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                          transition={{ rotate: { duration: 0.5, repeat: Infinity } }}
                        >
                          <FaBug size={30} color="#ef4444" />
                        </motion.foreignObject>
                      )}

                      {/* Protected icon */}
                      {phase >= 5 && node.id !== 'attacker' && (
                        <motion.foreignObject
                          x={node.x + 20}
                          y={node.y - 35}
                          width="30"
                          height="30"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring" }}
                        >
                          <FaCheckCircle size={30} color="#10b981" />
                        </motion.foreignObject>
                      )}

                      {/* Label */}
                      <text
                        x={node.x}
                        y={node.y + 65}
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="14"
                        fontWeight="600"
                      >
                        {node.label}
                      </text>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredNode === node.id && (
                          <motion.g
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            <rect
                              x={node.x - 100}
                              y={node.y - 110}
                              width="200"
                              height="60"
                              fill="#1e293b"
                              stroke={color}
                              strokeWidth="2"
                              rx="8"
                            />
                            <foreignObject
                              x={node.x - 90}
                              y={node.y - 100}
                              width="180"
                              height="50"
                            >
                              <div style={{ 
                                color: '#cbd5e1', 
                                fontSize: '12px', 
                                padding: '5px',
                                lineHeight: '1.4'
                              }}>
                                {node.info}
                              </div>
                            </foreignObject>
                          </motion.g>
                        )}
                      </AnimatePresence>
                    </g>
                  )
                })}

                {/* Attack path particles */}
                {phase >= 1 && phase <= 4 && (
                  <motion.circle
                    r="6"
                    fill="#ef4444"
                    initial={{ x: 100, y: 200 }}
                    animate={{
                      x: phase >= 4 ? 700 : phase >= 3 ? 500 : 300,
                      y: 200
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ filter: 'url(#glow)' }}
                  />
                )}
              </svg>
            </div>

            {/* Controls */}
            <div className="demo-controls-modern">
              <button
                className={`control-btn-modern ${isPlaying ? 'playing' : 'paused'}`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button
                className="control-btn-modern restart"
                onClick={() => setPhase(0)}
              >
                🔄
              </button>
              <div className="progress-info">
                Phase {phase + 1} / {phases.length}
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <motion.div 
            className="demo-stats-sidebar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Threat Intelligence</h4>
            
            <div className="stat-card danger">
              <div className="stat-icon">⚠️</div>
              <div className="stat-content">
                <div className="stat-value">82%</div>
                <div className="stat-label">Breaches start at endpoints</div>
              </div>
            </div>

            <div className="stat-card danger">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-value">277 days</div>
                <div className="stat-label">Average breach detection time</div>
              </div>
            </div>

            <div className="stat-card danger">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <div className="stat-value">$4.45M</div>
                <div className="stat-label">Average breach cost</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-card success">
              <div className="stat-icon">🛡️</div>
              <div className="stat-content">
                <div className="stat-value">&lt;5 min</div>
                <div className="stat-label">Jalvira detection time</div>
              </div>
            </div>

            <div className="stat-card success">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Threat prevention rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ThreatDemo
