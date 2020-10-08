import React from 'react';



const Quote = ({ toggelDisplay }) => {
    return (
        <div className="fixed inset-0 w-full h-screen z-10 p-8">
            <button onClick={() => toggelDisplay()} className="bold text-lg w-full h-screen bg-gray-200 absolute cursor-default opacity-50 inset-0">
            </button>
            <div className="w-2/3 h-full mx-auto my-2 text-white relative rounded-lg bg-white shadow-md overflow-y-auto">
                <div className="flex justify-end p-2 pb-0">
                    <button type="button" onClick={() => toggelDisplay()} className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 " aria-label="Close menu">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full px-8 pt-2 pb-8 mb-4">
                    <h2 className="block text-gray-500 text-md text-center mb-4 border-b-4 font-bold tracking-wider mb-2">Request a Bid</h2>
                    <form className="">
                        <div className="mb-4 flex ">
                            <div className="pr-2 flex-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Your Name
                                 </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                            </div>
                            <div className="pl-2 flex-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                    Your Email
                                 </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="...@gmail.com" />
                            </div>
                        </div>
                        <div className="mb-4 flex">
                            <div className="flex-1 pr-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="intro">
                                    Intro
                                 </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="intro" type="text" placeholder="ie: full kitchen remodel" />

                            </div>
                            <div className="flex-1 pl-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="intro">
                                    Who Referd You
                                 </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="refered" type="text" placeholder="John Doe..." />

                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full mb-4 pr-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="work-type">
                                    Work Type
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="work-type">
                                        <option>Remodel</option>
                                        <option>New Build</option>
                                        <option>Addition</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-4 pl-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="work-type">
                                    Buget
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="buget">
                                        <option>$1,000 - $5,000</option>
                                        <option>$5,000 - $10,000</option>
                                        <option selected>$10,000 - $50,000</option>
                                        <option>$50,000 - $100,000</option>
                                        <option>$100,000 Up</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="intro">
                                Let us know more
                             </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="intro" rows="8" cols="50" placeholder="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" type="button">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Quote;
