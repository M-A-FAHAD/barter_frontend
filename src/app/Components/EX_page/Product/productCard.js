import Image from "next/image"
//dummy prhoto
import dummy from '../../../../../public/Icons/car.png'
import { useDispatch } from "react-redux"
import { spacificProductsVisibility } from "../../../../../public/RTK/Slices/spacificProductSlice"

export default function ProductCard() {
    const dispatch = useDispatch()
    const spacificProductCardVisibility = (state) => {
        dispatch(spacificProductsVisibility(state))
    }
    return (
        <div onClick={() => { spacificProductCardVisibility('block') }} className="w-[95%] flex p-2 border m-4 shadow hover:scale-105 transition-transform ease duration-200 cursor-zoom-in">
            <div>
                <Image className="w-32 h-32 bg-gray-500" src={dummy} />
            </div>
            <div className="pl-4">
                <h2 className="font-bold text-2xl">Iphone 12 pro max</h2>
                <p className="opacity-75">dhaka,werable</p>
                <b className="text-green-500">TK  <span>9999</span></b>
                <p className="opacity-50 mt-6">just now</p>
            </div>
        </div>
    )
}
