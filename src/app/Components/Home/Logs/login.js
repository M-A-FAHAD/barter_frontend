import { useDispatch } from "react-redux"
import { loginVisibility } from "../../../../../public/RTK/Slices/loginSlice"
import { signinVisibility } from "../../../../../public/RTK/Slices/signinSlice"
export default function Login() {
    const freezescreen = () => {
        document.body.style.overflow = "hidden";
    }
    const unfreezescreen = () => {
        document.body.style.overflow = "auto";
    }
    const dispatch = useDispatch()
    const setloginVisibility = (payload) => {
        dispatch(loginVisibility(payload))
    }
    const setsigninVisibility = (payload) => {
        dispatch(signinVisibility(payload))
    }
    return (
        <div>
            <div class="flex justify-center items-center h-screen">
                <div class="w-80 bg-white p-8 rounded-lg shadow-lg">
                    <div
                        onClick={() => { setloginVisibility('hidden'), unfreezescreen() }}
                        className="absolute ml-[15rem] mt-[-15px] bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-teal-500 cursor-pointer">
                        X
                    </div>
                    <p class="text-2xl font-semibold mb-4">Create account</p>
                    <p class="text-xs text-gray-500 mb-2">
                        Let's enter the barter economy
                    </p>
                    <form class="mb-4">
                        <input
                            type="email"
                            class="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            class="border rounded-lg p-2 mb-3 w-full"
                            placeholder="Password"
                            required
                        />
                        <button
                            class="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            Log in
                        </button>
                    </form>
                    <p class="text-xs text-gray-600">
                        Already have an account?
                        <span onClick={() => { setloginVisibility('hidden'), setsigninVisibility('block'), freezescreen() }} class="text-teal-500 font-semibold ml-1 hover:text-blue-500 cursor-pointer">Sign up</span>
                    </p>
                </div>
            </div>

        </div >
    )
}
