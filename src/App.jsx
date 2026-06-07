import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import ThreatDemo from './components/ThreatDemo'
import Features from './components/Features'
import Benefits from './components/Benefits'
import WhySection from './components/WhySection'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Problem />
      <ThreatDemo />
      <Features />
      <Benefits />
      <WhySection />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
