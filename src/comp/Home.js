import React, { useState } from 'react';

function Landing() {
    const [isOpen, setIsOpen] = useState(false)

    function importAll(r) {
        let imgs = {};

        r.keys().map((item, index) => {
            imgs[item.replace('./', '')] = r(item);
        });
        return imgs;
    }

    const imgs = importAll(require.context('../imgs', false, /\.jpg/));

    return (
        <div className="justify-center mt-10 mb-16">
            <div className="bg-aqua mx-5 max-w-screen-xl flex justify-center w-full mb-4" >
                <div className="font-bold text-gray-500 capitalize tracking-wider border-b-4 border-aqua-400 pb-1">About Us</div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mx-5">


                {Object.keys(imgs).map((item, index) => {
                    return (
                        <div className="flex w-full shadow-lg overflow-hidden">
                            <div className="flex-1">
                                <p className="mb-2 w-1/2 text-gray-800 leading-10 ml-4" >Who we are</p>
                            </div>
                            <div className="flex-1">
                                <img src={imgs[item]} className="rounded inset-0 h-full w-full p-1"></img>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="flex w-full shadow-lg overflow-hidden">
                    <div className="flex-1">
                        <p className="mb-2 w-1/2 text-gray-800 leading-10 ml-4" >Who we are</p>
                    </div>
                    <div className="flex-1">
                        <img src={imgs[1]} className="rounded inset-0 h-full w-full p-1"></img>
                    </div>
                </div>

                <div className="flex w-full shadow-lg overflow-hidden">
                    <div className="flex-1">
                        <p className="mb-2 w-1/2 text-gray-800 leading-10 ml-4" >Who we are</p>
                    </div>
                    <div className="flex-1">
                        <img src={imgs[2]} className="rounded inset-0 h-full w-full p-1"></img>
                    </div>
                </div>

                <div className="flex w-full shadow-lg overflow-hidden">
                    <div className="flex-1">
                        <p className="mb-2 w-1/2 text-gray-800 leading-10 ml-4" >Who we are</p>
                    </div>
                    <div className="flex-1">
                        <img src={imgs[3]} className="rounded inset-0 h-full w-full p-1"></img>
                    </div>
                </div>

                <div className="flex w-full shadow-lg overflow-hidden">
                    <div className="flex-1">
                        <p className="mb-2 w-1/2 text-gray-800 leading-10 ml-4" >Who we are</p>
                    </div>
                    <div className="flex-1">
                        <img src={imgs[4]} className="rounded inset-0 h-full w-full p-1"></img>
                    </div>
                </div> */}

            </div>

        </div>


    );
}


export default Landing;
