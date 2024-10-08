import React from 'react'
import SideContent from './SideContent';
import Image from 'next/image';

function ImgContent({ contents }) {

    // console.log("propes in imgContet ",  data);


    return (
        <div className='w-full h-[80vh] flex flex-row'>
            <div className='h-[100%] w-fill '>
                <Image width={750} height={720}  src='/Home/img_content_img.jpeg' alt='imgContent_img' />
            </div>
            
            <div className='w-[45%] h-[100%] flex items-center justify-center'>
                <SideContent contents={contents} />
            </div>
        </div>
    )
}

export default ImgContent;