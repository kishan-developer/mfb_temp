import React from 'react'
import Section_1 from './Components/Section_1'
import Section_2 from './Components/Section_2'
import Section_3 from './Components/Section_3'
import Section_5 from './Components/Section_5/Section_5'
import Video_3 from '@/Components/PagesComponents/Video_3'
import Crousel_Section from './Components/Crousel/Crousel_Section'


function page() {

    const ImgSrc = [
        "/amen/img_1.jpeg" ,
        "/amen/BINYAN_LIV3021_Plot31_S120_EXT_Superman_Hero_Final_3500.png"
    ]

  return (
    <div className='w-full'>
        {/* banenr image with logo */}
        <Section_1 src={ImgSrc[0]}/>

        {/* Content  */}
        <Section_2/>

        {/* image */}
        <Section_3 src={ImgSrc[1]} />

        {/* Crousel Section */}
        <Crousel_Section/>

        {/* Images Content  */}
        <Section_5/>

        {/* Video section_ 3 */}
        <Video_3/>
    </div>
  )
}

export default page