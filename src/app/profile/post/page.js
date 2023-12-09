'use client'
import { useState } from "react"
import Image from "next/image"
import dummyIMG from '../../../../public/Images/dummy/product.jpg'
import PriceTag from '../../../../public/Icons/price-tag.png'
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"


export default function page() {
    const [stepOne, setStepOne] = useState('left-[0%]')//0
    const [stepTwo, setStepTwo] = useState('left-[100%]')//100
    const [stepThree, setStepThree] = useState('left-[100%]')//100
    const [stepCount, setStepCount] = useState('w-1/3')
    const stepOneToStepTwo = () => {
        setStepOne('left-[-100%]')
        setStepTwo('left-[0%]')
        setStepCount('w-2/3')
    }
    const stepTwoToStepOne = () => {
        setStepOne('left-[0%]')
        setStepTwo('left-[100%]')
        setStepCount('w-1/3')
    }
    const stepTwoToStepthree = () => {
        setStepTwo('left-[-100%]')
        setStepThree('left-[0%]')
        setStepCount('w-full')
    }
    const stepThreeToStepTwo = () => {
        setStepThree('left-[100%]')
        setStepTwo('left-[0%]')
        setStepCount('w-2/3')
    }
    const categories = [
        'Mobiles',
        'Electronics',
        'Vehicles',
        'Home & Living',
        'Pets & Animals',
        'Property',
        "Women's Fashion & Beauty",
        "Men's Fashion & Grooming",
        'Hobbies, Sports & Kids',
        'Business & Industry',
        'Essentials',
        'Education',
        'Agriculture',
        'Services',
        'Jobs',
        'Overseas Jobs',
    ];
    //All post input datas there
    const [name, setName] = useState('')
    const productName = (e) => {
        setName(e.target.value)
    }
    const [title, setTitle] = useState('')
    const productTitle = (e) => {
        setTitle(e.target.value)
    }
    //sellect catagori
    const [selectedCategory, setSelectedCategory] = useState('');//This is sellected catagory
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    //description
    const [description, setDescription] = useState('')
    const inputedDescription = (e) => {
        setDescription(e.target.value)
    }
    //divition
    const divition = [
        'Dhaka',
        'Chattogram',
        'Rajshahi',
        'Khulna',
        'Sylhet',
        'Barishal',
        'Rangpur',
    ]
    const [selectDivition, setSelectDivition] = useState('')//This is sellected divisiton
    const handleDivitionChange = (event) => {
        setSelectDivition(event.target.value);
    }
    //cities
    const cities = [
        'All of Dhaka Divition',
        'Gazipur',
        'Narayanganj',
        'Tangail',
        'Narsingdi',
        'Kishoreganj',
        'All of Chattogram Divition',
        'Cumilla',
        'Noakhali',
        'Brahmanbaria',
        'Chandpur',
        'Feni',
        'All of Rajshahi Division',
        'Pabna',
        'Sirajganj',
        'Natore',
        'Naogaon',
        'All of Khulna Division',
        'Kusia',
        'Jashore',
        'Jhenaidah',
        'Satkhira',
        'Bagerhat',
        'All of Syllhet Division',
        'Habiganj',
        'Maulavi Bazar',
        'Sunamganj',
        'Sreemangal',
        'Borolekha',
        'All of Barishal Division',
        'Patuakhali',
        'Bhola',
        'Barguna',
        'Pirojpur',
        'Jhalokati',
        'All of Rangpur Division',
        'Dinajpur',
        'Kurigram',
        'Gaibandha',
        'Saidpur',
        'Lalmonirhat'
    ]
    const [selectCities, setSelectCities] = useState('')//This is selected Cities
    const handleCitiesChange = (event) => {
        setSelectCities(event.target.value)
    }
    const [image, setImage] = useState(dummyIMG)//This is selected Image
    const sellectedImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImage(reader.result)
        }
    }
    const [price, setPrice] = useState(999)
    const inputedPrice = (e) => {
        setPrice(e.target.value)
    }
    const [number, setNumber] = useState('')
    const inputedNumber = (e) => {
        const Number = e.target.value
        const NumberToString = Number.toString()
        setNumber(NumberToString)
    }
    //get owner id
    const ownerInfo = useSelector((state) => state.authentication)
    console.log('This is authenticate information:', ownerInfo)
    //const get the cookie 
    const productInformation = {
        name: name,
        title: title,
        category: selectedCategory,
        description: description,
        divition: selectDivition,
        city: selectCities,
        price: price,
        image: image,
        contact: number,
        owner: "fd5f4df45df4d54f5d"
        //!name || !title || !description || !division || !city || !price || !image || !owner || !category,
    }
    const [confirmPostBtn, setConfirmPostBtn] = useState(true)
    const [confirmPostLoading, setConfirmPostLoading] = useState(false)
    const [postConfirmation, setPostConfirmation] = useState(false)
    const confirmPost = () => {
        setConfirmPostBtn(false)
        setConfirmPostLoading(true)
        postApi()
    }
    const router = useRouter()
    //This is post api call
    const postApi = async () => {
        const req = await fetch("https://barter-backend.vercel.app/user/uploadpost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(productInformation)
        })
        const res2 = await req.json()
        if (res2.success) {
            setConfirmPostLoading(false)
            setPostConfirmation(true)
            setName('')
            setTitle('')
            setSelectedCategory('')
            setDescription('')
            setSelectDivition('')
            setSelectCities('')
            setPrice('')
            setImage(dummyIMG)
            setNumber('')
            //stapes back
            setStepOne('left-[0%]')
            setStepTwo('left-[100%]')
            setStepThree('left-[100%]')
            setStepCount('w-1/3')
            //confirmation buttons
            setConfirmPostLoading(false)
            setPostConfirmation(false)
            setConfirmPostBtn(true)
            //go to the profile
            router.push('/profile')
        } else if (res2.error) {
            console.log(productInformation)
            setConfirmPostBtn(true)
            setConfirmPostLoading(false)
            alert('Post failed:All fields are required')
        } else {
            setConfirmPostBtn(true)
            setConfirmPostLoading(false)
            alert('Post failed for some reason plz try again')
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center gifbackground-coverImage">
            <div className="w-[50rem] h-[30rem] shadow overflow-hidden rounded-lg border">
                <div className="w-full h-10 flex justify-center items-center bg-pink-800 text-white font-bold shadow-2xl text-2xl">
                    Post Add
                </div>
                <div className="flex border-b relative">
                    <div className="absolute w-full z-0 h-6 bg-gray-100">
                        <div className={`${stepCount} h-full bg-gradient-to-r from-transparent to-orange-500 transition-all duration-500 ease-in-out`}></div>
                    </div>
                    <div className="w-[17rem] text-center z-10 font-bold text-gray-500">Step:1</div>
                    <div className="w-[17rem] text-center z-10 font-bold text-gray-500">Step:2</div>
                    <div className="w-[17rem] text-center z-10 font-bold text-gray-500">Step:3</div>
                </div>

                <div className="w-[50rem] h-[26rem] flex relative ">
                    <div className={`w-[50rem] h-[26rem] flex flex-col justify-center items-center border-b absolute transition-all duration-500 ease-in-out ${stepOne}`}>
                        <input onChange={productName} className="bg-transparent border text-white rounded w-2/4 pl-2 text-center h-10 mb-4 font-bold" type="text" placeholder="Product Name" />
                        <input onChange={productTitle} className="bg-transparent border text-white rounded w-2/4 pl-2 text-center h-8 mb-2" type="text" placeholder="Product Title" />
                        <label className="text-gray-400 font-bold" for="mySelection">Choose a category:</label>
                        <select className="rounded h-10 bg-gray-200 mb-2 text-gray-700 font-bold focus:outline-none" value={selectedCategory} onChange={handleCategoryChange}>
                            <option className="opacity-[0.5]" value="">Select</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <textarea onChange={inputedDescription} className="w-2/4 p-1 h-24 mb-2 rounded bg-gray-200"></textarea>
                        <button onClick={stepOneToStepTwo} className="border p-1 w-28 rounded bg-orange-400 text-white font-bold hover:bg-orange-500">next</button>
                    </div>
                    <div className={`w-[50rem] h-[26rem] border-b absolute flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${stepTwo}`}>

                        <div className="flex mb-4">
                            <div className="w-64">
                                <select className="rounded h-12 p-2 bg-gray-200 mb-2 text-gray-700 w-full font-bold focus:outline-none" value={selectDivition} onChange={handleDivitionChange}>
                                    <option className="opacity-[0.5]" value="">Select Division</option>
                                    {divition.map((divition, index) => (
                                        <option key={index} value={divition}>
                                            {divition}
                                        </option>
                                    ))}
                                </select><br />
                                <select className="rounded h-12 p-2 bg-gray-200 mb-2 text-gray-700 w-full mb-2 font-bold focus:outline-none" value={selectCities} onChange={handleCitiesChange}>
                                    <option className="opacity-[0.5]" value="">Select Cities</option>
                                    {cities.map((cities, index) => (
                                        <option key={index} value={cities}>
                                            {cities}
                                        </option>
                                    ))}
                                </select><br />
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center h-[102px] mb-4 w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG (MAX. 100 KB)</p>
                                        </div>
                                        <input onChange={sellectedImage} id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                                <input onChange={inputedPrice} className="bg-transparent font-bold border rounded text-center w-full text-gray-200 focus:outline-none" type="number" placeholder="Price" />
                            </div>
                            <div className="ml-2">
                                <Image width={0} height={0} className="w-64 h-64 rounded" src={image} />
                            </div>
                        </div>
                        <div>
                            <button onClick={stepTwoToStepOne} className="border p-1 w-28 rounded bg-orange-400 hover:bg-orange-500 text-white font-bold mr-2">previous</button>
                            <button onClick={stepTwoToStepthree} className="border p-1 w-28 rounded bg-orange-400 hover:bg-orange-500 text-white font-bold">next</button>
                        </div>
                    </div>
                    <div className={`w-[50rem] h-[26rem] border-b flex flex-col justify-center items-center absolute transition-all duration-500 ease-in-out ${stepThree}`}>
                        <div>
                            <p className=" text-center h-10 bg-white w-[29.5rem] rounded font-bold text-lg mb-1 overflow-x-auto">{title}</p>
                        </div>
                        <div className="flex">
                            <div>
                                <Image width={0} height={0} className="w-64 h-64 rounded mb-2" src={image} />
                                <span className="list-none border w-full flex p-2 mb-1 shadow bg-white rounded">
                                    <Image className="w-6 mr-2" src={PriceTag} />
                                    <p className="font-bold pl-2 border-l ">{price}</p>
                                </span>
                            </div>
                            <div className="w-52 ml-2">
                                <span className="list-none border w-full flex h-10 p-2 mb-1 shadow bg-white rounded overflow-y-auto">
                                    {name}
                                </span>
                                <span className="list-none border w-full flex h-10 p-2 mb-1 shadow bg-white rounded overflow-y-auto">
                                    {selectedCategory}
                                </span>
                                <span className="list-none border h-11 w-full flex p-2 mb-2 shadow bg-white rounded overflow-y-auto">
                                    {`${selectDivition},${selectCities}`}
                                </span>
                                <p className="bg-white w-full  h-[118px] rounded p-1 overflow-x-auto"> {description}</p>
                                <label className="text-white font-bold text-xs ">If you want to:</label>
                                <input onChange={inputedNumber} className="w-full rounded pl-1" type="number" placeholder="+880" />
                            </div>
                        </div>
                        <div className="w-[30rem] pl-1 pr-1 flex">
                            <button onClick={stepThreeToStepTwo} className="border p-1 w-1/4 rounded bg-orange-400 hover:bg-orange-500 text-white font-bold mr-2">Edit</button>
                            {
                                confirmPostBtn &&
                                <button onClick={confirmPost} className="bg-blue-500 hover:bg-blue-600 w-3/4 text-white font-bold p-1 rounded border">Confirm Post</button>
                            }
                            {
                                confirmPostLoading &&
                                <button onClick={confirmPost} className="bg-blue-500 hover:bg-blue-600 w-3/4 text-white font-bold p-1 rounded border flex justify-center items-center">
                                    <div className="w-5 h-5 mr-1 rounded-full border-4  border-t-blue-400 animate-spin"></div>
                                    <div>please wait...</div>
                                </button>
                            }
                            {
                                postConfirmation &&
                                <button className="bg-blue-500 hover:bg-blue-600 w-3/4 text-white font-bold p-1 rounded border flex justify-center items-center">
                                    <svg className="pr-2 animate-pulse" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                        <linearGradient id="I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z" opacity=".05"></path><path d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z" opacity=".07"></path><path fill="#fff" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"></path>
                                    </svg>
                                    Posted successfully
                                </button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}