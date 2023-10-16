'use client'
import { useState } from "react";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { locationSelectorVisibility } from "../../../../../public/RTK/Slices/locationSellectorSlice";
export default function LocationSellector() {
    const [dhaka, setDhaka] = useState(false)
    const [chottogram, setChottogram] = useState(false)
    const [rajshahi, setRajshahi] = useState(false)
    const [khulna, setKhulna] = useState(false)
    const [sylhet, setSylhet] = useState(false)
    const [borishal, setBorishal] = useState(false)
    const [rangpur, setRangpur] = useState(false)
    const show = (id) => {
        gsap.to(`#${id} p`, {
            rotate: 90
        })
        gsap.to(`#${id}HiddenDiv`, {
            y: 0,
            height: 250
        })
    };
    const hide = (id) => {
        gsap.to(`#${id} p`, {
            rotate: 0
        })
        gsap.to(`#${id}HiddenDiv`, {
            y: -250,
            height: 0
        })
    }
    const toggleHiddenDiv = (id) => {
        if (id === 'dhaka') {
            if (dhaka === false) {
                show(id)
                setDhaka(true)
            } else {
                hide(id)
                setDhaka(false)
            }
        } else if (id === 'chottogram') {
            if (chottogram === false) {
                show(id)
                setChottogram(true)
            } else {
                hide(id)
                setChottogram(false)
            }
        } else if (id === "rajshahi") {
            if (rajshahi === false) {
                show(id)
                setRajshahi(true)
            } else {
                hide(id)
                setRajshahi(false)
            }
        } else if (id === 'khulna') {
            if (khulna === false) {
                show(id)
                setKhulna(true)
            } else {
                hide(id)
                setKhulna(false)
            }
        } else if (id === 'sylhet') {
            if (sylhet === false) {
                show(id)
                setSylhet(true)
            } else {
                hide(id)
                setSylhet(false)
            }
        } else if (id === 'borishal') {
            if (borishal === false) {
                show(id)
                setBorishal(true)
            } else {
                hide(id)
                setBorishal(false)
            }
        } else if (id === 'rangpur') {
            if (rangpur === false) {
                show(id)
                setRangpur(true)
            } else {
                hide(id)
                setRangpur(false)
            }
        }
    }
    //location sellector state defined
    const dispatch = useDispatch()
    const locationSellector = (state) => {
        dispatch(locationSelectorVisibility(state))
    }
    //stylings
    const divitionMaindiv = `overflow-hidden`
    const divitionsStyle = `list-none  pt-4 pb-4 pr-4 cursor-pointer flex justify-between shadow bg-yellow-100 relative pl-2 rounded z-20`
    const hiddenListDivStyle = `list-none pl-10  translate-y-[-15rem] h-0`
    const hiddenListStyle = `p-2 hover cursor-pointer hover:bg-yellow-200 h-10 rounded  `
    return (
        <div className="w-[40rem] h-[80vh] sm:h-[100vh] bg-yellow-100 shadow p-4 overflow-auto ">
            <div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="pb-4">Select City or Division</h3>
                        <p>Divisions</p>
                    </div>
                    <div onClick={() => { locationSellector('hidden') }} className="flex justify-center items-center  cursor-pointer w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
                        <div className="bg-gray-400 w-0.5 h-6 rounded-full rotate-45 "></div>
                        <div className="bg-gray-400 w-0.5 h-6 rounded-full rotate-[-45deg] mt-[-1px] "></div>
                    </div>
                </div>
                <hr />
                <div id="dhaka" className={divitionMaindiv}  >
                    <div onClick={() => { toggleHiddenDiv('dhaka') }} className={divitionsStyle}>
                        <li>Dhaka</li>
                        <p>{`>`}</p>
                    </div>
                    <div id="dhakaHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Dhaka Division</li>
                        <li className={hiddenListStyle}>Gazipur</li>
                        <li className={hiddenListStyle}>Narayanganj</li>
                        <li className={hiddenListStyle}>Tangail</li>
                        <li className={hiddenListStyle}>Narsingdi</li>
                        <li className={hiddenListStyle}>Kishoreganj</li>
                    </div>
                </div>
                <hr />
                <div id="chottogram" className={divitionMaindiv}  >
                    <div onClick={() => { toggleHiddenDiv('chottogram') }} className={divitionsStyle}>
                        <li>Chattogram</li>
                        <p >{`>`}</p>
                    </div>
                    <div id="chottogramHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Chattogram Division</li>
                        <li className={hiddenListStyle}>Cumilla</li>
                        <li className={hiddenListStyle}>Noakhali</li>
                        <li className={hiddenListStyle}>Brahmanbaria</li>
                        <li className={hiddenListStyle}>Chandpur</li>
                        <li className={hiddenListStyle}>Feni</li>
                    </div>
                </div>
                <hr />
                <div id="rajshahi" className={divitionMaindiv}  >
                    <div onClick={() => { toggleHiddenDiv('rajshahi') }} className={divitionsStyle}>
                        <li>Rajshahi</li>
                        <p >{`>`}</p>
                    </div>
                    <div id="rajshahiHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Rajshahi Division</li>
                        <li className={hiddenListStyle}>Pabna</li>
                        <li className={hiddenListStyle}>Sirajganj</li>
                        <li className={hiddenListStyle}>Natore</li>
                        <li className={hiddenListStyle}>Naogaon</li>
                    </div>
                </div>
                <hr />
                <div id="khulna" className={divitionMaindiv} >
                    <div onClick={() => { toggleHiddenDiv('khulna') }} className={divitionsStyle}>
                        <li>Khulna</li>
                        <p >{`>`}</p>
                    </div>
                    <div id="khulnaHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Khulna Division</li>
                        <li className={hiddenListStyle}>Kustia</li>
                        <li className={hiddenListStyle}>Jashore</li>
                        <li className={hiddenListStyle}>Jhenaidah</li>
                        <li className={hiddenListStyle}>Satkhira</li>
                        <li className={hiddenListStyle}>Bagerhat</li>
                    </div>
                </div>
                <hr />
                <div id="sylhet" className={divitionMaindiv}  >
                    <div onClick={() => { toggleHiddenDiv('sylhet') }} className={divitionsStyle}>
                        <li>Sylhet</li>
                        <p>{`>`}</p>
                    </div>
                    <div id="sylhetHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Sylhet Division</li>
                        <li className={hiddenListStyle}>Habiganj</li>
                        <li className={hiddenListStyle}>Maulavi Bazar</li>
                        <li className={hiddenListStyle}>Sunamganj</li>
                        <li className={hiddenListStyle}>Sreemangal</li>
                        <li className={hiddenListStyle}>Borolekha</li>
                    </div>
                </div>
                <hr />
                <div id="borishal" className={divitionMaindiv} >
                    <div onClick={() => { toggleHiddenDiv('borishal') }} className={divitionsStyle}>
                        <li>Barishal</li>
                        <p >{`>`}</p>
                    </div>
                    <div id="borishalHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Barishal Division</li>
                        <li className={hiddenListStyle}>Patuakhali</li>
                        <li className={hiddenListStyle}>Bhola</li>
                        <li className={hiddenListStyle}>Barguna</li>
                        <li className={hiddenListStyle}>Pirojpur</li>
                        <li className={hiddenListStyle}>Jhalokati</li>
                    </div>
                </div>
                <hr />
                <div id="rangpur" className={divitionMaindiv}  >
                    <div onClick={() => { toggleHiddenDiv('rangpur') }} className={divitionsStyle}>
                        <li>Rangpur</li>
                        <p >{`>`}</p>
                    </div>
                    <div id="rangpurHiddenDiv" className={hiddenListDivStyle}>
                        <li className={hiddenListStyle}>All of Rangpur Division</li>
                        <li className={hiddenListStyle}>Dinajpur</li>
                        <li className={hiddenListStyle}>kurigram</li>
                        <li className={hiddenListStyle}>Gaibandha</li>
                        <li className={hiddenListStyle}>Saidpur</li>
                        <li className={hiddenListStyle}>Lalmonirhat</li>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
