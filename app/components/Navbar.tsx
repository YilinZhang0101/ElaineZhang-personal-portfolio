import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(-16rem)')
  }

  const closeMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(16rem)')
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true)
      }
      else {
        setIsScroll(false)
      }
    })
  })

  return (
    <>
    {/* <div>
      <Image src={}
    </div> */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        {/* href="": "/" or "/current/page#", navigate back to current page */}
        <a href="#top"> 
            <Image src={assets.nu_icon} alt="" className='w-20 cursor-pointer mr-14'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            {/* <li><a href="#education">Education</a></li> */}
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button onClick={() => window.open('https://github.com/YilinZhang0101', '_blank')}>
              <Image src={isDarkMode ? assets.github_white_icon : assets.github_black_icon} alt='Github' className='w-6' />
            </button>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_black_icon} alt='' className='w-6' />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
              Contact 
              <Image src={assets.nu_icon} alt="" className='w-3'/>
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white_icon : assets.menu_black_icon} alt='' className='w-6' />
            </button>
        </div>

        {/* folden menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-48 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-350 transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
              {/* cursor-pointer: when mouse stop at it, cursor bacome a hand */}
              <Image src={assets.close_black_icon} alt='' className='w-5 cursor-pointer' />
            </div>
            
            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About me</a></li>
            {/* <li><a href="#education" onClick={closeMenu}>Education</a></li> */}
            <li><a href="#work" onClick={closeMenu}>Work</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
