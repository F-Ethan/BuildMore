import React from 'react';



const Quote = ({ toggelDisplay }) => {
    return (
        <div className="fixed inset-0 w-full h-full z-10">
            <button onClick={() => toggelDisplay()} className="bold text-lg w-full h-screen bg-gray-200 absolute cursor-default opacity-50 inset-0">
            </button>
            <div className="w-2/3 h-auto mx-auto my-20 text-white relative rounded-lg">
                <div className="w-full bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button type="button" onClick={() => toggelDisplay()} className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 " aria-label="Close menu">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <form className="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Your Email
                             </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="intro">
                                Intro
                             </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="intro" type="text" placeholder="ie: full kitchen remodel" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Quote;
