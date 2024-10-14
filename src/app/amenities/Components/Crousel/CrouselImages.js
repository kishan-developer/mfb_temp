import React from 'react'

function CrouselImages({ src}) {
  return (
    <section
      className="w-[982.82px] h-[658.77px] relative bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url('${src}')` }}
    >


    </section>
  )
}

export default CrouselImages;