import React from 'react'

function SideContent({ contents }) {
  return (
    <div className='w-[70%]'>
      <h2 className="text-[#3C4617] text-[42px] font-bold  font-[poppins]">{contents?.title}</h2>
      <p className='font-light py-7 leading-7 font-[Spezia] text-[#3C4617] text-[18px]'>
        {contents?.description[0]}
      </p>
    </div>
  )
}

export default SideContent;