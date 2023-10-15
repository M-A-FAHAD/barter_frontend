
export default function PageNavigator() {
    return (
        <div className="w-full h-auto pt-4 pb-4 pr-6 pl-6">
            <div className="flex w-[100%] justify-between items-center">
                <div className=" rounded bg-gray-200 w-10 h-10 flex flex-col justify-center items-center rounded-full opacity-50 hover:opacity-80 cursor-pointer">
                    <div className="w-1 h-4 bg-black rounded rotate-45 mb-[-6px]"></div>
                    <div className="w-1 h-4 bg-black rounded rotate-[-45deg]"></div>
                </div>
                <div className="list-none flex ">
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">1</li>
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">2</li>
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">3</li>
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">4</li>
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">5</li>
                    <li className="w-6 cursor-pointer m-2 rounded-full flex justify-center items-center hover:bg-gray-100">...</li>
                </div>
                <div className=" rounded bg-gray-200 w-10 h-10 flex flex-col justify-center items-center rounded-full cursor-pointer opacity-50 hover:opacity-80">
                    <div className="w-1 h-4 bg-black rounded rotate-[-45deg] mb-[-6px]"></div>
                    <div className="w-1 h-4 bg-black rounded rotate-45"></div>
                </div>
            </div>
        </div>
    )
}
