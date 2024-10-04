import React from 'react';
import Image from 'next/image';

function Section_4() {
    return (
        <section className="relative h-[1351px]  flex flex-col items-center justify-center bg-[#D2C2A8]">
            <div className="w-[100%] h-[1351px] overflow-scroll flex flex-row items-top">

               

                <div className='w-[55%] h-fit overflow-scroll flex flex-col items-center justify-between pb-[10%] gap-10 '>

                    <Image width={687.38} height={836.89} className=" mt-[95.01px] ml-[162.8px] " src='/Home/scroller/img_2.png' alt='section_4_first_img'/>

                    {/* <img className=" w-[475.48px] h-[559.66px] mt-[791.34px] ml-[657.66px] " src='./Home/scroller/img_2.png' alt='section_4_first_img' />

                    <img className="w-[687.38px] h-[836.89px] mt-[95.01px] ml-[162.8px] " src='./section_4/img_2.jpeg' alt='section_4_first_img' />

                    <img className=" w-[475.48px] h-[559.66px] mt-[791.34px] ml-[657.66px] " src='./Home/scroller/img_2.png' alt='section_4_first_img' />


                    <img className="w-[687.38px] h-[836.89px] mt-[95.01px] ml-[162.8px] " src='./section_4/img_2.jpeg' alt='section_4_first_img' /> */}

                </div>

                <div className="w-[907.03px] h-[1351px] float-end relative bg-cover bg-center bg-no-repeat opacity-120 flex items-center justify-center ml-[] " style={{ backgroundImage: "url('/Home/scroller/img_2.png')" }}>
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