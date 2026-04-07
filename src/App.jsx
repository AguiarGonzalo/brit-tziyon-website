import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Safety from './components/Safety'
import Certificates from './components/Certificates'
import Recommendations from './components/Recommendations'
import Preparations from './components/Preparations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="safety"><Safety /></div>
        <div id="certificates"><Certificates /></div>
        <div id="recommendations"><Recommendations /></div>
        <div id="preparations"><Preparations /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
export default App;
