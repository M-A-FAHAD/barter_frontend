'use client'
import Image from "next/image";
import dummyIMG from '../../../public/Icons/dummy.png'
import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from '../../../public/Scripts/authentication'

//import images
import barterLogo from '../../../public/Icons/barterlogo.png'
//Import external components
import Chats from "../Components/Profile/Chats/chats";
export default function Profile() {
    //This is component hide and show logics
    const [profile, setProfile] = useState(true)
    const [posts, setPosts] = useState(false)
    const [chats, setChats] = useState(false)
    const showProfile = () => {
        setProfile(true)
        setPosts(false)
        setChats(false)
    };
    const showPosts = () => {
        setProfile(false)
        setPosts(true)
        setChats(false)
    };
    const showChats = () => {
        setProfile(false)
        setPosts(false)
        setChats(true)
    };
    //This is Prolie section 
    const [displayProfile, setDisplayProfile] = useState(true)
    const [editProfile, setEditProfile] = useState(false)
    const showDisplayProfile = () => {
        setDisplayProfile(true)
        setEditProfile(false)
    };
    const showEditProfile = () => {
        setDisplayProfile(false)
        setEditProfile(true)
    };
    //this is small screen sellection visibility section
    const [smSellectionVisibility, setSmSellectionVisibility] = useState(false)
    const smallScreenSellection = () => {
        setSmSellectionVisibility(!smSellectionVisibility)
        if (smSellectionVisibility === false) {
            gsap.to('#small_screen_sellection', { marginTop: 6, ease: 'bounce' })
        } else {
            gsap.to('#small_screen_sellection', { marginTop: '-170px' })
        }
    }
    //user Information states
    const [image, setImage] = useState(dummyIMG)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    //This is edit profile section
    //profile image sellectin and setup
    const [SellectedImage, setSellectedImage] = useState(dummyIMG)
    const setImidietProfileImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setSellectedImage(reader.result)
        }
    }
    const [uid, setUid] = useState('')
    const [editName, setEditName] = useState('')
    const [editEmail, setEditEmail] = useState('')
    //This is profile passowrd section
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeteNewPassword, setRepeteNewPassword] = useState('')
    //This is authentication section
    const authenticationState = useSelector(state => state.authentication)
    useEffect(() => {
        if (authenticationState.user) {
            setImage(authenticationState.user.profileImage)
            setName(authenticationState.user.name)
            setEmail(authenticationState.user.email)
            //This is edit section
            setUid(authenticationState.user.uid)
            setSellectedImage(authenticationState.user.profileImage)
            setEditName(authenticationState.user.name)
            setEditEmail(authenticationState.user.email)
        }
    }, [authenticationState])


    //Profile update loading animation state
    const [profileUpdateLoading, setProfileUpdateLoading] = useState(false)
    const [profileUpdateButton, setProfileUpdateButton] = useState(true)
    const updateProfile = async () => {
        setProfileUpdateLoading(true)
        setProfileUpdateButton(false)
        const userInputsForUpadateProfile = {
            id: uid,
            name: editName,
            email: editEmail,
            profileImage: SellectedImage,
            password: oldPassword,
            newpassword: newPassword
        }
        if (newPassword !== repeteNewPassword) {
            gsap.to('#password_not_mach', { marginBottom: 0 })
        } else {
            try {
                const res = await fetch('https://barter-backend.vercel.app/user/updateprofile', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInputsForUpadateProfile)
                })
                const jsonRes = await res.json()
                if (jsonRes.success) {
                    setProfileUpdateLoading(false)
                    setProfileUpdateButton(true)
                    alert('Profile updated successfully')
                } else {
                    setProfileUpdateLoading(false)
                    setProfileUpdateButton(true)
                    alert('profile update failed please chack you password')
                }
            } catch (err) {
                console.log(err)
            }
        }

    }


    //Thsi line for authentication
    const dispatch = useDispatch()
    useEffect(() => { authentication(dispatch) }, [])
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gifbackground-coverImage ">
            <div className="w-[50rem] h-[30rem] bg-gray-100 md:bg-white flex md:block lg:w-full md:h-full">
                <div className="hidden md:block">
                    <div className="w-full h-12 p-1  flex justify-between bg-gray-600 relative z-10">
                        <Link href={'/'}>
                            <div className="cursor-pointer hover:shadow-white rounded-full">
                                <Image className="w-10 " src={barterLogo} />
                            </div>
                        </Link>
                        <div onClick={smallScreenSellection} className="w-8 h-8 cursor-pointer hover:shadow-white  flex flex-col justify-center items-center mr-2 mt-1">
                            <div className="bg-white w-6 h-1 rounded-full m-[2px]"></div>
                            <div className="bg-white w-6 h-1 rounded-full m-[2px]"></div>
                            <div className="bg-white w-6 h-1 rounded-full m-[2px]"></div>
                        </div>
                    </div>
                    <div id="small_screen_sellection" className="w-32 shadow absolute right-0 mr-10 bg-yellow-100 rounded h-40 mt-[-170px]">
                        <div onClick={showProfile} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100 " >
                            <p className="text-lg text-gray-400 hover:text-black font-bold p-1">Profile</p>
                        </div>
                        <div onClick={showPosts} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100  items-center" >
                            <p className="text-lg text-gray-400 hover:text-black font-bold p-1">Posts</p>
                        </div>
                        <div onClick={showChats} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100 ">
                            <p className="text-lg text-gray-400 hover:text-black font-bold p-1">Chats</p>
                        </div>
                        <div onClick={smallScreenSellection} className="w-full flex justify-center cursor-pointer border-b pt-3">
                            <svg id="description-errow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                                <path d="M10 50 L50 10 L90 50" fill="none" stroke="#000" stroke-width="5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-r w-[35%] md:hidden">
                    <div onClick={showProfile} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100 " >
                        <p className="text-2xl font-bold p-2">Profile</p>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M90 50 L90 50 M90 50 L70 30 M90 50 L70 70" fill="none" stroke="black" stroke-width="5" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                    <div onClick={showPosts} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100  items-center" >
                        <p className="text-2xl font-bold p-2">Posts</p>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M90 50 L90 50 M90 50 L70 30 M90 50 L70 70" fill="none" stroke="black" stroke-width="5" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                    <div onClick={showChats} className="m-1 border rounded hover:bg-gray-200 cursor-pointer flex justify-between shadow-xl hover:scale-105 transition-transform ease duration-100 ">
                        <p className="text-2xl font-bold p-2">Chats</p>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"><path d="M90 50 L90 50 M90 50 L70 30 M90 50 L70 70" fill="none" stroke="black" stroke-width="5" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full flex">
                    {profile &&
                        <div>
                            {
                                displayProfile &&
                                <div>
                                    <section>
                                        <Image width={0} height={0} className="w-20 h-20 rounded-full border" src={image} />
                                    </section>
                                    <section className="pt-4">
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Name: <span className="text-blue-400">{name}</span></h3>
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Emai: <span className="text-blue-400">{email}</span></h3>
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Password: <span className="text-blue-400">*******</span></h3>
                                        <button onClick={showEditProfile} className="bg-blue-600 hover:bg-blue-500 text-white p-2 border rounded-full ml-4 mt-2">Edit Profile</button>
                                    </section>
                                </div>
                            }
                            {
                                editProfile &&
                                <div className="w-[29rem] sm:flex sm:flex-col sm:w-full ">
                                    <div className="flex justify-between sm:block">
                                        <h1 className='text-2xl font-bold'>Edit your profile</h1>
                                        <hr />
                                        <section className="flex flex-col ml-4 sm:ml-0 sm:mt-4 ">
                                            <Image width={0} height={0} className="w-20 h-20 rounded-full border" src={SellectedImage} />
                                            <label for="fileInput" className="w-20 bg-blue-600 hover:bg-blue-500 text-white flex justify-center rounded p-1 mt-2 cursor-pointer">Edit</label>
                                            <input onChange={setImidietProfileImage} type="file" id="fileInput" name="file" accept="image/*" className="hidden"></input>
                                        </section>
                                    </div>
                                    <div className="mt-[-50px] sm:mt-0 sm:mt-4">
                                        <leble className="font-bold " for="edit-Name">Edit your Name</leble><br />
                                        <input
                                            onChange={(e) => setEditName(e.target.value)}
                                            name="edit-Name"
                                            className="mb-4 rounded shadow outline-none p-1 pl-2"
                                            type="text"
                                            placeholder={editName}
                                        />
                                        <br />
                                        <leble className="font-bold" for="edit-Email">Edit your Email</leble><br />
                                        <input
                                            onChange={(e) => setEditEmail(e.target.value)}
                                            name="edit-Email"
                                            className="mb-4 rounded shadow outline-none p-1 pl-2"
                                            type="text"
                                            placeholder={editEmail}
                                        />
                                        <br />
                                        <leble className="font-bold" for="edit-Number">Enter Password</leble><br />
                                        <input
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            name="edit-Number"
                                            className="mb-4 rounded shadow outline-none p-1 pl-2"
                                            type="password"
                                            placeholder="Enter old password"
                                        />

                                        <br />
                                        <hr />
                                        <leble className="font-bold" for="edit-Number">Edit Password</leble><br />
                                        <p id="password_not_mach" className="text-xs pl-1 text-red-500 mb-[-15px]">password not matched</p>
                                        <input
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            name="new-passowrd"
                                            className="mb-2 rounded shadow outline-none p-1 pl-2"
                                            type="password" placeholder="Enter new passowrd"
                                        />
                                        <br />
                                        <input
                                            onChange={(e) => setRepeteNewPassword(e.target.value)}
                                            name="repete-new-password"
                                            className="mb-2 rounded shadow outline-none p-1 pl-2"
                                            type="password"
                                            placeholder="Repete new password"
                                        />
                                        <br />
                                        {
                                            profileUpdateButton &&
                                            <button onClick={updateProfile} className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded w-20">Save</button>
                                        }
                                        {
                                            profileUpdateLoading &&
                                            <button
                                                className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-teal-600 "
                                            >
                                                <div id='loginLoading' className='w-5 h-5 mr-1 rounded-full border-4  border-t-teal-500 animate-spin'></div>
                                                <div>please wait...</div>
                                            </button>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {posts &&
                        <div className="w-full">
                            <Link href={'/profile/post'}>
                                <div className=" h-10 p-2  rounded-md border flex shadow mb-2 cursor-pointer bg-blue-100 hover:bg-blue-200 transition ease-in duration-100 flex justify-center items-center">
                                    <h4 className="text-gray-600 font-bold text-3xl pr-2 ">Post Add</h4>
                                    <div>
                                        <div className="w-8 h-1 bg-gray-600 rounded-full absolute"></div>
                                        <div className="w-8 h-1 bg-gray-600 rounded-full absolute rotate-90"></div>
                                    </div>
                                </div>
                            </Link>
                            <div className=" h-28 p-2  rounded-md border flex shadow mb-2">
                                <Image className="w-24 border" src={dummyIMG} />
                                <div className="pl-2">
                                    <h2 className="text-xl font-bold">This is Product Title</h2>
                                    <p>comilla,bangladesh</p>
                                    <div className="pt-1">
                                        <button className="w-16 m-1 rounded text-white font-bold bg-blue-600 hover:bg-blue-500">Edit</button>
                                        <button className="w-16 m-1 rounded text-white font-bold bg-blue-600 hover:bg-blue-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    {
                        chats &&
                        <div className="w-full">
                            <Chats />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}




