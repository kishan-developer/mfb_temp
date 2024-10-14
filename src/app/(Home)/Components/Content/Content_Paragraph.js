import React from 'react'

function Content_Paragraph({ data }) {

    return (
        <div className='bg-[#F7F3E8] w-full h-[296px] text-[14px] flex flex-col items-center justify-center text-center'>

            <div className='w-[722px] h-[96px]'>
                <p className='text-[18px] text-[#3C4617] font-Spezia'>
                    {data?.description[0]}
                </p>

                

            </div>


        </div>
    )
}

export default Content_Paragraph;