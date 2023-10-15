'use client'
import Image from "next/image";
import berterLogo from "../../../../public/Icons/barterlogo.png";
import bertertext from "../../../../public/Icons/bartertext.png";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
    // ANIMATION
    const logoAnime = () => {
        gsap.to('#berterlogo', { x: 20, y: 20, duration: 5, repeat: -1, yoyo: true });
    };
    //Animation funcion initialisation
    useEffect(() => {
        logoAnime();
    }, [])



    return (
        <div className="flex sm:flex-col justify-center items-center w-full h-[32rem] sm:h-[38rem] bg-gray-200 pl-[10%] pr-[10%] sm:mt-[-15rem]">
            <div >
                <Image className="" src={bertertext} alt="Barter text image" />
            </div>
            <div id="berterlogo" className="sm:mt-[-100px] ">
                <Image className="sm:w-56 sm:mt-[-4rem]" src={berterLogo} alt="Berter Logo" /> {/* Specify width and height for the Image component */}
            </div>
        </div>
    );
}