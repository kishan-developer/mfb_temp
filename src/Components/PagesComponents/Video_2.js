import React from 'react';

function Video_2() {

    return (
        <>
            <div className='relative h-[300px] w-full bg-[#AB8456]'>
                <video className='absolute w-full h-full object-cover' autoPlay muted loop>
                    <source src="/Videos/Anton_Josef-water-elements-77796-filmsupply.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-white text-center text-[42px] font-ESDokument tracking-8'>UNITING THE ELEMENTS</div>
                </div>
            </div>
        </>
    );
}

export default Video_2;
