import React from 'react';
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";

function ContactDetail() {
  return (
    <>
          <ul className='text-[#3C4617] font-[poppins]'>
              <li className='py-3 flex items-center gap-3 cursor-pointer font-[poppins]'>
                  <span className='p-1 rounded-full border-[1px] border-[#AB8456] text-[#AB8456]'> <MdCall /> </span>
                  <span>Toll free (within UAE) : 800 666</span>
              </li>

              <li className='py-3 flex items-center gap-3 cursor-pointer font-[poppins]'>
                  <span className='p-1 rounded-full border-[1px] border-[#AB8456] text-[#AB8456]'> <MdCall /> </span>
                  <span>Outside UAE : +971 4 511 5004</span>
              </li>

              <li className='py-3 flex items-center gap-3 cursor-pointer font-[poppins]'>
                  <span className='p-1 rounded-full border-[1px] border-[#AB8456] text-[#AB8456]'> <FaWhatsapp /> </span>
                  <span>WhatsApp: +971 54 488 6666</span>
              </li>

              <li className='py-3 flex items-center gap-3 cursor-pointer font-[poppins]'>
                  <span className='p-1 rounded-full border-[1px] border-[#AB8456] text-[#AB8456]'> <MdEmail /> </span>
                  <span>sales@omniyat.com</span>
              </li>

              <li className='py-3 flex items-center gap-3 cursor-pointer font-[poppins]'>
                  <span className='p-1 rounded-full border-[1px] border-[#AB8456] text-[#AB8456]'> <GiEarthAmerica /> </span>
                  <span>www.omniyat.com</span>
              </li>
          </ul>
    </>
  )
}

export default ContactDetail