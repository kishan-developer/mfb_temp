"use client"


import Image from 'next/image';
import { useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, content: "/partner/slider/img_1.png" },
        { id: 2, content: "/partner/slider/img_2.png" },
        { id: 3, content: "/partner/slider/img_3.png" },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col items-center justify-center space-x-4 w-full h-[1092px]">
           
            
            {/* Slider */}
            <div className="w-full overflow-hidden h-screen">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cards.map((card) => (
                        <div key={card.id} className="min-w-full  flex items-center justify-center bg-gray-300 rounded-lg shadow-lg mx-2">
                           <Image width={1920} height={1092} src={card.content} alt='images' />
                        </div>
                    ))}
                </div>
            </div>

           <div className='h-[100px]  flex items-center justify-center gap-[40px]'>
                <div>
                    navigator
                </div>
                <div className='flex items-center justify-center gap-[10px]'>

                    {/* Previous Button */}
                    <button onClick={prevSlide} className="text-2xl w-[10.67px] h-[26.67px] pt-[10px] pl-[26.67px] ">
                        ←
                    </button> 

                    {/* Next Button */}
                    <button onClick={nextSlide} className="text-2xl w-[10.67px] h-[26.67px] pt-[10px] pl-[26.67px] ">
                        →
                    </button>

                   
                </div>
           </div>

        </div>
    );
};

export default Slider;
