import Header from "./header"
import Searchbar from "./searchbar"
import Browseitems from "./browseitems"
import About from "./about"

export default function Homepage() {
    return (
        <div >
            <header>
                <div><Header /></div>
                <div><Searchbar /></div>
            </header>
            <main>
                <div><Browseitems /></div>
                <div><About /></div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

