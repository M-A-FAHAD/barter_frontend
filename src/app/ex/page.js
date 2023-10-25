'use client'
// Import required modules and components
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import Image from "next/image";

// Import images
import filterIco from "../../../public/Icons/filter.png";

// Import custom components
import Filterindex from "../Components/EX_page/Filter/index";
import ProductCard from "../Components/EX_page/Product/productCard";
import PageNavigator from "../Components/EX_page/Product/pageNavigator";
import LocationSellector from "../Components/EX_page/Filter/locationSellector";
import SpacificProductCard from "../Components/EX_page/Product/spacificProductCard";

export default function Page() {
    // Location selector state
    const locationSelector = useSelector((state) => state.locationSellectorState);
    //spacific product selector state
    const spacificProductCardState = useSelector((state) => state.spacificProductState)

    // Function to freeze the screen
    const freezeScreen = () => {
        document.body.style.overflow = "hidden";
    }

    // Function to unfreeze the screen
    const unfreezeScreen = () => {
        document.body.style.overflow = "auto";
    }

    // Use useEffect to control screen freeze based on locationSelector
    useEffect(() => {
        if (locationSelector === "hidden") {
            unfreezeScreen();
        } else {
            freezeScreen();
        }
    }, [locationSelector]);

    const [filterIndex, setFilterIndex] = useState(false);

    // Function to toggle filter visibility
    const toggleFilterVisibility = () => {
        setFilterIndex(!filterIndex);
        gsap.from('#filterImage', { rotate: 360, duration: 0.5 });
    }

    return (
        <div>
            <div className={`absolute w-full h-[100vh] z-20 flex justify-center items-center backdrop-blur-sm ${locationSelector}`}>
                <LocationSellector />
            </div>
            <div className={`absolute w-full h-[100vh] z-20 flex justify-center items-center backdrop-blur-sm ${spacificProductCardState}`}>
                <SpacificProductCard color='blue' />
            </div>

            <div className="flex justify-center ">
                <div className="h-auto border mt-6 mb-20 w-[50rem] flex rounded overflow-hidden shadow">
                    {/* Filter section */}
                    <div className="w-1/3 md:hidden">
                        <div className="w-full p-2 bg-gray-300 flex justify-center items-center">
                            <Image src={filterIco} className="w-10" alt="Filter Icon" />
                            <p className="font-bold pl-2 pt-2">FILTER</p>
                        </div>
                        <div>
                            <Filterindex />
                        </div>
                        <hr className="w-[95%] ml-[2.5%]" />
                    </div>

                    {/* Product card section */}
                    <div className="w-2/3 md:w-full">
                        <div className="bg-gray-200 flex items-center">
                            <div onClick={toggleFilterVisibility} className="pl-2 cursor-pointer opacity-75 min-md:hidden">
                                <Image src={filterIco} className="w-10" id="filterImage" alt="Filter Icon" />
                            </div>
                            <input
                                className="p-2.5 rounded-l-full ml-2 bg-gray-100 h-full w-[90%] sm:w-[85%] pl-4 focus:outline-none"
                                type="text"
                                name="search"
                                placeholder="Search your products"
                            />
                            <button className="h-10 rounded-r-full m-2 ml-0 w-10 bg-gray-100 flex justify-center items-center hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                                    <path d="M21 3C11.601563 3 4 10.601563 4 20C4 29.398438 11.601563 37 21 37C24.355469 37 27.460938 36.015625 30.09375 34.34375L42.375 46.625L46.625 42.375L34.5 30.28125C36.679688 27.421875 38 23.878906 38 20C38 10.601563 30.398438 3 21 3ZM21 7C28.199219 7 34 12.800781 34 20C34 27.199219 28.199219 33 21 33C13.800781 33 8 27.199219 8 20C8 12.800781 13.800781 7 21 7Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Small screen filter options */}
                        {filterIndex && <div id="filterIndex"><Filterindex /></div>}

                        {/* Product lists */}
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
            </div>
        </div>
    );
}
