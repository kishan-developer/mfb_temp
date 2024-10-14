import React from 'react'

function SideContent({ contents }) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h2 className="text-[#3C4617] text-[42px] font-bold font-ESDokument tracking-8 leading-[45.78px] ">{contents?.title}</h2>
      <p className='font-light py-7 leading-7 font-[Spezia] text-[#3C4617] text-[18px]'>
        {contents?.description[0]}
      </p>
    </div>
  )
}

export default SideContent;