import { GrNext, GrPrevious } from "react-icons/gr";
import { CgArrowLongRightC, CgArrowLongLeftC } from "react-icons/cg";
import { useState } from "react";

function Crousel({ children: slides }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>

            <div className="absolute inset-0 flex items-end justify-between xl:p-10 lg:p-10 md:p-10 p-5">
                <button onClick={next} className="xl:p-5 lg:p-5 md:p-5 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <CgArrowLongRightC className="w-[100px] h-[20px] text-[#835C57]" />
                </button>

                <button onClick={prev} className="xl:p-5 lg:p-5 md:p-5 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <CgArrowLongLeftC className="w-[100px] h-[20px] text-[#835C57]" />
                </button>
            </div>
        </div>
    );
}

export default Crousel;
