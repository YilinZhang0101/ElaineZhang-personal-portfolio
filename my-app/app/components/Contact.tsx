import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = ({isDarkMode}) => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending……");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "5849a858-3afc-4461-97be-a14fd8104480");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
        <h4 className="text-center mb-2 text-lg font-Ovo">
            Any question?
        </h4>
        <h2 className="text-center text-5xl font-Ovo">
            Contact me
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            I'd love to hear from you. Please use the form below. Feel free to share any feedback or comments!
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Your name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-50 dark:bg-gray-100 text-black'
                name='name'/>
                <input type='email' placeholder='Your email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-50 dark:bg-gray-100 text-black'
                name='email'/>
            </div>

            <textarea rows={6} placeholder='Please leave your message' required 
                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-50 dark:bg-gray-100 mb-6 text-black'
                name='message'>
            </textarea>

            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black dark:bg-white
                border border-white text-white dark:text-black rounded-full mx-auto hover:bg-gray-700 dark:hover:bg-gray-200 duration-500'
            >
                Submit now
                <Image src={isDarkMode ? assets.right_arrow_black_icon : assets.right_arrow_white_icon} alt='' className='w-4'/>
            </button>

            <p className='mt-4'>{result}</p>
        </form>
    </div>

  )
}

export default Contact
