import SearchBar from "../Common/SearchBar";

export default function HomeChatSideBar() {
    // This sidebar shows the recent chats and a preview of the last message

    return (

        <>
        
            <div className="w-1/3 h-screen p-0 flex flex-col ">

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
                    
                    </div>


                    {/**Div for chat cards */}

                    <div className="w-full h-11/12 bg-green-500 flex flex-col p-0">
                    
                    {/**Component for chat cards */}

                    


                    </div>



                </div>

            </div>

        </>
    )
}