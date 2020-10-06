import React, { useState } from 'react';

// import bathroomBefore from '../imgs/boban/bathroomBefore.JPG'
// import bathroomAfter from '../imgs/boban/BathroomAfter.jpg'

function Comparison() {
    const [isOpen, setIsOpen] = useState(false)

    function importAll(r) {
        let imgs = {};

        r.keys().map((item, index) => {
            imgs[index] = r(item);
        });
        return imgs;
    }

    const imgs = importAll(require.context('../imgs/homepage', false, /\.jpg/));
    console.log(imgs)

    return (
        <div className="justify-center mt-10 mb-16" id="OurWork">
            <div className="bg-aqua mx-5 max-w-screen-xl flex justify-center w-full mb-4" >
                <div className="font-bold text-gray-500 capitalize tracking-wider border-b-4 border-aqua-400 pb-1">OUR WORK</div>
            </div>

            <div className=" w-full px-5">


                {Object.keys(imgs).map((item, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div className="w-full overflow-hidden rounded mt-10" key={index}>
                                <div className="flex shadow">
                                    <div className="flex-1 ">
                                        <p className="absolute m-2 px-1 rounded-full bg-teal-100 uppercase tracking-wider font-semibold text-xs text-gray-600">Before</p>
                                        <img src={imgs[item]} className="h-auto w-full object-cover"></img>

                                    </div>
                                    <div className="flex-1">
                                        <p className="absolute m-2 px-1 rounded-full bg-teal-100 uppercase tracking-wider font-semibold text-xs text-gray-600">After</p>
                                        <img src={imgs[index + 1]} className="h-auto w-full object-cover"></img>

                                    </div>
                                </div>
                                {/* <div className="flex">
                                    <div className="bg-white p-6 -mt-10 shadow-lg w-auto m-auto">
                                        <h4> Bathroom Remodel</h4>
                                        <div className="flex items-baseline">
                                            <h5 className="text-gray-600"> $5,000 &bull;</h5>
                                            <h5 className="ml-1 text-gray-600 text-sm"> two Weeks </h5>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                        )
                    }
                })}

            </div>

        </div>


    );
}


export default Comparison;
