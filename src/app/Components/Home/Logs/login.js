'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { loginVisibility } from "../../../../../public/RTK/Slices/loginSlice";
import { signinVisibility } from "../../../../../public/RTK/Slices/signinSlice";
import { authentication } from '../../../../../public/Scripts/authentication'
import { gsap } from 'gsap';

//This sollutino for testion pourpose
import cookie from "js-cookie"
export default function Login() {
    const dispatch = useDispatch();

    const freezescreen = () => {
        document.body.style.overflow = "hidden";
    };

    const unfreezescreen = () => {
        document.body.style.overflow = "auto";
    };

    const setloginVisibility = (payload) => {
        dispatch(loginVisibility(payload));
    };

    const setsigninVisibility = (payload) => {
        dispatch(signinVisibility(payload));
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logData = {
        email: email,
        password: password,
    };
    //login state defined
    const [login, setLogin] = useState(false)
    if (login) {
        dispatch(loginVisibility('hidden'))
    } else {

    }
    //login api call
    const [loginBTN, setLoginBTN] = useState(true)
    const [loginLoading, setLoginLoading] = useState(false)
    const loginApi = async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginBTN(false)
        try {
            const res = await fetch("https://barter-backend.vercel.app/user/login", {
                method: "POST", // Use "method" instead of "type"
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(logData),
            });
            const jsonRes = await res.json();
            if (jsonRes.success) {
                setLogin(true)



                //This sollution for testing pourpose i want to set it on cookies
                cookie.set('token', jsonRes.token, { expires: 1 })

                gsap.to("#loginIndicator", { marginTop: "-25px" })

                //set authenticaton state 
                authentication(dispatch)
            } else {
                gsap.to("#loginIndicator", { marginTop: 0 })
                setLoginLoading(false);
                setLoginBTN(true)
            }
            // Handle the response, e.g., check for login success or display an error message
        } catch (error) {
            // console.log(error);
            // Handle any API request errors
        }
    };
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-80 bg-white p-8 rounded-lg shadow-lg">
                    <div
                        onClick={() => {
                            setloginVisibility('hidden');
                            unfreezescreen();
                        }}
                        className="absolute ml-[15rem] mt-[-15px] bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-teal-500 cursor-pointer">
                        X
                    </div>
                    <p className="text-2xl font-semibold mb-4">Create account</p>
                    <p className="text-xs text-gray-500 mb-2">
                        Let's enter the barter economy
                    </p>
                    <form className="mb-4" onSubmit={loginApi}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="border rounded-lg p-2 mb-2 w-full relative z-10"
                            placeholder="Password"
                            required
                        />
                        <p id='loginIndicator' className='text-xs text-red-500 mb-2 ml-1 mt-[-25px]'>Login failed.plz chack you email/password</p>
                        {
                            loginBTN &&
                            <button
                                className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            >
                                Log in
                            </button>
                        }
                        {loginLoading &&
                            <button
                                className="flex items-center bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 "
                            >
                                <div id='loginLoading' className='w-5 h-5 mr-1 rounded-full border-4  border-t-teal-500 animate-spin'></div>
                                <div>please wait...</div>
                            </button>
                        }
                    </form>
                    <p className="text-xs text-gray-600">
                        Already have an account?
                        <span onClick={() => {
                            setloginVisibility('hidden');
                            setsigninVisibility('block');
                            freezescreen();
                        }} className="text-teal-500 font-semibold ml-1 hover:text-blue-500 cursor-pointer">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
