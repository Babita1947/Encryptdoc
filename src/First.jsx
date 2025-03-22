import React from 'react'
import Button from './components/Button';
import FileUpload from './components/FileUpload';

function First() {
  const buttonNames = ['Button1', 'Button2', 'Button3', 'Button4'];

  return (
    <div className='w-full bg-[#1B1C1D] h-screen flex flex-col items-center'>
      <div className='flex gap-4 mt-10'>
        {/* Loop through buttonNames and render Button component */}
        {
          buttonNames.map((btn, index) => (
            <Button key={index} name={btn} />
          ))
        }
      </div>
      <FileUpload/>
    </div>
  );
}

export default First;