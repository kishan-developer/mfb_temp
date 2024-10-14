import React from 'react'
import SideContent from './SideContent';
import Image from 'next/image';

function Content_img({ src, contents }) {

    return (
        <div className='w-full  flex flex-row pt-[180px] gap-[10px] '>

            <div className='w-[664px] h-[773px] flex items-center justify-center px-[100px] '>
                <SideContent contents={contents} />
            </div>

            <div className='h-[100%] w-fill bg-orange-900'>
                <Image width={1246} height={773} src={src} alt='imgContent_img' />
            </div>
            
        </div>
    )
}

export default Content_img;