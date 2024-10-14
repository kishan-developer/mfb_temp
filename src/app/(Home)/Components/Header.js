import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <div className='header z-10 h-[60px] bg-[#AB8456] text-white text-1xl w-full flex flex-row items-center justify-between px-7 font-poppins'>


            <Image width={50} height={50} src='/Home/logo.png'  alt='image_loge'/>

            <div className='flex flex-row items-center justify-between gap-5 font-[poppins]'>
                <div className='flex items-center justify-between gap-5 leading-9'>
                    <button className='w-[250px] border-[1px] border-white text-white text-[14px] leading-8 font-[poppins]'>
                        BOOK YOUR PRIVATE MEETING
                    </button>

                    <button className='w-[250px] border-[1px] border-white text-white text-[14px] leading-8 font-[poppins]'>
                        Download brochure
                    </button>
                </div>

                <div >
                    Whatsapp
                </div>
                <div>
                    Call Us
                </div>
            </div>
            
        </div>
    );
}

export default Header;
