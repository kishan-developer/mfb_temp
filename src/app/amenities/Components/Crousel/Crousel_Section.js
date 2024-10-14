import React from 'react';
import CrouselContent from './CrouselContent';
import CrouselImages from './CrouselImages';


function Crousel_Section() {

  const data = [
    {
      "id" : 1,
      "title": "Landscaping by Vladimir Djurovic"
    },
    {
      "id" : 2,
      "title": "Branded Wellness Centre with Treatment Rooms" 
    },
    {
      "id": 3,
      "title": "Expansive Swimming and Vitality Pools"
    },
    {
      "id" : 4,
      "title": "Private Residential Access and Lobby"
    },
    {
      "id" : 5,
      "title": "Private Beach Access and Water Features"
    },
    {
      "id" : 6,
      "title": "Private Pools in Each Residence"
    },
    {
      "id" : 7,
      "title": "Business Centre "
    },
    {
      "id": 7,
      "title": "Fitness Suite "
    },
    {
      "id": 7,
      "title": "Children's Pools"
    },
    {
      "id": 7,
      "title": "Relaxation Areas "
    },
    {
      "id": 7,
      "title": "Cinema"
    },
   

  ]

  const imgSrc = [
    "/amen/BINYAN_LIV3021_Plot31_S100_EXT_TopDownHero_Final_3000.jpg"
  ]

    
  return (

      <div className='w-full h-[886.81px] pr-[95.06px] gap-x-[62.74px] bg-[#F7F3E8] flex flec-row items-center justify-center'>
        
        <CrouselContent data={data} />

        <div className='h-[697.44px] w-[1.9px] bg-[#EADCC2]'></div>

        <CrouselImages src={imgSrc[0]} />

    </div>

  )
}

export default Crousel_Section;