import React from 'react'
import Image from 'next/image'

function Info() {
  return (
    <div className='bg-[#AB8456] w-full h-[171px] flex flex-row items-center py-2 px-3'>
      <div className='h-full w-[20%] flex items-center justify-center px-12 border-r-2 border-white'>
        <Image width={154.77} height={112.25} src='/Home/logo.png' alt='home_logo' />
      </div>
      <div className='w-[70%] flex items-center justify-center px-12 '>

        <p className='text-white text-[23.98px] leading-[42.62px] font-[300] font-Spezia w-[921.74px] h-[128px]'>
          The Alba goes beyond luxury living, cultivating an oasis for reawakening, reconnection and renewal. It is place to truly live and thrive, providing a canvas for bold thinkers to enhance their overall experience of life.</p>
      </div>

      <div className='w-auto flex items-center justify-center'>
        <button className='text-white px-3 py-1 border-[1px] border-white text-[18.65px] font-[300] font-Spezia tracking-5 leading-[31.97px]'>DISCOVER MORE</button>
      </div>
    </div>
  )
}

export default Info