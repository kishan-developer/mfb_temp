import React from 'react'

function PaymentPlan() {


    const paymentStages = [
        { percent: '5%', description: 'Booking Fee\nEffected Date' },
        { percent: '20%', description: 'On SPA\nEffective Date' },
        { percent: '10%', description: 'On Substantial Completion of Residential\nTower Enabling Works' },
        { percent: '40%', description: 'On Project\nCompletion Date' },
        { percent: '10%', description: 'On Substantial Completion of\nResidential Tower Ground Floor' },
        { percent: '10%', description: 'On Substantial Completion of Residential\nTower Window Glazing Installation' },
        { percent: '5%', description: 'On Substantial Completion of\nResidential Tower Ground Floor' },
    ];

    return (

        <section
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center  h-[828px] "
            style={{ backgroundImage: "url('/Home/Alba.png')" }}


        >

            <div className="bg-[#AB8456] bg-opacity-80 flex items-center justify-center w-[1920px] h-[828px] gap-[48px] p-[120px] ">

                <div className="w-[1148px] h-[566px] gap-[80px] flex flex-col justify-center items-center text-[#F7F3E8] ">
                    <h3 className="w-[414px] h-[46px] font-ESDokument font-bold text-[42px] leading-[45.78px] tracking-8 text-center text-[#F7F3E8]">PAYMENT PLAN</h3>

                    <div className="w-[1148px] h-[440px] gap-y-[90px] flex flex-col items-center justify-center">



                        <div className="w-[1148px] h-[175px] gap-x-[40px] flex item-center ">
                            <div className="flex flex-col w-fit items-center justify-center gap-[24px]">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]tracking-[-4%]">5%</h3>
                                <p className="font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    Booking Fee
                                    Effected Date
                                </p>
                            </div>

                            <div className="w-[1px] h-[114px] bg-[#F7F3E8] flex items-center my-auto">

                            </div>

                            <div className="flex flex-col w-fit items-center justify-center gap-[24px] " >
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]">20%</h3>
                                <p className="font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    On SPA
                                    Effective Date
                                </p>
                            </div>

                            <div className="w-[1px] h-[114px] bg-[#F7F3E8] flex items-center my-auto"></div>

                            <div className="flex flex-col w-fit items-center justify-center gap-[24px]">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]">10%</h3>
                                <p className="font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    On Substantial Completion of Residential
                                    Tower Enabling Works
                                </p>
                            </div>

                            <div className="w-[1px] h-[114px] bg-[#F7F3E8] flex items-center my-auto"></div>

                            <div className="flex flex-col w-fit items-center justify-center gap-[24px]">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]">40%</h3>
                                <p className="font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    On Project
                                    Completion Date
                                </p>
                            </div>

                        </div>

                        <div className="w-[1045px] h-[175px] gap-x-[30px] flex flex-row items-center justify-center  ">

                            <div className="flex flex-col items-center justify-center gap-y-[24px] w-[297px] h-[175px]">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]">10%</h3>
                                <p className=" w-[279px] font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    On Substantial Completion of
                                    Residential Tower Ground Floor
                                </p>
                            </div>

                            <div className="w-[1px] h-[114px] bg-[#F7F3E8] flex items-center my-auto"></div>

                            <div className="flex flex-col w-[345px] h-[175px] items-center justify-center gap-y-[24px] ">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8]">10%</h3>
                                <p className="w-[345px] font-Spezia text-[18px] text-center leading-[32px] text-[#F7F3E8]">
                                    On Substantial Completion of Residential
                                    Tower Window Glazing Installation
                                </p>
                            </div>

                            <div className="w-[1px] h-[114px] bg-[#F7F3E8] flex items-center my-auto "></div>

                            <div className="flex flex-col w-[261px] h-[175px] items-center justify-center gap-y-[24px]">
                                <h3 className="w-[135px] h-[87px] text-[80px] font-ESDokument font-bold text-[#F7F3E8] tracking-[4%]">5%</h3>
                                <p className="w-[261px] font-Spezia text-[18px] text-center text-[#F7F3E8] px-2 tracking-[-4%]">
                                    On Substantial Completion of
                                    Residential Tower Ground Floor
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default PaymentPlan;