import Link from "next/link";
import Image from "next/image";
import barterLog from "../../../../public/Icons/barterlogo.png"
import message from "../../../../public/Icons/message.png"
export default function ProfileNavbar() {
    return (
        <div className="w-full h-12 p-1  flex justify-between bg-gray-600">
            <Link href={'/'}>
                <div className="cursor-pointer hover:shadow-white rounded-full">
                    <Image className="w-10" src={barterLog} />
                </div>
            </Link>
            <div className="cursor-pointer hover:shadow-white rounded-full flex flex-col justify-center items-center">
                <Image className="w-9" src={message} />
                <div className="w-3 h-3 bg-red-600 shadow-white rounded-full ml-6 mt-[-10px] relative z-10"></div>
            </div>
        </div>
    )
}
