import React from 'react'

function Section_1({ src }) {

    // create a Amenities page home section 

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('${src}')`}}
        >
            <nav className="navbar w-full h-[90px] py-3 bg-black opacity-50 flex items-center justify-center px-5">

            </nav>

            <div className="parent p-10 w-full h-screen flex flex-col items-center justify-center">

                {/* <div className="logo absolute bottom-10 left-auto opacity-100 w-[80px] h-[70px]" ref={logoRef}>
                    <Image width={80} height={70} src="/Home/image.png" alt="Logo" />
                </div> */}
            </div>
        </section>
    )
}

export default Section_1;