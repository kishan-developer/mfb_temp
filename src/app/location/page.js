import React from 'react'
import Banner from './Components/Banner';
import ContactInfo from './Components/ContactInfo';
import Video from '@/Components/PagesComponents/Video';
import Info from './Components/Info';


function locationPage() {
  return (
    <div>
      
      {/* banner images  */}
      <Banner/>

      {/* location image with location details */}
      <ContactInfo/>

      {/* contact information */}
      <Info />

      {/* video section */}
      <Video />

     

    </div>
  )
}

export default locationPage;