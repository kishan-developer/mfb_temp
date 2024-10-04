import React from 'react'

function Content_1({ contents }) {

   
    return (
        <div className='bg-[#F7F3E8] w-full h-[648px] text-[14px] flex items-center justify-center text-center'>

            <div className='w-[60%] py-2'>
                <h2 className="text-[#3C4617] text-[42px] font-bold  font-[poppins]">{contents?.title}</h2>
                <p className='font-light py-7 leading-7 font-[Spezia] text-[#3C4617] text-[18px]'>
                    {contents?.description[0]}
                </p>
                <p className='font-light py-7 leading-7 font-[Spezia] text-[#3C4617] text-[18px]'>
                    {contents?.description[1]}
                </p>

            </div>


        </div>
    )
}

export default Content_1