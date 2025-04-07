import React from 'react'
import FileUpload from '../components/FileUpload';
import Button from '../components/Button';

const Home = () => {
    const buttonNames = ['Button1', 'Button2', 'Button3', 'Button4'];
  return (
    <div className='w-full bg-[#1B1C1D] h-screen flex flex-col items-center'>
      <div className='flex gap-4 mt-10'>
        {
          buttonNames.map((btn, index) => (
            <Button key={index} name={btn} />
          ))
        }
      </div>
      <FileUpload/>
    </div>
  )
}

export default Home
