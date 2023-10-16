'use client'
import Image from "next/image"
import filterIco from "../../../public/Icons/filter.png"
import Filterindex from "../Components/EX_page/Filter/index"
import ProductCard from "../Components/EX_page/Product/productCard"
import PageNavigator from "../Components/EX_page/Product/pageNavigator"
import LocationSellector from "../Components/EX_page/Filter/locationSellector"
import { useSelector } from "react-redux"
import { useState } from "react"
import { gsap } from "gsap"
export default function page() {
    //location sellectior state
    const locationSelector = useSelector(state => state.locationSellectorState)
    if (locationSelector === 'hidden') {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
    const [filterIndex, setFilterIndex] = useState(false)
    const filterVisiblity = () => {
        filterIndex ? setFilterIndex(false) : setFilterIndex(true)
        gsap.from('#filterImage', { rotate: 360, duration: 0.5 })
    }
    return (
        <div>
            <div className={`absolute w-full h-[100vh] z-20 flex justify-center items-center backdrop-blur-sm ${locationSelector}`} >
                <LocationSellector />
            </div>
            <div className="flex  justify-center">
                <div className="h-auto border mt-6 mb-20 w-[50rem] flex rounded overflow-hidden ">
                    {/* this is filter section  */}
                    <div className=" w-1/3   md:hidden">
                        <div className="w-full p-2 bg-gray-300 flex justify-center items-center">
                            <Image src={filterIco} className="w-10"></Image>
                            <p className="font-bold pl-2 pt-2">FILTER</p>
                        </div>
                        <div>
                            <Filterindex />
                        </div>
                        <hr className="w-[95%] ml-[2.5%]" />
                    </div>
                    {/* this is product cart section */}
                    <div className="w-2/3 md:w-full">
                        <div className="bg-gray-200  flex items-center">
                            <div onClick={filterVisiblity} className="pl-2 cursor-pointer opacity-75 min-md:hidden ">
                                <Image src={filterIco} className="w-10" id="filterImage"></Image>
                            </div>
                            <input className=" p-2.5 rounded-l-full ml-2 bg-gray-100 h-full w-[90%] sm:w-[85%] pl-4 focus:outline-none " type="text" name="search" placeholder="Search you products" />
                            <button className="h-10 rounded-r-full m-2 ml-0 w-10 bg-gray-100 flex justify-center items-center hover:bg-gray-300">
                                <svg className="opacity-[0.3]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                                </svg>
                            </button>
                        </div>
                        {/* this part for small screen filter options */}
                        {filterIndex && <div id="filterIndex"><Filterindex /></div>}
                        {/* This part for product lists  */}
                        <div>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <div>
                            <PageNavigator />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}



