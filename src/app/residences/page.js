import React from 'react'
import Hero from './Components/Hero';
import Section_2 from './Components/Section_2';
import Section_3 from './Components/Section_3';
import Section_4 from './Components/Section_4';
import Section_5 from './Components/Section_5/Section_5';


function page() {

  const imgSrc = [
    "/Residences/BINYAN_LIV3021_Plot31_S330_EXT_SupermanDusk_Final3500.png",
    ""
  ];


  return (
    <div className='w-full'>
        {/* banner section  */}
        <Hero/>

        {/* content section  */}
        <Section_2 />

        {/* banner image full size */}
        <Section_3 src={imgSrc[0]}/>

        {/* content section  */}
        <Section_4/>

        {/* content images section  */}
        <Section_5 />

        {/* images content section  */}

        {/*  content section  */}

        {/* crousel  */}

        {/* content images */}

        {/* video banner section  */}
    </div>
  )
}

export default page;