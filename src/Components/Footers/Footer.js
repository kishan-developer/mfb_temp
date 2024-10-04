import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Image from 'next/image';

function Footer() {
  return (
    <div className='w-full h-[fit]  py-5 bg-[#F7F3E8] flex flex-col items-center justify-center text-[#3C4617]'>
      <div className='w-full  h-[40vh] flex items-center justify-center px-[5%]'>
        {/* logo & element */}
        <div className=' w-auto h-[40vh] px-10 flex flex-col gap-10 items-center justify-center'>
          <Image height={70} width={120}  src='/Home/g12_svg.svg' alt='logo' />


          <div className='py-3 flex flex-row justify-center items-center gap-3 cursor-pointer'>
            <span className='p-1 rounded-full border-[1px] border-black text-black'> <FaFacebookF /> </span>
            <span className='p-1 rounded-full border-[1px] border-black text-black'> <FaXTwitter /> </span>
            <span className='p-1 rounded-full border-[1px] border-black text-black'> <FaInstagram /> </span>
            <span className='p-1 rounded-full border-[1px] border-black text-black'> <FaYoutube /> </span>

          </div>

        </div>

        {/* Menus  */}
        <div className='w-[70%] h-[40vh]  flex justify-center p-10  gap-12'>
          <div className='flex flex-col  font-[1.2rem] gap-3'>
            <p className='font-thin'>Pages </p>
            <h2 className='font-normal'>Home</h2>
            <h2 className='font-normal'>Residences</h2>
            <h2 className='font-normal'>Partners</h2>
            <h2 className='font-normal'>Amenities</h2>
            <h2 className='font-normal'>Services</h2>
          </div>

          <div className='flex flex-col  font-[1.2rem] gap-3'>
            <h2>Developer</h2>
            <h2 className='underline'>Omniyat</h2>

          </div>

          <div className='flex flex-col font-[1.2rem] gap-3'>
            <h2>Location</h2>
            <h2>Palm Jumeirah</h2>

          </div>

          <div className='flex flex-col  font-[1.2rem] gap-3'>
            <h2>Support</h2>
            <h2>Contact Us</h2>

          </div>
        </div>

        {/* locatin */}

        <div className='w-[17%] h-[40vh] px-5 '>
          <div className='w-auto h-[40vh] flex flex-col  gap-5 py-10 '>
            <Image width={100} height={20}  src='/location/oly.png' alt='logo' />


            <button className='text-[0.8rem] bg-[#AB8456] px-4 py-1 text-white'>CONTACT US</button>

            <p className='w-full text-[#3C4617] text-[0.8rem]'>By signing  up I want to hear about new
              updates and masterpieces and agree with
              the data protection policy of OMNIYAT.</p>
          </div>

        </div>
      </div>

      <div className='w-full h-auto border-t-[1px] border-[#b6c386] px-[5%] py-5'>
        <div className='w-[80%] h-[50px] flex gap-10'>
          <span>The Alba Residences © 2024</span>
          <span className='underline'>Terms & Conditions</span>
          <span className='underline'>Privacy Policy</span>

        </div>
      </div>


    </div>
  )
}

export default Footer;