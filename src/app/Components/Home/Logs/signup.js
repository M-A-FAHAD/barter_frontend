
import Link from "next/link"
export default function Signup() {
    return (
        <div>
            <div class="flex justify-center items-center h-screen">
                <div class="w-80 bg-white p-8 rounded-lg shadow-lg">
                    <p class="text-2xl font-semibold mb-4">Create account</p>
                    <p class="text-xs text-gray-500 mb-2">
                        Let's get started with a barter economoy
                    </p>
                    <form class="mb-4">
                        <input
                            type="text"
                            class="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            class="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            class="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Password"
                        />
                        <button
                            class="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            Create account
                        </button>
                    </form>
                    <p class="text-xs text-gray-600">
                        Already have an account?
                        <Link href={'/login'} class="text-teal-500 font-semibold ml-1 hover:text-blue-500">Log in</Link>
                    </p>
                    <div class="mt-6">
                        <div
                            class="bg-white hover:bg-gray-100 cursor-pointer border border-gray-400 py-2 px-4 rounded-lg flex items-center"
                        >
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
    )
}