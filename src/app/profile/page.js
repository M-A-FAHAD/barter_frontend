'use client'
import Image from "next/image";
import dummyIMG from '../../../public/Icons/ball-sport.png'
import { useState } from "react";
//Import external components
import ProfileNavbar from "../Components/Navbar/profileNavbar";
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
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div><ProfileNavbar /></div>
            <div className="w-[50rem] h-[30rem] bg-gray-100 flex sm:relative sm:top-0 sm:left-0 sm:w-full sm:h-screen">
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
                                        <Image className="ml-4 w-20 h-20 rounded-full border-4 border-black" src={dummyIMG} />
                                    </section>
                                    <section className="pt-4">
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Name: <span className="text-blue-400">Mishal Ahamed FAHAD</span></h3>
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Emai: <span className="text-blue-400">mishalahamedfahad@gmail.com</span></h3>
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Phone: <span className="text-blue-400">01771477206</span></h3>
                                        <h3 className="p-4 border m-1 rounded bg-yellow-100 font-bold">Location: <span className="text-blue-400">Comilla...</span></h3>
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
                                            <Image className="w-20 h-20 rounded-full border-4 border-black" src={dummyIMG} />
                                            <label for="fileInput" className="w-20 bg-blue-600 hover:bg-blue-500 text-white flex justify-center rounded p-1 mt-2 cursor-pointer">Edit</label>
                                            <input type="file" id="fileInput" name="file" accept="image/*" className="hidden"></input>
                                        </section>
                                    </div>
                                    <div className="mt-[-50px] sm:mt-0 sm:mt-4">
                                        <leble className="font-bold " for="edit-Name">Edit your Name</leble><br />
                                        <input name="edit-Name" className="mb-4 rounded shadow outline-none p-1 pl-2" type="text" /><br />
                                        <leble className="font-bold" for="edit-Email">Edit your Email</leble><br />
                                        <input name="edit-Email" className="mb-4 rounded shadow outline-none p-1 pl-2" type="text" /><br />
                                        <leble className="font-bold" for="edit-Number">Edit Number</leble><br />
                                        <input name="edit-Number" className="mb-4 rounded shadow outline-none p-1 pl-2" type="number" /><br />
                                        <leble className="font-bold">Edit Your Adress</leble><br />
                                        <input className="mb-4 rounded shadow outline-none p-1 pl-2" type="text" /><br />
                                        <button onClick={showDisplayProfile} className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded w-20">Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {posts &&
                        <div className="w-full">
                            <div className=" h-28 p-2  rounded-md border flex shadow">
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



