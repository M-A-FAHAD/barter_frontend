'use client'
import Header from "./header"
import Searchbar from "./searchbar"
import Browseitems from "./browseitems"
import About from "./about"
import HomeNavbar from "../Navbar/homeNavbar"
import Endline from "./endline"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { authentication } from '../../../../public/Scripts/authentication'


//signup and login features
import Login from "./Logs/login"
import Signup from "./Logs/signup"
const logscss = "absolute w-[100vw] h-[100vh] bottom-0 backdrop-blur-sm  z-50"

export default function Homepage() {
    const loginState = useSelector(state => state.loginState)
    const signinState = useSelector(state => state.signinState)
    //This section for authencticate the user
    const dispatch = useDispatch()
    useEffect(() => { authentication(dispatch) }, [])
    return (
        <div >
            <header>
                <div ><HomeNavbar /></div>
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
                <div>
                    <Endline />
                </div>

            </footer>
        </div>
    )
}

