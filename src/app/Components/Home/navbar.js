////////////////////////////////////////
////[Navbar use directily in layout.js]///
////////////////////////////////////////
'use client'
// Import the necessary libraries at the top
import { gsap } from "gsap";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    // Use a boolean state variable instead of a numeric one for 'click'
    const [click, setClick] = useState(false);

    const clickEvent = () => {
        // Toggle the 'click' state
        setClick(!click);

        // Use ternary operators for rotation values
        const rotateOne = click ? 0 : 270;
        const rotateTwo = click ? 45 : -540;

        // Use gsap.to to animate the elements
        gsap.to("#cros", { rotation: rotateOne, duration: 1, ease: 'linear' });
        gsap.to("#Capa_1", { rotation: rotateTwo, duration: 1, ease: 'linear' });

        //left wright div operations

        gsap.to("#navOne", { x: click ? 0 : 209, duration: 1, })
        gsap.to("#navTwo", { x: click ? 0 : 137, duration: 1, })
        gsap.to("#navThree", { x: click ? 0 : 65, duration: 1, })
        gsap.to("#navFour", { x: click ? 0 : -65, duration: 1, })
        gsap.to("#navFive", { x: click ? 0 : -137, duration: 1, })
        gsap.to("#navSix", { x: click ? 0 : -209, duration: 1, })
        gsap.to(["#left-nav", "#right-nav"], { display: click ? "block" : "none", delay: click ? 0 : 0.6, })

    };

    // Use a class name for opacityClass instead of template literals
    const opacityClass = `relative z-0 `;

    // Use a class name for NavComCss instead of hardcoding it
    const NavComCss = "border border-yellow-100 m-1 w-16 p-1 rounded cursor-pointer text-center transition ease-in-out delay-1 hover:bg-gray-200 hover:scale-125 text-[10px]  hover:text-black";


    return (
        <div className="absolute w-full pt-4 flex justify-center sm:mt-80 sm:ml-[10%] vsm:ml-[5%] sm:h-[232px] sm:w-[89px]">
            <div id="main_div" className={`flex items-center sm:flex-col sm:justify-center`}>
                <div id="left-nav" className={opacityClass}>
                    <ul className={`flex mr-[-15px] pr-[20px] sm:block`}>
                        <Link href={'/'}><li id="navOne" className={NavComCss}>Home</li></Link>
                        <Link href={'/about'}><li id="navTwo" className={NavComCss}>About Us</li></Link>
                        <li id="navThree" className={NavComCss}>Service</li>
                    </ul>
                </div>
                <div onClick={clickEvent} id="cros" className={`bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center relative z-10 border-4 border-t-4 border-t-gray-500 border-b-4 border-b-gray-500 sm:mr-[4px]`}>
                    <svg className="h-8 transform rotate-45" fill="gray" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.402 45.402" space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path> </g> </g></svg>
                </div>
                <div id="right-nav" className={opacityClass}>
                    <ul className={`flex  ml-[-15px] pl-[20px] sm:block sm:pr-[10px]`}>
                        <Link href={'/ex'}><li id="navFour" className={NavComCss}>Exchange</li></Link>
                        <li id="navFive" className={NavComCss}>Blog</li>
                        <li id="navSix" className={NavComCss}>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




















