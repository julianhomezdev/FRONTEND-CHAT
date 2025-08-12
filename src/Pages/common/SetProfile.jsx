import { useState } from "react";
import { motion } from "framer-motion";
import RightRow from "../../Components/svg/RightRow";

export default function SetProfile() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const name = localStorage.getItem("Name");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-300 gap-2">
      <div className="w-1/2 h-1/16 rounded-4xl bg-white/15 backdrop-blur-xl border border-white/30 p-6 flex flex-col justify-center items-center">
        <h1 className="text-black text-2xl font-semibold">
          Welcome, {name}
        </h1>
      </div>

      <motion.div
        initial={{ scale: 0.9, borderRadius: "35%" }}
        animate={{ scale: 1, borderRadius: "2rem" }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="w-1/2 h-1/3 rounded-4xl bg-white/15 backdrop-blur-xl border border-white/30 p-6 flex flex-col"
      >
        <div className="w-full h-full flex ">
          <div className="w-2/8 h-full flex justify-center items-center">
            <label className="w-24 h-24 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer overflow-hidden shadow-lg">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-black/60 text-sm text-center px-2">
                  Upload
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="w-5/8 h-full flex justify-center items-center text-black">
            <input
              type="text"
              placeholder="Write a short description of you"
              className="flex-1 pl-6 pt-2 pb-2 rounded-4xl bg-white/20 border border-white/30 backdrop-blur-md text-black placeholder-black/60 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-1/8 h-full flex justify-center items-center">
            <button className="w-12 h-12 rounded-full bg-blue-500/30 border border-white/30 backdrop-blur-md shadow-lg text-white flex items-center justify-center active:scale-90 transition-transform duration-150 cursor-pointer">
              <RightRow />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
