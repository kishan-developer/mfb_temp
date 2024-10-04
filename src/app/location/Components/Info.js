import React from 'react'
import Image from 'next/image'

function Info() {
  return (
      <div className='bg-[#AB8456] w-full h-[171px] flex flex-row items-center py-2 px-3'>
        <div className='h-full w-[20%] flex items-center justify-center px-12 border-r-2 border-white'>
          <Image width={100} height={40} src='/Home/logo.png' alt='home_logo'/>
        </div>
        <div className='w-[70%] flex items-center justify-center px-12 '>
        <p className='text-white text-[16px] font-thin font-[poppins]'>The Alba goes beyond luxury living, cultivating an oasis for reawakening, reconnection and renewal. It is place to truly live and thrive, providing a canvas for bold thinkers to enhance their overall experience of life.</p>
        </div>

        <div className='w-auto flex items-center justify-center'>
        <button className='text-white px-3 py-1 border-[1px] border-white text-[14px] font-extralight font-[poppins]'>DISCOVER MORE</button>
        </div>
      </div>
  )
}

export default Info