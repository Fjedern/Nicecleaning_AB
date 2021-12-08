import React, {useState} from "react";
import '../styles/tailwind.css';

function Header (){


    return (


                <nav className="flex items-center justify-between flex-wrap bg-teal p-8">
                    <div className="flex items-center flex-no-shrink text-green mr-20">
                        <svg className="h-8 w-8 ml-10" width="54" height="54" viewBox="20 20 54 54"
                             xmlns="http://www.w3.org/2000/svg">
                        </svg>
                        <span className="font-semibold text-xl8 tracking-tight">Städa Fint AB</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d=""/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                                Om Oss
                            </a>
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                                Recentioner
                            </a>
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                                Kontakt
                            </a>
                        </div>

                    </div>
                </nav>


    );
}

export default Header;