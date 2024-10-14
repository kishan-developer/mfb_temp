"use client"

import React from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


function Content_section_4() {


    gsap.fromTo(".box",
        {
            scale: 0.8, // Initial scale (slightly smaller)
            opacity: 0, // Initial opacity
        },
        {
            scale: 1, // Scale to normal size
            opacity: 1, // Full opacity
            duration: 1,
            scrollTrigger: {
                trigger: ".box",
                start: "top 80%",  // Animation starts when the top of the element reaches 80% of the viewport height
                end: "top 20%",   // Animation ends when the top of the element reaches 20% of the viewport height
                scrub: true,      // Smooth scrubbing effect
                toggleActions: "play none none reverse", // Reverses the animation when scrolling back up
            },
        });


    return (
        <div className='box w-[1920] gap-[16px] h-[323px] bg-[#F7F3E8] text-[#3C4617] flex flex-col items-center justify-center text-center py-[100px]'>

            <p className="text-[#3C4617] w-[106px] h-[24px]">LOCATION</p>

            <h3 className="text-[#3C4617] text-[42px] font-bold w-[747px] h-[92px] leading-[45.78px] font-ESDokument tracking-8 uppercase">
                AN ICONIC ADDRESS
                LOCATED ON A WORLD ICON
            </h3>

        </div>
    )
}

export default Content_section_4;