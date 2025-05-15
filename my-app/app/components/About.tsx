import { assets, infoList, toolsData} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About me
      </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div>
          <Image src={assets.photo_jpg} alt='user' className='rounded-full w-64'/>
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I'm a student that love computer magic. Do you believe it? Oh, I think I'm just kidding, haha!
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className='border-[0.5px] border-gray-400 dark:border-white rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                // use keys to track which list items have changed between renders
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-200 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          {/* <h4 className='my-6 text-gray-700 font-Ovo'>
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default About
