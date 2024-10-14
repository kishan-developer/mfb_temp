import React from 'react'

function Section_Content_5({ data }) {
  return (
    // <div className='w-[664px] '>
      <div className='bg-[#F7F3E8] w-[664px] h-[869.75px] px-[100px] gap-[40px] flex flex-col items-center justify-center '>

        <div className='w-[464px] h-[516px] gap-y-[20px] flex flex-col items-start'>

          <h3
            className="w-[516px] h-[92px]  text-[#3C4617] text-[42px] font-bold font-ESDokument tracking-8 leading-[45.78px] uppercase">
            {data?.heading}
          </h3>

          <ul className='w-[464px] h-[192px] font-Spezia text-[#3C4617] font-[18px] leading-[32px] '> 
            
            {data?.list.map((item,index) => (
              <li  key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </div>
  )
}

export default Section_Content_5