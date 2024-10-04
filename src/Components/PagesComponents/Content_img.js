import React from 'react'
import SideContent from './SideContent';
import Image from 'next/image';

function Content_img({ src, contents }) {

    return (
        <div className='w-full h-[80vh] flex my-20'>

            <div className='w-[45%] h-[100%] flex items-center justify-center p-20'>
                <SideContent contents={contents} />
            </div>

            <div className='h-[100%] w-fill '>
                <Image width={100} height={100}  src={src} alt='imgContent_img' />
            </div>
            
        </div>
    )
}

export default Content_img;