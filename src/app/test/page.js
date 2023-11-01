'use client'
import Image from "next/image"
import dummyIMG from "../../../public/Icons/dummy.png"
import { useState } from "react"
export default function page() {
    const [image, setImage] = useState(dummyIMG)
    console.log(image)
    const setImidietProfileImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImage(reader.result)
        }
    }
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <input onChange={setImidietProfileImage} className="hidden" id="fileUpload" type="file" />
            <label for="fileUpload">
                <Image width={100} height={100} alt="Image" className="w-[100px] h-[100px] flex justify-center items-center rounded-full border border-4 border-black" src={image} />
            </label>
        </div>
    )
}


