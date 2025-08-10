import { useNavigate } from "react-router";
import { EndEncrypted } from "../../Components/svg/EndEncrypted";
import Fast from "../../Components/svg/Fast";
import Sync from "../../Components/svg/Sync";

export function HomePage() {

    const navigate = useNavigate();


    const goLogin = () => {

        navigate("auth/login");
    };

    return (
        <>
            <div className="w-full h-screen  flex p-0">

                <div className="w-1/2 h-screen  flex items-center justify-center pl-10">
                    <div className="w-full h-3/3  flex justify-center p-10  flex-col">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black font-['Madimi_One']">Connect. Share. Chat anywhere</h1>
                        <span className="mt-4 block text-lg sm:text-xl text-gray-600 font-normal max-w-xl">A modern, secure, and cross-platform messaging platform</span>
                        <button onClick={goLogin} className=" w-1/3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer mt-4.5">Start talking</button>
                        <div className="w-2/3 h-40 mt-3 gap-2.5 flex flex-col justify-center">
                            <div className="w-full h-8 flex items-center gap-1.5">

                                <EndEncrypted />
                                <span className="text-base text-gray-700 font-medium
">End to end encrypted</span>

                            </div>
                            <div className="w-full h-8 flex items-center gap-1.5">
                                <Sync />
                                <span className="text-base text-gray-700 font-medium
">Real-time synchronization with all your devices</span>
                            </div>
                            <div className="w-full h-8 flex items-center gap-1.5">
                                <Fast />
                                <span className="text-base text-gray-700 font-medium
">Fast, intuitive and secure</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-screen flex items-center justify-center">
                    <img className="h-3/4" src="src/assets/render_iphone.png" />
                </div>
            </div>
        </>
    )


}