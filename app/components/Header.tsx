import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.photo_jpg} alt='' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Elaine Zhang. <Image src={assets.moon_black_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Looking for - Software Development Engineering
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a first-year graduate student at Northwestern University, IL, USA. My major is Computer Science.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center gap-2'>
            Contact me 
            <Image src={isDarkMode ? assets.right_arrow_black_icon : assets.right_arrow_white_icon} alt='' className='w-4'/>
        </a>
        <a href="/files/CV_Elaine_Zhang.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            Resume 
            <Image src={isDarkMode ? assets.download_white_icon : assets.download_black_icon} alt='' className='w-4'/>
        </a>
      </div>
      
    </div>
  )
}

export default Header

