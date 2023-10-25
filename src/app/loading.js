import Image from "next/image"
import barterLogo from "../../public/Icons/barterlogo.png"
export default function Loading() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div id="one" className=" border-4 border-orange-400  rounded-full  animate-bounce">
                <div id="two" className=" rounded-full p-2">
                    <Image className="w-16 " src={barterLogo} alt="Website log" />
                </div>
            </div>
        </div>
    )
}
