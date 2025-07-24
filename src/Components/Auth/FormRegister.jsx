export function FormRegister() {
  return (
    <>
      <div className="w-1/4 h-5/6 bg-black/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-start border border-gray-700 shadow-[0_0_8px_1px_rgba(255,255,255,0.15)] p-6 space-y-4 text-white">

        {/* Title */}
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold tracking-wide">Create Account</h1>
        </div>

        {/* Inputs section */}
        <div className="w-full flex flex-col space-y-3">
          
          {/* Input group */}
          {[
            { label: "First name", type: "text", id: "firstname" },
            { label: "Last name", type: "text", id: "lastname" },
            { label: "Email", type: "email", id: "email" },
            { label: "Phone number", type: "number", id: "phone" },
            { label: "Password", type: "password", id: "password" },
          ].map(({ label, type, id }) => (
            <div key={id} className="flex flex-col gap-1">
              <label htmlFor={id} className="text-sm font-light">{label}</label>
              <input
                type={type}
                id={id}
                className="h-9 rounded-md bg-white text-black px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="w-full pt-2">
          <button className="w-full h-10 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold rounded-md shadow-sm">
            Create
          </button>
        </div>

      </div>
    </>
  );
}
