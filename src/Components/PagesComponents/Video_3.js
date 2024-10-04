

import React from 'react';

function Video_3() {

    return (
        <>
            <div className='relative h-[300px] w-full bg-[#AB8456]'>
                <video className='absolute w-full h-full object-cover' autoPlay muted loop>
                    <source src="/Videos/Stan_Moniz-sunset-on-the-water-in-corona-del-mar-644233-filmsupply.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Container to center the H1 */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <h3 className='text-white text-center text-[42px] font-ESDokument tracking-8 uppercase'>Residences</h3>
                </div>
            </div>
        </>
    );
}

export default Video_3;
