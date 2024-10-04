import React from 'react';
import Image from 'next/image';

function Section_2() {
    return (
        <div className='w-full h-[727.47px] gap-[68px]  bg-[#F7F3E8] text-[#3C4617] flex flex-col items-center justify-center text-center'>

            <div className='w-[73.77px] h-[57.47px] flex items-center justify-center'>
                <Image width={73.77} height={57.47} src='/Home/g18_svg.svg' alt='logo' />
            </div>
            <div className='w-[1054px] h-[286px] gap-[24px] flex flex-col items-center justify-center'>
                <h3
                    className="text-[#3C4617] text-[42px] font-bold w-[750px] h-[46px] leading-[45px] font-ESDokument tracking-8">
                    The Dawn of Well-Living
                </h3>

                <p className='w-[744px] h-[160px] font-Spezia text-[18px] '>
                    Presented by OMNIYAT, only this level of expertise and experience can inform every characteristic and quality of The Alba Residences. Rewriting every existing standard and expectation, the ultimate luxury beachfront and well-living destination on Palm Jumeirah is designed by Zaha Hadid Architects with world-class services managed by Dorchester Collection.
                </p>

                <h3 className="text-[#3C4617] text-[30px] font-bold w-[744px] h-[32px] font-ESDokument">PRICES STARTING FROM AED 43,000,000</h3>
            </div>

            <div className='flex items-center justify-between gap-5 leading-9'>
                <button className='w-[250px] border-[1px] border-[#AB8456] text-[#AB8456] text-[14px] leading-8 font-ESDokument'>
                    BOOK YOUR PRIVATE MEETING
                </button>

                <button className='w-[250px] border-[1px] border-[#AB8456] text-[#AB8456] text-[14px] leading-8 font-ESDokument'>
                    Download brochure
                </button>
            </div>

            {/* border-image-source: linear-gradient(0deg, var(--oyester, #F7F3E8), var(--oyester, #F7F3E8)),
            linear-gradient(0deg, #AB8456, #AB8456); */}

        </div>
    )
}

export default Section_2;