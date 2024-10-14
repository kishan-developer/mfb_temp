import React from 'react';

function Video() {
  
  return (
    <>
      <div className='relative h-[300px] w-full bg-[#AB8456]'>
        <video className='absolute w-full h-full object-cover ' autoPlay muted loop>
          <source src="/Videos/2_Janis Brod-sunlight-details-216241-filmsupply_updated.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Container to center the H1 */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <h3 className='text-white text-center font-ESDokument text-[42px] tracking-8'>A SANCTUARY OF WELL-LIVING</h3>
        </div>
      </div>
    </>
  );
}

export default Video;
