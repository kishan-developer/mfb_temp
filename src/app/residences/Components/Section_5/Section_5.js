import React from 'react'
import Section_5_img from './Section_5_img';
import Section_Content_5 from './Section_Content_5';


function Section_5() {

    const imgSrc = "/Residences/BINYAN_LIV3021_Plot31_S020_EXT_Balcony_Final3500.jpeg";

    const data = [
        {
            "heading": "THE ALBA RESIDENCES FEATURES",
            "list" : [
               "Architecture by Zaha Hadid Architects",
                "Managed by Dorchester Collection",
                "Expansive resort- style landscaping by Vladimir Djurovic",
                "60 Luxury residences",
                "3 Super penthouses",
                "3 & 4 Bedroom residences",
                "A diverse mix of simplex and duplex residences, some with dual - aspect layouts",
                "Access to exclusive resident - only amenities and the hotels landscaped areas",
                "ate beachfront"
            ]
        }
    ];


  return (
    <div className='w-full h-[1191px] pt-[120px] pb-[300px] gap-[10px] flex flex-row items-center '>
        
    
        <Section_Content_5 data={data[0]} />

        <Section_5_img src={imgSrc} />
    </div>
    )  
  }

export default Section_5;