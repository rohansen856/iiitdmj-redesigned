import { MoveDown } from "lucide-react"

export function CustomHeader() {
    return (
        <div>
            <div className="w-full h-2 bg-white"></div>
            <div className="h-36 w-screen bg-blue-700/70 flex justify-center items-start overflow-hidden">
                <div className="h-full flex justify-start items-end flex-col w-[500px] mt-2">
                    <p>PDPM</p>
                    <p>India Institute of Information Technology,</p>
                    <p>Design adnd Manufacturing, Jabalpur</p>
                </div>
                <div className="w-36 h-36 bg-white rounded-xl -mt-3 mx-2"></div>
                <div className="h-full flex justify-start items-start flex-col w-[500px] mt-2">
                    <p>PDPM</p>
                    <p>India Institute of Information Technology,</p>
                    <p>Design adnd Manufacturing, Jabalpur</p>
                </div>
            </div>
            <div className="w-full h-12 bg-blue-900 flex justify-around items-center lg:px-48 px-6 md:px-32 border-t border-white">
                <div className="relative cursor-pointer flex">
                    Home<MoveDown className="py-1" />
                    <div className="absolute bg-secondary top-10 left-0 rounded overflow-hidden duration-300 h-0">
                        <p className="w-48 p-2 m-1 bg-slate-700 rounded">About</p>
                    </div>
                </div>
                <div className="relative cursor-pointer flex">
                    Administration<MoveDown className="py-1" />
                    <div className="absolute bg-secondary top-10 left-0 rounded overflow-hidden duration-300 h-0">
                        <p className="w-56 p-2 m-2 mb-1 bg-slate-700 rounded">Board of Governors</p>
                        <p className="w-56 p-2 m-2 mb-1 bg-slate-700 rounded">Finance Committee</p>
                        <p className="w-56 p-2 m-2 mb-1 bg-slate-700 rounded">General Admistration</p>
                        <p className="w-56 p-2 m-2 mb-1 bg-slate-700 rounded">Other Adminstration</p>
                        <p className="w-56 p-2 m-2 mb-1 bg-slate-700 rounded">Senate</p>
                        <p className="w-56 p-2 m-2 bg-slate-700 rounded">Building Works Committee</p>
                        <p className="w-56 p-2 m-2 bg-slate-700 rounded">Adminstrative Structure</p>
                    </div>
                </div>
                <div className="relative cursor-pointer flex">
                    Department<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    Academics<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    Dean<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    People<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    Students<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    Facilities<MoveDown className="py-1" />

                </div>
                <div className="relative cursor-pointer flex">
                    Research<MoveDown className="py-1" />

                </div>
            </div>
        </div>
    )
}