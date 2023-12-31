'use client'
import Image from "next/image"
import Logs from "../../../../public/Icons/Signup.png"
import { useDispatch, useSelector } from "react-redux"
import { loginVisibility } from "../../../../public/RTK/Slices/loginSlice"
import { useEffect, useState } from "react"
import { authentication } from "../../../../public/Scripts/authentication"
import { useRouter } from "next/navigation"
import { removeAuthentication } from "../../../../public/RTK/Slices/authentication"
import Cookies from "js-cookie"


export default function Searchbar() {
    //This is login form visibitlity
    const freezescreen = () => {
        document.body.style.overflow = "hidden";
    }
    const dispatch = useDispatch()
    const setlogsVisibility = (payload) => {
        dispatch(loginVisibility(payload))
        freezescreen()
    }
    // profile image
    const [ProfileImage, setProfileImage] = useState(Logs)
    const [loginSignupBtn, setLoginSignupBtn] = useState(true)
    const [profile, setProfile] = useState(false)
    const authanticationState = useSelector(state => state.authentication)
    useEffect(() => {
        if (authanticationState.user) {
            setProfileImage(authanticationState.user.profileImage)
            setLoginSignupBtn(false)
            setProfile(true)
        }
    }, [authanticationState])
    //This is logout button visibility
    const [logOutVisibility, setLogUoutVisibility] = useState('hidden')
    const logOutVisi = () => {
        logOutVisibility == 'hidden' ? setLogUoutVisibility('block') : setLogUoutVisibility('hidden')
    }
    //This is profile button logics
    const router = useRouter()
    const profileBtn = () => {
        router.push('/profile')
    }
    //This is logOut button logics
    const logOutBtn = () => {
        dispatch(removeAuthentication())
        Cookies.remove('token')
        window.location.reload()
    }
    return (
        <div className=" p-8 flex justify-center items-center w-full  ">
            <div className="w-[62rem] flex ">
                <div className="w-[100%] h-10 flex overflow-hidden rounded-full ">
                    <input className="bg-gray-100 h-full w-[90%] sm:w-[85%] pl-4 focus:outline-none " type="text" name="search" placeholder="Search you products" />
                    <button className=" h-full w-[10%] sm:w-[15%] flex justify-center items-center bg-gray-100 hover:bg-gray-200">
                        <svg className="opacity-[0.3]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                    </button>
                </div >
                {loginSignupBtn &&

                    <div>
                        <span className="hidden min-md:block ml-2">
                            <button
                                onClick={() => { setlogsVisibility('block') }}
                                class="relative w-32 h-10  bg-transparent border-2 border-gray-400 rounded-full text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg"
                            >
                                <span class="font-semibold tracking-wide">Login/Signup</span>
                                <div
                                    class="absolute top-0 left-0 w-10 h-10 bg-gray-900 rounded-full opacity-0 transform translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 "
                                ></div>
                            </button>
                        </span>
                        <span className="hidden md:block ml-2 transition-all duration-300 ease-in-out hover:opacity-[0.8] cursor-pointer">
                            <span onClick={() => { setlogsVisibility('block') }}>
                                <Image className="w-12" src={Logs} />
                            </span>
                        </span>

                    </div>
                }
                {
                    profile &&
                    <div>
                        <Image onClick={logOutVisi} width={0} height={0} className="w-12 h-12 ml-4 cursor-pointer hover:shadow-xl rounded-full" src={ProfileImage} />
                        <div className={`absolute z-10 w-28 h-20 shadow flex flex-col justify-center items-center ml-[-3rem]  mt-1 rounded ${logOutVisibility}`}>
                            <button onClick={profileBtn} className="border p-1 w-24 rounded-lg bg-blue-600 hover:bg-blue-500 hover:scale-105 ease-in duration-100 text-white font-bold shadow mb-[-20px]">Profile</button><br />
                            <button onClick={logOutBtn} className="border p-1 w-24 rounded-lg bg-blue-600 hover:bg-blue-500 hover:scale-105 ease-in duration-100 text-white font-bold shadow ">Log-Out</button>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}
