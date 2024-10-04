import React from 'react';

function Hero() {


    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-24 px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl font-[poppins]">
                        Welcome To Our Luxurious Properties, <br /> With All The Conveniences.
                    </h1>
                    <p className="mt-6 text-gray-600 font-[poppins]">
                        Arcu ac tortor dignissim convallis aenean et tortor at. Ac turpis egestas sed tempus urna et. Quisque eu pellentesque erat, eget bibendum ipsum. Cras euismod massa sed lacus lacinia, quis porta libero consectetur. In pulvinar lobortis eros vitae dapibus. Vestibu
                    </p>
                </div>
                <div className="flex flex-wrap mt-16 font-[poppins]">
                    <div className="w-full sm:w-1/2 p-4">
                        <div className="bg-white rounded shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 .002 1.109-.873 2.125-2.078 2.875a3.186 3.186 0 01-.948.817c-.549.22-1.12.342-1.685.395m0 12a3.186 3.186 0 01-.948-.817A3.186 3.186 0 0113.925 13m0 6.078a3.186 3.186 0 01-.948-.817c-.549.22-1.12.342-1.685.395m0-12.078A3.186 3.186 0 0113.925 3" /></svg>
                                <h3 className="text-xl font-bold leading-tight text-gray-800 mb-2">Answer Questions</h3>
                                <p className="text-gray-600">Phasellus ornare scelerisque eleifend donec pretium nec.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 p-4">
                            <div className="bg-white rounded shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0 2 2 0 01-4 0zM9 14a2 2 0 114 0 2 2 0 01-4 0zM14 20a2 2 0 114 0 2 2 0 01-4 0z" /></svg>
                                    <h3 className="text-xl font-bold leading-tight text-gray-800 mb-2">Select a Quote</h3>
                                    <p className="text-gray-600">Morbi quis commodo odio aenean fames ac vel sed.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="bg-white rounded shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h12a4 4 0 004-4V3a4 4 0 00-4-4H7a4 4 0 00-4 4v12z" /></svg>
                                        <h3 className="text-xl font-bold leading-tight text-gray-800 mb-2">Your Belongings</h3>
                                        <p className="text-gray-600">Neque sodales ut etiam sit amet nisl purus in mollis.</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-4">
                                    <div className="bg-white rounded shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            <h3 className="text-xl font-bold leading-tight text-gray-800 mb-2">Personal Liability</h3>
                                            <p className="text-gray-600">Vitae justo eget magna fermentum iaculis Lobortis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center mt-16">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Explore Properties</button>
                                    <div className="mt-6">
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V7a2 2 0 012-2h1.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493 1.498a1 1 0 01-.684.949V19a2 2 0 01-2 2H3z" /></svg>
                                        <p className="text-gray-600 text-sm">Call Us Anytime</p>
                                        <p className="text-gray-600 text-sm">+00 123 456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;
