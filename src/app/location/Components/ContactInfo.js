
"use client";


import { useRef } from 'react';
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";

import gsap from 'gsap';
import MapLogo from './MapLogo';
import ContactDetail from './ContactDetail';

import Image from 'next/image';



function ContactInfo() {

    const buttonRef_1 = useRef(null);

    const buttonRef= useRef(null);

    const onClickHandle_1 = () => {
        gsap.to(".button_1", { rotate: "+=180", duration: 1, delay: 0 });
    };

    const onClickHandle_2 = () => {
        gsap.to(".button_2", { rotate: "+=180", duration: 1, delay: 0 });
    };

    const onClickHandle_3 = () => {
        gsap.to(".button_3", { rotate: "+=180", duration: 1, delay: 0 });
    };

    const onClickHandle_4 = () => {
        gsap.to(".button_4", { rotate: "+=180", duration: 1, delay: 0 });
    };

    


    const contents = {
        "title": "AT YOUR SERVICES",
        "description": ["To make The Alba Residences, your new home on Dubai's Palm Jumeirah or enquire about further details, please contact us or leave your details and an OMNIYAT representative be in touch shortly.", ""]
    }

    return (
        <div className='w-full h-[80vh] flex flex-row bg-[#DBDBDC]'>

            <div className='w-[43%] h-[100%] flex flex-col items-center justify-center font-[poppins]'>

                <div className='w-[70%] cursor-pointer'>
                    <h2 className="text-[#3C4617] text-[20px] font-bold font-[poppins]">{contents?.title}</h2>
                    <p className='font-light py-7 leading-7 font-[Spezia] text-[#3C4617] text-[18px] font-[poppins]'>
                        {contents?.description[0]}
                    </p>
                </div>


                <div className='w-[70%]'>

                    <ContactDetail/>
                </div>

            </div>

            <div className='h-[100%] w-fill relative'>

                {/* <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{ backgroundImage: "url('/location/img_2.png')" }}>


                </section> */}

                <Image width={1440} height={853.58} className='w-[100%] h-[100%]' src='/location/img_2.png' alt='imgContent_img' />

                <div>
                    <button
                        ref={buttonRef_1}
                        onClick={onClickHandle_1}
                        className='button_1 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[40%] left-[24%]'
                    >
                        +
                    </button>



                    <button
                        ref={buttonRef}
                        onClick={onClickHandle_2}
                        className='button_2 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[34%] left-[26%]'
                    >
                        +
                    </button>
                </div>

                <div>
                    <button
                        ref={buttonRef}
                        onClick={onClickHandle_3}
                        className='button_3 bg-[#AB8456] text-white w-[40px] h-[40px]  text-[1.5rem] rounded-full absolute top-[70%] left-[64%]'
                    >
                        +
                    </button>

                    <button
                        ref={buttonRef}
                        onClick={onClickHandle_4}
                        className='button_4 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[74%] left-[60%]'
                    >
                        +
                    </button>
                </div>

                <MapLogo/>
               

            </div>


        </div>
    )
}

export default ContactInfo