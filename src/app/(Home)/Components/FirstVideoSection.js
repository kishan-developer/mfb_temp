import React from 'react'

function FirstVideoSection() {

    return (
        <div className="w-full h-[300px]">

            <video width="100%" height="300px" autoPlay muted loop >
                <source src="/Home/Anton_Josef-water-elements.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2></h2>

        </div>
    )
}

export default FirstVideoSection