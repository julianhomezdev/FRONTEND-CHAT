export function VerificationPage()  {


    
    return (
        <>

            <div className="w-full h-screen flex justify-center items-center">

                <div className=" w-1/3 h-2/3 flex flex-col justify-center items-center">

                    <h1 className="text-3xl font-bold text-center">Enter the verification code</h1>

                    <span>We sent you a verification code to your email</span>

                    <div className=" w-5/6 h-1/3 flex justify-center items-center gap-2.5">
                    
                        <input type="text" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        <input type="text" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        <input type="text" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        <input type="text" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    
                    </div>


                    <button className="w-1/3 h-1/14 bg-black text-white rounded-2xl">Verify</button>
                </div>


            </div>
           

        </>
    )
}