import React from 'react';

function Section_5_img({ src }) {

  return (
      <section
          className="relative bg-cover bg-center bg-no-repeat w-[1244px] h-[869.75px] flex flex-col items-center justify-center"
          style={{ backgroundImage: `url('${src}')` }}
      >
        
      </section>
  )
}

export default Section_5_img;