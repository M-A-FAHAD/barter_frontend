'use client'
import Image from "next/image"
import Logs from "../../../../public/Icons/Signup.png"
export default function Searchbar() {
    return (
        <div className=" p-8 flex justify-center items-center w-full bg-gray-200 ">
            <div className="w-[62rem] flex">
                <div className="w-[100%] h-10 flex overflow-hidden rounded-full">
                    <input className="bg-gray-100 h-full w-[90%] sm:w-[85%] pl-4 focus:outline-none " type="text" name="search" placeholder="Search you products" />
                    <button className=" h-full w-[10%] sm:w-[15%] bg-white flex justify-center items-center hover:bg-gray-100">
                        <svg className="opacity-[0.3]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <span className="hidden min-md:block ">
                        <button
                            class="relative w-32 h-10 ml-4 bg-transparent border-2 border-gray-400 rounded-full text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg"
                        >
                            <span class="font-semibold tracking-wide">Login/Signup</span>
                            <div
                                class="absolute top-0 left-0 w-10 h-10 bg-gray-900 rounded-full opacity-0 transform translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 "
                            ></div>
                        </button>
                    </span>
                    <span className="hidden md:block ml-2 transition-all duration-300 ease-in-out hover:opacity-[0.8] cursor-pointer">
                        <Image className="w-12" src={Logs} />
                    </span>

                </div>
            </div>
        </div>
    )
}
