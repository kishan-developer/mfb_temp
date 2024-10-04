import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

function Nav() {
  return (
    <div className='w-full h-[80px] flex flex-row items-center justify-center bg-[#3C4617] text-white'>
      <ul className='flex flex-row items-center gap-16 uppercase font-[poppins] font-thin'>
        <li>
          <Link href="/residences" > Residences </Link></li>
        <li>
          <Link href="/partners" >Partners </Link>
        </li>
        <li>
          <Link href="/amenities" > Amenities </Link>
        </li>
        <li className=" ">
          <Link href="/" > 
            <Image className='w-[90px] h-[60px]' src='/Home/logo.png' alt='logo' />
          </Link>
        </li>

        <li>
          <Link href="/services" >Services </Link>
        </li>
        <li>
          <Link href="/location" >Location  </Link>
        </li>
        <li>
          <Link href="/developer" >The Developer</Link>
        </li>

       

      </ul>
      
    </div>
  )
}

export default Nav;