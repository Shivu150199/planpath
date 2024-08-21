import React, { useState } from 'react'
import back from '../assets/pagination/leftArrow.svg'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {




  const navigate=useNavigate()
  const handleBack=()=>{
navigate(-1)
  }
  return (
    <div className='hidden md:flex items-center gap-4 my-2'>
        <button onClick={handleBack} className='flex items-center justify-center gap-2 border-[1px] px-2 border-primary rounded-[4px]'>
            <img src={back} alt="" />
            <span className='text-[12px] font-[500] text-primary'>back</span>
            
        </button>
        <div className="breadcrumbs text-sm">
  <ul>
    <li className='text-[12px]'><a>Home</a></li>
    <li className='text-[12px]'><a>Documents</a></li>
    <li className='text-[12px]'>Add Document</li>
  </ul>
</div>

    </div>
  )
}

export default Navigation