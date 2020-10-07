import React from 'react';



const Quote = ({ toggelDisplay }) => {
    return (
        <button onClick={() => toggelDisplay()} className="bold text-lg fixed w-full bg-gray-200 h-full inset-0 z-20 cursor-default opacity-50">
            <div className="bg-black w-auto text-white opacity-100 block">
                well hello there this section still needs some work. <br />
                please come back later to submit your request for a Quote. <br />
                Thank you
            </div>
        </button>
    )
}

export default Quote;
