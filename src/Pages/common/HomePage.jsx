export function HomePage ()  {

    return (
        <>
        <div className="w-full h-screen bg-blue-200 flex p-0">

            <div className="w-1/2 h-screen bg-amber-300 flex items-center justify-center">
                <div className="w-full h-2/3 bg-green-300 flex justify-center p-10  flex-col">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black font-['Madimi_One']">Connect. Share. Chat anywhere</h1>
                    <span className="mt-4 block text-lg sm:text-xl text-gray-600 font-normal max-w-xl">A modern, secure, and cross-platform messaging platform</span>
                </div>
            </div>
            <div className="w-1/2 h-screen bg-amber-600"></div>
        </div>
        </>
    )


}