import React, { useState } from 'react';
import { Transition } from '@tailwindui/react'
import photo from '../imgs/blueprints (2).jpg';
import logo from '../imgs/logo.jpg'

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
                <div className="font-bold text-gray-500 capitalize tracking-wider border-b-4 border-aqua-400 pb-1">About Us</div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mx-5">


                {Object.keys(imgs).map((item, index) => {
                    return (
                        <div className="flex w-full shadow-lg overflow-hidden">
                            <div className="flex-1 transform translate-x-16">
                                <p className="w-full text-blue-700 font-bold z-10 absolute text-center pt-40 border-b-2 border-blue-700 tracking-wider"> Before</p>
                                <img src={imgs[item]} className="pb-24 rounded inset-0 h-64 w-full p-1 object-cover"></img>

                            </div>
                            <div className="flex-1 transform -translate-x-16">
                                <p className="w-full text-blue-700 font-bold z-10 absolute text-center pt-16 border-b-2 border-blue-700 tracking-wider"> After</p>
                                <img src={imgs[item]} className=" pt-24  rounded h-64 w-full p-1 border-2 object-cover"></img>

                            </div>
                        </div>
                    )
                })}

            </div>

        </div>


    );
}


export default Comparison;
