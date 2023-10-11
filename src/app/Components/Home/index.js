import Header from "./header"
import Searchbar from "./searchbar"
import Browseitems from "./browseitems"
import About from "./about"
import Navbar from "./navbar"

//signup and login features
import Login from "./Logs/login"
import Signup from "./Logs/signup"
const logscss = "w-full h-[100vh] backdrop-blur-sm  absolute top-0 left-0 z-50"

export default function Homepage() {
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
                <div className={`${logscss} hidden`}>
                    <Login />
                </div>
                <div className={`${logscss} hidden`}>
                    <Signup />
                </div>
            </section>
            <footer>


            </footer>
        </div>
    )
}

