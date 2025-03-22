import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { BiSolidSend } from "react-icons/bi";
import SelectedFile from "./SelectedFile";

function FileUpload() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  // Function to trigger file selection
  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  // Function to update selected file
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]); // Store the file object
    }
  };

  console.log("Selected File:", file);

  return (
    <div className="w-[60%] rounded-lg bg-[#37383A] text-white h-40 mt-48 flex items-center px-4 border border-gray-600 hover:border-white">
      {/* Left Plus Icon (Triggers File Selection) */}
      <div
        className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white group"
        onClick={handleSelectFile}
      >
        <GoPlus size={20} className="text-gray-400 transition group-hover:text-white" />
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
        onChange={handleFileChange}
      />

      {/* Show File Preview */}
      {file && <SelectedFile file={file} />}

      {/* Input Field */}
      <input 
        disabled={!file}
        type="text" 
        placeholder="Type a message..." 
        className="flex-1 mx-4 bg-transparent outline-none text-white placeholder-gray-400"
      />

      {/* Right Send Icon */}
      <div className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-[#37383A] rounded-full cursor-pointer transition hover:border-white hover:bg-white group">
        <BiSolidSend size={20} className="text-gray-400 transition group-hover:text-black" />
      </div>
    </div>
  );
}

export default FileUpload;
