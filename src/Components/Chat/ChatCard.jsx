export default function ChatCard() {

    // paramas
    // userPhoto, userName, lastMessage

    // This is the component for the chat cards with the main info of the user in the
    // sidebar chats
    return(

        <>
            
            <div className="w-full h-1/6 flex justify-center items-center 
                bg-white/10 backdrop-blur-xl 
                rounded-2xl ring-1 ring-white/20 shadow-lg cursor-pointer">

                <div className="w-11/12 h-11/12  flex items-center">
                
                    <div className="w-1/4 h-full  flex items-center justify-center">
                    
                        {/**Profile photo */}
                        <div className="w-2/4 h-2/3 rounded-full overflow-hidden flex items-center justify-center bg-blue-300">
                        


                        </div>

                    </div>


                    {/** chat info */}
                    <div className="w-3/4 h-full  flex items-center justify-left pl-6">
                    
                        <span className="text-1xl text-black font-bold">Julian Homez</span>
                    
                    </div>
                
                </div>

            </div>
        
        </>

    )
}