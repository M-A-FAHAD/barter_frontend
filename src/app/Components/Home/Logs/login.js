import Link from "next/link"
export default function Login() {
    return (
        <div>
            <div class="flex justify-center items-center h-screen">
                <div class="w-80 bg-white p-8 rounded-lg shadow-lg">
                    <p class="text-2xl font-semibold mb-4">Create account</p>
                    <p class="text-xs text-gray-500 mb-2">
                        Let's enter the barter economy
                    </p>
                    <form class="mb-4">
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
                            Log in
                        </button>
                    </form>
                    <p class="text-xs text-gray-600">
                        Already have an account?
                        <Link href={'/signup'} class="text-teal-500 font-semibold ml-1 hover:text-blue-500">Sign up</Link>
                    </p>
                </div>
            </div>

        </div >
    )
}
