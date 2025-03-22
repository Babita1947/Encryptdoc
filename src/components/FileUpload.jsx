import React from "react";
import { GoPlus } from "react-icons/go";
import { BiSolidSend } from "react-icons/bi";

function FileUpload() {
  return (
    <div className="w-[60%] rounded-lg bg-[#37383A] text-white h-20 mt-48 flex items-center px-4 border border-gray-600 hover:border-white">
      {/* Left Plus Icon */}
        <div className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white group">
           <GoPlus size={20} className="text-gray-400 transition group-hover:text-white" />
        </div>


      {/* Input Field */}
        <input type="text" placeholder="Type a message..." className="flex-1 mx-4 bg-transparent outline-none text-white placeholder-gray-400"
        />

      {/* Right Send Icon */}
       <div className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white hover:bg-white group">
           <BiSolidSend size={20} className="text-gray-400 transition group-hover:text-black" />
       </div>
    </div>
  );
}

export default FileUpload;
