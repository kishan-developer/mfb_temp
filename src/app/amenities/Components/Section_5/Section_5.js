import React from 'react'
import Section_5_img from './Section_5_img';
import Section_Content_5 from './Section_Content_5';

function Section_5() {

    const imgSrc = "/amen/section_5.jpeg";

    const data = [
        {
            "heading": "SPA & WELL-LIVING DESTINATION",
            "description": "At the heart of The Alba is a distilled focus on well-living, a principle underpinned by longevity and sustainability. Within this serene retreat, an advanced wellness programme covering 3000 m² awaits, offering personalised sensorial experiences designed for ultimate relaxation.",
            "list" : [
                "Longevity therapies",
                "Diagnosis pods",
                "Treatment rooms & serenity zones",
                "Mindful movement studios",
                "Vitality wet areas",
                "Scalp & hair salon"
            ]
        }
    ];


  return (

    <div className='w-full h-[1269.75px] pt-[100px] pb-[300px] flex flex-row  gap-x-[10px]'>
        <Section_5_img src={imgSrc} />  
    
        <Section_Content_5 data ={data[0]} />
    </div>

)
      
  }

export default Section_5;