'use client'
import Image from "next/image"
import filterIco from "../../../public/Icons/filter.png"
import Filter from "../Components/EX_page/Filter/filter"
import ProductCard from "../Components/EX_page/Product/productCard"
import PageNavigator from "../Components/EX_page/Product/pageNavigator"
export default function page() {
    return (
        <div className="flex justify-center">
            <div className="h-auto border mt-20 mb-20 w-[50rem] flex rounded overflow-hidden ">
                {/* this is filter section  */}
                <div className=" w-1/3   md:hidden">
                    <div className="w-full p-2 bg-gray-300 flex justify-center items-center">
                        <Image src={filterIco} className="w-10"></Image>
                        <p className="font-bold pl-2 pt-2">FILTER</p>
                    </div>
                    <div>
                        <Filter />
                    </div>
                    <hr className="w-[95%] ml-[2.5%]" />
                </div>
                {/* this is product cart section */}
                <div className="w-2/3 md:w-full">
                    <div className="bg-gray-200  flex items-center">
                        <input className=" p-2.5 rounded-l-full ml-2 bg-gray-100 h-full w-[90%] sm:w-[85%] pl-4 focus:outline-none " type="text" name="search" placeholder="Search you products" />
                        <button className="h-10 rounded-r-full m-2 ml-0 w-10 bg-gray-100 flex justify-center items-center hover:bg-gray-300">
                            <svg className="opacity-[0.3]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                            </svg>
                        </button>
                    </div>
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
    )
}
