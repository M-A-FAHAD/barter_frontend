'use client'
import Image from "next/image"
import gsap from "gsap"

//import icons and images
import dummyIMG from '../../../../../public/Icons/car.png'
import PriceTag from '../../../../../public/Icons/price-tag.png'
import Phone from '../../../../../public/Icons/telephone.png'
import Condition from '../../../../../public/Icons/box.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { spacificProductsVisibility } from "../../../../../public/RTK/Slices/spacificProductSlice"
export default function SpacificProductCard({ color }) {
    const [description, setDescription] = useState(0)
    const toggleDescription = () => {
        if (description === 0) {
            gsap.to('#description', { height: "auto", duration: 0.5, })
            gsap.to("#description-errow", { rotate: 0 })
            setDescription(1)
        } else {
            gsap.to('#description', { height: "4rem", duration: 0.5, })
            gsap.to("#description-errow", { rotate: 180 })
            setDescription(0)
        }
    }
    const dispatch = useDispatch()
    const spacificProductCardVisibility = (state) => {
        dispatch(spacificProductsVisibility(state))
    }
    return (
        <div className="h-auto w-[40rem] bg-gray-100 shadow-2xl p-4 ">
            <div className="pb-2">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">This is our product title that put form product owner</h2>
                    <b onClick={() => { spacificProductCardVisibility('hidden') }} className="bg-gray-500 hover:bg-gray-400 w-8 h-8 flex justify-center items-center rounded-full text-white cursor-pointer">X</b>
                </div>
                <p className="opacity-50">This is our Product adress</p>
            </div>
            <div className="flex sm:block">
                <div>
                    <Image className="w-[25rem] h-[25rem] border shadow sm:w-full " src={dummyIMG} />
                </div>
                <div className="w-[15rem] pl-4 sm:pl-0 sm:pt-4 sm:flex vsm:block sm:justify-between sm:w-full">
                    <div>
                        <li className="list-none border w-full flex p-2 mb-1 shadow">
                            <Image className="w-6 mr-2" src={PriceTag} />
                            <p className="font-bold pl-2 border-l">999 taka</p>
                        </li>
                        <li className="list-none border w-full flex p-2 mb-1 shadow">
                            <Image className="w-6 mr-2" src={Phone} />
                            <p className="font-bold pl-2 border-l">01821212121</p>
                        </li>
                        <li className="list-none border w-full flex p-2 shadow">
                            <Image className="w-6 mr-2" src={Condition} />
                            <p className="font-bold pl-2 border-l"> Ushed(1.5years)</p>
                        </li>
                    </div>
                    <div className="mt-6 sm:mt-0 vsm:mt-4 sm:ml-2 vsm:ml-0  ">
                        <div className="border flex flex-col items-center bg-yellow-400 shadow rounded p-1">
                            <p className="text-center font-bold">Safty tips</p>
                            <hr className="w-[70%]" />
                            <li className="text-[12px]">Meet in a safe & public place</li>
                            <li className="text-[12px]">Don't pay in advance</li>
                        </div >
                        <div className="mt-4 ">
                            <button className="w-full bg-blue-600 hover:bg-blue-500 p-1 text-white font-bold rounded mb-2 shadow">View Barter</button><br />
                            {/* <p className="">This is my want to barter this car, i wat to barter this car and some money<span className="text-blue-500 pl-2 cursor-pointer">View more</span></p> */}
                            <button className="w-full bg-blue-600 hover:bg-blue-500 p-1 text-white font-bold rounded  shadow">Sent Connection</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-1">
                <h4 className="font-bold vsm:ml-4">Description</h4>
                <p id="description" className={`p-4 overflow-hidden transition-transform ease-in-out duration-500 transform h-16`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, praesentium fugit voluptatibus debitis illo minus. Sunt animi facere impedit itaque in esse neque tempore placeat blanditiis, delectus, nobis voluptate, error pariatur alias laborum illum porro totam quasi necessitatibus voluptates sed? Consectetur nihil tempore maiores aperiam architecto reprehenderit cum nostrum numquam.
                </p>
                <hr className="shadow" />
                <div onClick={toggleDescription} className="w-full flex justify-center cursor-pointer hover:bg-gray-200">
                    <svg id="description-errow" className={`rotate-180 mb-1 mt-1`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                        <path d="M10 50 L50 10 L90 50" fill="none" stroke="#000" stroke-width="5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
