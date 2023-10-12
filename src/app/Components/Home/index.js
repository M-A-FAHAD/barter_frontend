'use client'
import Header from "./header"
import Searchbar from "./searchbar"
import Browseitems from "./browseitems"
import About from "./about"
import Navbar from "./navbar"
import { useSelector } from "react-redux"


//signup and login features
import Login from "./Logs/login"
import Signup from "./Logs/signup"
const logscss = "w-full h-[100vh] backdrop-blur-sm  absolute top-0 left-0 z-50"

export default function Homepage() {
    const loginState = useSelector(state => state.loginState)
    const signinState = useSelector(state => state.signinState)
    return (
        <div >
            <header>
                <div><Navbar /></div>
                <div><Header /></div>
                <div><Searchbar /></div>
            </header>
            <section>
                <div><Browseitems /></div>
                <div><About /></div>
            </section>
            <section>
                <div className={`${logscss} ${loginState}`}>
                    <Login />
                </div>
                <div className={`${logscss} ${signinState}`}>
                    <Signup />
                </div>
            </section>
            <footer>


            </footer>
        </div>
    )
}

