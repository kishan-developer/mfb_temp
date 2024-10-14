import React from 'react';
// import data from "./CrouselImages/data";

function CrouselContent({ data }) {
  // const [currentData, setCurrentData] = useState(data);


  return (
    <div className='w-[640.68px] h-[701.15px] pl-[106.68px] gap-[21.86px] flex flex-col '>
      {
        data?.map((item, index) => (
          <p
            key={index}
            className='w-[534px]  hover:border-b-[2.85px] hover:border-[#666B51]  text-[#3C4617] font-Spezia text-[24px] leading-[42.67px]'
          >
            {item.title}
          </p>
        ))
      }
    </div>
  )
}

export default CrouselContent;