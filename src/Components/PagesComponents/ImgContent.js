import React from 'react'
import SideContent from './SideContent';
import Image from 'next/image';

function ImgContent({ contents }) {

    // console.log("propes in imgContet ",  data);


    return (
        <div className='w-full flex flex-row pt-[180px] gap-[10px]'>
            <div className=' '>
                <Image width={1246} height={773} src='/partner/Ahead.png' alt='imgContent_img' />
            </div>

            <div className='w-[664px] h-[773px] flex items-center justify-center px-[100px] gap-[40px]'>
                <SideContent contents={contents} />
            </div>
        </div>
    )
}

export default ImgContent;