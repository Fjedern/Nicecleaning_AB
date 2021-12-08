import React, {useState} from "react";
import '../styles/tailwind.css';

function Footer() {


    return (


        <div className="pt-12">
            <footer id="footer" className="relative z-50 dark:bg-gray-900">
                <div tabIndex="0" aria-label="footer"
                     className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li><a
                                            className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                                            href="javascript:void(0)">David</a></li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li><a
                                            className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                                            href="javascript:void(0)">Jonas</a></li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li><a
                                            className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                                            href="javascript:void(0)">Sandra</a></li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li><a
                                            className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                                            href="javascript:void(0)">Ludvig</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 flex flex-col justify-center items-center">
                    <a className="focus:outline-none" tabIndex="0" role="link" aria-label="home link"
                       href="javascript:void(0)"
                    >
                        <svg className="dark:text-white" xmlns="http://www.w3.org/2000/svg" width="86" height="58"
                             viewBox="0 0 86 58" fill="none">

                        </svg>
                    </a>
                    <p tabIndex="0"
                       className="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2021
                        Städa Fint AB. All Rights Reserved. Very, very nice. </p>
                </div>
            </footer>
        </div>


    );
}

export default Footer;