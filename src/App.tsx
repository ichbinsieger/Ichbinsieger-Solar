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
      <div className="bg-[url('./assets/roof2.jpg')] bg-cover relative h-[100vh] bg-center">
        <Navigation/>
        <Hero/>
        </div>
        
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
