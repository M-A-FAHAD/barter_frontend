import Image from "next/image"
import dummyIMG from '../../../../../public/Icons/dummy.png'
import galaryIMG from '../../../../../public/Icons/galary.png'
export default function Chats() {
    return (
        <div className="flex w-full h-full rounded overflow-hidden border shadow-xl">
            <div className=" w-[60%] ">
                <div className="bg-green-300 h-[32px] p-1 flex items-center">
                    <Image className="w-6 rounded-full" src={dummyIMG} />
                    <h3 className="text-sm font-bold text-gray-700 pl-2">Mishal Ahamed FAHAD</h3>
                </div>
                <div className="bg-white h-[350px]">
                    <div className="w-full h-full  bg-yellow-100">
                        <p>chats</p>
                    </div>
                </div>
                <div className=" h-12  flex p-1 bg-gray-300">
                    <input type="text" placeholder="Write a message ..." className="h-full pl-4 w-full rounded outline-none" />
                    <section>
                        <label for="fileInput" className=" flex justify-center rounded  cursor-pointer">
                            <Image className="w-[50px] mt-[-2px]" src={galaryIMG} />
                        </label>
                        <input type="file" id="fileInput" name="file" accept="image/*" className="hidden"></input>
                    </section>
                </div>
            </div>


            <div className=" w-[40%] h-full overflow-x-auto scrollbar-hidden p-2 pt-0 border-l">
                <h2 className="text-center border-b pb-2 relative sticky top-0  bg-gray-100 w-[110%] ml-[-10px] font-bold bg-green-300">My Chats</h2>

                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10  rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>
                <div className="w-full h-[50px] rounded shadow border overflow-hidden flex items-center pl-1 mt-2">
                    <Image className="w-10 rounded-full" src={dummyIMG} />
                    <div className="pl-2">
                        <h3 className="font-bold text-gray-600 ">Chater Name</h3>
                        <p className="text-[12px] mt-[-5px] text-gray-400">Last message from him</p>
                        <p className="text-[8px] text-gray-500 mt-[-4px]">18 oct 11:35 am</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
