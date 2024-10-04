import SideContent from '@/Components/PagesComponents/SideContent';
import React from 'react';
import Image from 'next/image';

function Section_6({ contents }) {

    return (
        <div className='bg-[#3C4617] w-full h-fit py-10 flex flex-col items-center justify-center'>
            <div className='w-[70%] h-[30%] bg-white flex items-center justify-center text-center p-5'>
                <SideContent contents={contents}/>
            </div>

            <div className='w-[70%] h-[fit] py-10 bg-white flex flex-col items-center justify-center'>
                <div className='w-[50%] h-[500px] '>
                    <Image width={1008.43} height={705.08}  src='/partner/green_img.jpeg' alt='section_img' />
                </div>
            </div>
        </div>
    )
}

export default Section_6;