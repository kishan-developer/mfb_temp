import React from 'react'
import Image from 'next/image';

function Banner() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{ backgroundImage: "url('/Home/partner_banner.jpeg')" }}>

            <div className="absolute top-[15%] left-[10%] text-center text-white bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3">
                <Image width={100} height={60} src='/Home/logo.png' alt='logo' /> 
                <p className="text-lg mb-6 text-[#AB8456]">OMNIYAT PRESENTS</p>
                
            </div>

        </section>
    )
}

export default Banner;