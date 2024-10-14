"use client";


import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Info from '@/app/location/Components/Info';
// import MapLogo from './MapLogo';
// import ContactDetail from './ContactDetail';

function Map_section() {

    // const buttonRef_1 = useRef(null);

    // const buttonRef = useRef(null);

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

    return (
        <div className=" w-full ">
            <div className=' w-fill relative'>

                <Image className="relative" width={1918.08} height={1244.09} src='/location/img_2.png' alt='imgContent_img' />

                <div>
                    <button

                        onClick={onClickHandle_1}
                        className='button_1 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[40%] left-[24%]'
                    >
                        +
                    </button>



                    <button

                        onClick={onClickHandle_2}
                        className='button_2 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[34%] left-[26%]'
                    >
                        +
                    </button>
                </div>

                <div>
                    <button

                        onClick={onClickHandle_3}
                        className='button_3 bg-[#AB8456] text-white w-[40px] h-[40px]  text-[1.5rem] rounded-full absolute top-[70%] left-[64%]'
                    >
                        +
                    </button>

                    <button

                        onClick={onClickHandle_4}
                        className='button_4 bg-[#AB8456] text-white w-[40px] h-[40px] text-[1.5rem] rounded-full absolute top-[74%] left-[60%]'
                    >
                        +
                    </button>
                </div>

                {/* <div className="absolute top-[990.58px] left-0 w-full  bg-red-800"> */}
                    <Info />
                {/* </div> */}


            </div>

           
           
        </div>
    )
}

export default Map_section;