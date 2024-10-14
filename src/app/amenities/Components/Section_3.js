import React from 'react'

function Section_3({ src }) {

    // create a Amenities page home section 

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('${src}')` }}
        >
            
        </section>
    )
}

export default Section_3;