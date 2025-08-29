import SearchBar from "../Common/SearchBar";
import Plus from "../svg/Plus";
import ChatCard from "./ChatCard";

export default function HomeChatSideBar() {
    // This sidebar shows the recent chats and a preview of the last message

    return (

        <>
        
            <div className="w-1/3 h-screen p-0 flex flex-col bg-white/15 backdrop-blur-xl border border-white/30">

                {/**Chats title div */}
                <div className="w-full h-1/12 flex items-center p-5">

                    <h1 className=" text-black text-2xl font-semibold">Chats</h1>


                </div>


                {/**Chats rows div */}
                <div className="w-full h-11/12 flex flex-col">
                
                    {/**Search bar div */}
                    <div className="w-full h-1/12 flex items-center pl-5">
                    

                        {/**Search bar component */}

                        <SearchBar />

                        <div className="w-1/5 h-4/5  flex items-center justify-center">
                        
                            <button className="border-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">


                                    <Plus />


                            </button>

                        </div>

                        <button>



                        </button>
                    
                    </div>


                    {/**Div for chat cards */}

                    <div className="w-full h-11/12 flex flex-col pt-5 gap-2.5">
                    
                    {/**Component for chat cards */}

                        {[...Array(4)].map((_, i) => (

                            <ChatCard key={i} />

                        ))}


                    </div>



                </div>

            </div>

        </>
    )
}