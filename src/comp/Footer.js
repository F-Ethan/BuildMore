import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div className="w-full bg-gray-100 pt-8 pb-8 md:pb-16 h-auto">
            <div className="flex items-center flex-wrap text-gray-600">
                <ul className="md:flex-1 mx-auto pt-8 text-center px-4 h-auto block">
                    <li className="list-none blod text-gray-800 border-b-4 border-red-200"> Build More </li>
                    <li className="list-none pt-2 text-sm"> Licensed General Contractor <br /> in the State of California </li>
                    <li className="list-none pt-2 text-sm"> License Number: 1234567 </li>
                </ul>
                <ul className="md:flex-1 mx-auto pt-8 text-center px-4 h-auto block">
                    <li className="list-none blod text-gray-800 border-b-4 border-blue-200">Find us on socail media </li>
                    <li className="list-none pt-2 text-sm">
                        <span> <FontAwesomeIcon icon={faFacebook} size='1x' /> </span>
                        <a href="https://facebook.com" className="hover:text-blue-200 italic" target="_blank">
                            Facebook
                        </a>
                    </li>
                    <li className="list-none pt-2 text-sm">
                        <span> <FontAwesomeIcon icon={faInstagram} size='1x' /> </span>
                        <a href="https://instagram.com" className="hover:text-blue-200 italic" target="_blank">
                            Instagram
                        </a>
                    </li>
                    <li className="list-none pt-2 text-sm">
                        <span>
                            <FontAwesomeIcon icon={faTwitter} size='1x' />
                        </span>
                        <a href="https://twitter.com" className="hover:text-blue-200 italic" target="_blank">
                            Twitter
                        </a>
                    </li>
                </ul>
                <ul className="md:flex-1 mx-auto text-center px-4 pt-8 h-auto block">
                    <li className="list-none blod text-gray-800 border-b-4 border-green-200"> More links </li>
                    <li className="list-none pt-2 text-sm ">
                        <a href="https://www.nickkerley.com" className="hover:text-green-200 italic" target="_blank">
                            Nick Kerley Real Estate
                        </a>
                    </li>
                    <li className="list-none pt-2 text-sm">
                        Built and Designed By: &nbsp;
                        <a href="https://www.ethanferrier.com" className="hover:text-green-200 italic" target="_blank">
                            Ethan Ferrier
                        </a>
                    </li>
                    <li className="list-none pt-2 text-sm">
                        Built in: &nbsp;
                        <a href="https://reactjs.org" className="hover:text-green-200 italic" target="_blank">
                            ReactJs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
