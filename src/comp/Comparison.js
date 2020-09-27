import React, { useState } from 'react';
import { Transition } from '@tailwindui/react'
import photo from '../imgs/blueprints (2).jpg';
import logo from '../imgs/logo.jpg'

import bathroomBefore from '../imgs/boban/bathroomBefore.JPG'
import bathroomAfter from '../imgs/boban/BathroomAfter.jpg'

function Comparison() {
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
                <div className="font-bold text-gray-500 capitalize tracking-wider border-b-4 border-aqua-400 pb-1">OUR WORK</div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mx-5">


                {/* {Object.keys(imgs).map((item, index) => {
                    return ( */}
                <div className="w-full overflow-hidden rounded">
                    <div className="flex">
                        <div className="flex-1">
                            <img src={bathroomAfter} className="h-auto w-full object-cover"></img>

                        </div>
                        <div className="flex-1 ">
                            <img src={bathroomBefore} className="h-auto w-full object-cover"></img>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-6 w-full">
                            <div className="bg-white p-6 -mt-10 shadow-lg">
                                my title
                            </div>
                        </div>
                    </div>
                </div>

                {/* })} */}

            </div>

        </div>


    );
}


export default Comparison;
