import React from 'react'
import Crousel from './Crousel';


const slides = [
    "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/65657cfdc1bc7d13fb61f4e1_ava-amenities-04-d.webp",
    "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/65657d688ab54c037efcaefa_ava-amenities-06-d.webp",
    "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/65657c85036996950da54b70_ava-amenities-03-d.webp",
    "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/65657bc45ddc5c05845a86b4_ava-amenities-01-d.webp"
]

function CrouselSection() {


    return (
        <div>
            <div className="w-auto ">

                {/* <Crousel>
                    {slides.map((s) => (
                        <img src={s} />
                    ))}

                </Crousel> */}
            </div>
        </div>
    )
}

export default CrouselSection;
