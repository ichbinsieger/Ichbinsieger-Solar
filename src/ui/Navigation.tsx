import { div, menu } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logoview.png'

function Navigation() {
    const [Menu,OpenMenu] =useState(false)
  
  return (
    <div className='flex fixed top-0 z-50 left-0 right-0 items-center justify-between py-6 px-5 bg-gray-200'>
        <div className=' md:pl-8 flex flex-col-reverse items-center md:text-xs text-[10px] md:font-medium font-normal '> 
            <p className=' pt-[1px] md:pt-[0.5px]'>ICHBINSIEGER</p> <img src={logo} className='md:w-12 md:h-12 h-10 w-10' alt="" />
         </div>
        <nav className=' md:space-x-16  '>
            <FaBars onClick={()=> OpenMenu(!Menu) } className= {`${Menu == true ? "hidden" : "block"}  md:hidden text-xl`}/>
               
            <div className=' hidden md:inline-flex space-x-10 font-semibold'>
            <a href="/">Home</a>
            <a href="#power">Service</a>
            <a href="#contact">contact Us</a>
            <a href="#projects" className=''>works</a>
            </div>
            {Menu? <div>
                <FaTimes onClick={()=>OpenMenu(Menu == false)} className='md:hidden text-xl mb-2'/>
                <div className='w-full h-[100vh] text-white flex flex-col items-center space-y-20 mt-7 pt-10 bg-black absolute z-10 left-0'> 
                <a className='' href="/">Home</a>
            <a href="#power" onClick={()=>OpenMenu(Menu == false)}>Service</a>
            <a href="#contact" onClick={()=>OpenMenu(Menu == false)}>Contact Us</a>
            <a href="#projects" onClick={()=>OpenMenu(Menu == false)} className=''>Works</a>
            <a href='#contact'onClick={()=>OpenMenu(Menu == false)} className=' w-9/12 cursor-pointer flex justify-center items-center bg-green-500 py-3 px-5 rounded font-semibold'> Get a quote </a>
                 </div>
            </div>:<FaBars className='hidden'/> }
            <a href='#contact' className=' hidden cursor-pointer md:inline  bg-green-500 py-3 px-5 rounded font-semibold'> Get a quote </a>
        </nav>
      
    </div>
  )
}

export default Navigation