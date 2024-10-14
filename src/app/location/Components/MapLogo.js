import React from 'react';
import { FaMapMarker } from "react-icons/fa";
import Image from 'next/image';

function MapLogo() {
  return (
      <div>
          <button
              className=' text-white px-3  rounded-full absolute top-[2%] left-[53%] z-10'
          >
              <Image width={50} height={35} className='w-[50px] h-[35px]' src='/Home/logo.png' alt='logo' />

          </button>

          <button

              className=' text-[#AB8456] px-3  text-[2rem] rounded-full absolute top-[1%] left-[51%]'
          >
              <FaMapMarker size={80} />
          </button>
      </div>

  )
}

export default MapLogo