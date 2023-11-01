import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinVisibility } from "../../../../../public/RTK/Slices/signinSlice";
import { loginVisibility } from "../../../../../public/RTK/Slices/loginSlice";

export default function Signup() {
    const dispatch = useDispatch();

    const freezescreen = () => {
        document.body.style.overflow = "hidden";
    };

    const unfreezescreen = () => {
        document.body.style.overflow = "auto";
    };

    const setsigninVisibility = (payload) => {
        dispatch(signinVisibility(payload));
    };

    const setloginVisibility = (payload) => {
        dispatch(loginVisibility(payload));
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupData = {
        name: name,
        email: email,
        password: password,
        profileImage: "dummy Image"
    };

    const signupApi = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:6001/user/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });

            const jsonRes = await res.json();
            console.log(jsonRes);

            // Handle the API response here, e.g., show a success message or handle errors
        } catch (error) {
            console.error(error);

            // Handle any API request errors
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-80 bg-white p-8 rounded-lg shadow-lg">
                    <div onClick={() => { setsigninVisibility('hidden'); unfreezescreen(); }} className="absolute ml-[15rem] mt-[-15px] bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-teal-500 cursor-pointer">
                        X
                    </div>
                    <p className="text-2xl font-semibold mb-4">Create account</p>
                    <p className="text-xs text-gray-500 mb-2">
                        Let's get started with a barter economy
                    </p>
                    <form className="mb-4" onSubmit={signupApi}>
                        <input
                            type="text"
                            className="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            className="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            Create account
                        </button>
                    </form>
                    <p className="text-xs text-gray-600">
                        Already have an account?
                        <span onClick={() => { setloginVisibility('block'); setsigninVisibility('hidden'); freezescreen(); }} className="text-teal-500 font-semibold ml-1 hover:text-blue-500 cursor-pointer">Log in</span>
                    </p>
                    <div className="mt-6">
                        <div className="bg-white hover:bg-gray-100 cursor-pointer border border-gray-400 py-2 px-4 rounded-lg flex items-center">
                            <svg
                                class="text-gray-400 h-5 w-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="0"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                ></path>
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                ></path>
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                ></path>
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19-5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                ></path>
                            </svg>
                            Sign up with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
