import React from 'react';
import Image from 'next/image';

function Section_4() {
    return (
        <section className="relative h-[1351px]    flex flex-col items-center justify-center bg-[#D2C2A8]">
            
            <div className="w-[100%] h-[1351px] overflow-y-scroll flex flex-row items-top">

                <div className='w-[55%] h-fit  flex flex-col items-center pb-[10%]  '>

                    <Image width={687.38} height={836.89} className="mt-[95.01px] ml-[162.8px]" src='/Home/scroller/P1_L5A6326_master.jpeg' alt='section_1_first_img'/>

                    <Image width={475.48} height={559.66} className=" ml-[657.66px] " src='/Home/scroller/P1_L5A6326_master.jpeg' alt='section_2_first_img' />

                    <Image width={687.38} height={836.89} className="mt-[95.01px] ml-[162.8px]" src='/Home/scroller/P1_L5A6326_master.jpeg' alt='section_3_first_img' />

                    <Image width={478.48} height={559.66} className="ml-[657.66px]" src='/Home/scroller/P1_L5A6326_master.jpeg' alt='section_4_first_img' />

                    <Image width={687.38} height={836.89} className="mt-[95.01px] ml-[162.8px]" src='/Home/scroller/Scroll animation imageArtboard 10.png' alt='section_5_first_img' /> 

                </div>

                <div className="w-[907.03px] h-[1351px] float-end relative bg-cover bg-center bg-no-repeat opacity-120 flex items-center justify-center ml-[] " style={{ backgroundImage: "url('/Home/scroller/BINYAN_LIV3021_Plot31_S190_EXT_FacadeVignette_Final3500.jpg')" }}>
                    <div className="absolute bottom-[auto] right-[auto] text-center text-white p-8 rounded-lg font-[poppins]">
                        <h1 className="text-[42px] font-bold mb-4 text-[#FFFFF] font-ESDokument">WELL-LIVING</h1>
                        <p className="text-[42px] font-bold mb-4 text-[#FFFFFF] font-ESDokument">UNSCRIPTED</p>
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Section_4;