import Image from "next/image"
import CategoryDropdown from "./catagoryDropdown"
//import icons
import locationIco from '../../../../../public/Icons/placeholder.png'
import Price from "./price"
import Filterby from "./filterby"
import { useDispatch } from "react-redux"
import { locationSelectorVisibility } from "../../../../../public/RTK/Slices/locationSellectorSlice"
export default function Filterindex() {
    const dispatch = useDispatch()
    const locationSellector = (state) => {
        dispatch(locationSelectorVisibility(state))
    }
    return (
        <div className="w-full p-4 flex flex-col  items-center">
            <div onClick={() => { locationSellector('block') }} className="shadow flex justify-center items-center bg-gray-300 w-full h-10 rounded cursor-pointer hover:bg-gray-200">
                <Image className="w-6" src={locationIco} />
                <p className="">Select Location</p>
            </div>
            <div>
                <CategoryDropdown />
            </div>
            <div>
                <Price />
            </div>
            <div>
                <Filterby />
            </div>
        </div>
    )
}
