// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './ui/ContactUs'
import Footer from './ui/Footer'
import Hero from './ui/Hero'
import Navigation from './ui/Navigation'
import Projects from './ui/Projects'
import SectionA from './ui/SectionA'
import SolarBenefits from './ui/SolarBenefits'
import SolarEnergySection from './ui/SolarEnergySection'
function App() {


  return (
    <>
      <div>
        <Navigation/>
        <Hero/>
        <SectionA/>
        <SolarEnergySection/>
        <SolarBenefits/>
        <Projects/>
        <ContactUs/>
        <Footer/>
      </div>
    </>
  )
}

export default App
