"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Banner() {

    
    const logoRef = useRef(null);

    useEffect(() => {
        const jumpLogo = () => {
            gsap.fromTo(
                logoRef.current,
                { y: 0 }, // Start position
                {
                    y: -50, // Jump height (adjust as needed)
                    duration: 1, // Duration of the jump
                    ease: "bounce.out", // Easing for a bouncing effect
                    repeat: -1, // Repeat indefinitely
                    yoyo: true // Reverse the animation after each repeat
                }
            );
        };

        jumpLogo();
    }, []);

    useEffect(() => {
        // Animation for the logo and navbar
        gsap.fromTo(
            ".img",
            { y: "0vh", scale: 1, opacity: 1 },  // Initial values: Centered position
            {
                y: "-100vh", // Move to the top when scrolling up
                scale: 0.5, // Scale down when scrolling up
                duration: 2, // Duration for the logo moving up
                scrollTrigger: {
                    trigger: ".img",
                    start: "top center", // Start when the top of the logo reaches the center of the viewport
                    end: "top top", // End when the top of the logo reaches the top of the viewport
                    scrub: true,
                    toggleActions: "play none none reverse",
                    onUpdate: (self) => {
                        const navbar = document.querySelector(".navbar");
                        if (self.direction === 1) {
                            // Scrolling down: scale up and move logo back to center
                            gsap.to(".img", {
                                y: "0vh", // Move image back to center
                                scale: 1.5, // Scale up when scrolling down
                                ease: "none",
                                duration: 1.5,
                            });
                            gsap.to(navbar, { opacity: 0.3 }); // Show navbar when scrolling down
                            gsap.to(".parent", { opacity: 0.3 });
                            gsap.to(".heading", { opacity: 1, duration: 0.5, delay: 1});
                            
                        } else if (self.direction === -1) {
                            // Scrolling up: scale down and move logo to the top
                            gsap.to(".img", {
                                y: "-50vh", // Move logo to the top
                                scale: 0.5, // Scale down when scrolling up
                                ease: "none",
                                duration:1.5,
                            });
                            gsap.to(navbar, { opacity: 0.8 }); // Hide navbar when scrolling up
                            gsap.to(".parent",  { opacity: 0.6});
                            gsap.to(".heading", { opacity: 0, duration:1 , delay: 1});
                        }
                    },
                },
            }
        );
    }, []);

    // text - [#AB8456]

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/Home/img_1.png')" }}
        >
            <nav className="navbar w-full h-[90px] py-3 bg-black opacity-50 flex items-center justify-center px-5">
                
            </nav>

            <div className="parent bg-black opacity-50 p-10 w-full h-screen flex flex-col items-center justify-center">
                
                <h1 className="heading font-ESDokument text-[2rem] tracking-8 font-bold text-white absolute top-[30vh] left-[auto]">OMNIYAT PRESENTS</h1>
                <div className="absolute top-[auto] left-[auto] w-[160px] h-[90px] border-white flex flex-col gap-10 items-center justify-center">
                    <Image width={160} height={90}  className="img" src="/Home/logo.png" alt="logo" />
                </div>

                <div className="logo absolute bottom-10 left-auto opacity-100 w-[80px] h-[70px]" ref={logoRef}>
                    <Image width={80} height={70}  src="/Home/image.png" alt="Logo" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
