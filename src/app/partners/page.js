import Link from 'next/link';
import React from 'react'
import Banner from './Components/Banner';
import Content_1 from './Components/Content_1';
import FirstVideoSection from '../(Home)/Components/FirstVideoSection';
import ImgContent from '@/Components/PagesComponents/ImgContent';
import Content_img from '@/Components/PagesComponents/Content_img';
import Section_5 from '../(Home)/Components/Section_5';
import Section_7 from './Components/Section_7';
import Section_6 from './Components/Section_6';
import Video from '@/Components/PagesComponents/Video';
import Video_3 from '@/Components/PagesComponents/Video_3';
import Slider_parent from './Components/Slider_parent';

function page() {

  const contents = [
    {
      "id": 1,
      "title": ["THE POWER OF ELEMENTAL DESIGN", ""],
      "description": [
        "Zaha Hadid Architects redefined architecture for the 21stcentury with a repertoire of projects that have captured imaginations across the globe. Receiving the highest honours from professional and academic institutions worldwide, they are one of the world’s most consistently inventive architectural studios – and have been for four decades."
        ,
        "Pioneering research and experimentation are inscribed within their architecture that becomes more spatially inventive, more structurally efficient, more technologically advanced and more environmentally sustainable with each new creation, marrying innovative design with ecologically sound materials and sustainable construction practices."]
    },

    {
      "id": 2,
      "title": ["HER LEGACY ", "LIVES ON"],
      "description": [
        "Zaha Hadid Architects redefined architecture for the 21stcentury with a repertoire of projects that have captured imaginations across the globe. Receiving the highest honours from professional and academic institutions worldwide, they are one of the world’s most consistently inventive architectural studios – and have been for four decades."
        ,
        ""
      ]
    },
    {
      "id": 3,
      "title": ["AHEAD OF THE CURVE", ""],
      "description": ["Pioneering research and experimentation are inscribed within their architecture that becomes more spatially inventive, more structurally efficient, more technologically advanced and more environmentally sustainable with each new creation, marrying innovative design with ecologically sound materials and sustainable construction practices.", ""]
    },
    {

      "id": 4,
      "title": ["INTERIOR DESIGN PARTNER: YODEZEEN", ""],
      "description": ["YODEZEEN provokes aesthetics that engage with colours, textures and materials to coalesce into the firm’s captivating creations. Renowned for its distinctive style and architectural approach, the firm is celebrated for creating unique, visually striking solutions, and has delivered over 800 projects, winning a number of prestigious industry awards.", ""]
    },

    {
      "id": 5,
      "title": ["HAVENS OF PERSONAL ESCAPE", ""],
      "description": ["World-renowned landscape architect Vladimir Djurovichas crafted a fine balance of serenity and beauty, integrating the natural world with the architectural splendour and inspired lifestyle of The Alba Residences. The buildings arced shapes emerge from a tropical forest, with abundant planting encompassing and accentuating the architecture, fashioning shaded paths and walkways that wind down to the golden waterfront.", ""]
    }

  ]

  return (
    
    <div>
      <Banner />

      <Content_1 contents={contents[0]} />

      {/* <Content_img src={'/partner/Ahead.png'} contents={contents[1]} /> */}

      <ImgContent contents={contents[2]} />

      <Content_img src={'/partner/interior.png'} contents={contents[3]} />

      <Section_6 contents={contents[4]} />

     

      <Slider_parent />

      <Video_3/>

    </div>
  )
}

export default page;