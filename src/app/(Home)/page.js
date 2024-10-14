"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "./Components/Banner";
import Hero from "./Components/Hero";
import Section_3 from "./Components/Section_3";
import Section_4 from "./Components/Section_4";
import Section_2 from "./Components/Content/Content_Section";
import Content_2 from "./Components/Content/Content_Paragraph";
import Content_3 from "./Components/Content/Content_3";
import Section_5 from "./Components/Section_5";
import Content_4 from "./Components/Content_4";
import Content_6 from "./Components/Content/Content_section_2";
import Video from "@/Components/PagesComponents/Video";
import ContactInfo from "../location/Components/ContactInfo";
import Header from "./Components/Header";
import Video_2 from "@/Components/PagesComponents/Video_2";
import Video_3 from "@/Components/PagesComponents/Video_3";
import Section_6 from "./Components/Section_6";
import Map_section from "./Components/Map_section";
import Section_7 from "../partners/Components/Section_7";
import section_contents from "./Components/ContentData";
import Content_Section from "./Components/Content/Content_Section";
import Content_Paragraph from "./Components/Content/Content_Paragraph";
import Content_section_2 from "./Components/Content/Content_section_2";
import Content_Section_3 from "./Components/Content/Content_Section_3";
import Content_section_4 from "./Components/Content/Content_section_4";
import PaymentPlan from "./Components/PaymentPlan";
import Contact_form from "./Components/Content/Contact_form";


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  console.log(section_contents)

  useEffect(() => {
    
    // Select all elements with the class "box" and store them in an array
    let boxes = gsap.utils.toArray(".box");
    // Loop through each box and apply the scale-up animation on scroll
    boxes.forEach((box) => {
      gsap.fromTo(box,
        {
          scale: 0.8, // Initial scale (slightly smaller)
          opacity: 0, // Initial opacity
        },
        {
          scale: 1, // Scale to normal size
          opacity: 1, // Full opacity
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",  // Animation starts when the top of the element reaches 80% of the viewport height
            end: "top 20%",   // Animation ends when the top of the element reaches 20% of the viewport height
            scrub: true,      // Smooth scrubbing effect
            toggleActions: "play none none reverse", // Reverses the animation when scrolling back up
          },
        });
    });
  }, []);

  return (
    <div>
     
      <div className="box">
        <Banner />
      </div>

      <div className="bg-[#F7F3E8]">
        <Content_Section data={section_contents[0]} />
      </div>

      <div className="box">
        <Section_3 />
      </div>

      <Content_Paragraph data={section_contents[1]} />
      
      <Video />

      <Content_section_2/>

      {/* animation card slider  */}
      <Section_4 />  

      <div className="box">
        <Content_3 />
      </div>
      
      <div className="box">
        <Section_5 />
      </div>

      <div className="box">
        <Content_Paragraph data={section_contents[4]}/>
      </div>

      <Video_2/>
      
      <Content_Section data={section_contents[5]} />


      <div className="box">
        <Section_6/>
      </div>

      <Content_Section_3 data={section_contents[6]} />

      <PaymentPlan />
      
      <Content_section_4/>

      {/* <Section_7/> */}

     

      <Map_section/>

      
      <Contact_form/>

      <Video_3/>

      
      
    </div>
  );
}
