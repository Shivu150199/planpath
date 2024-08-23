
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaRegEye } from "react-icons/fa";
// import signup from '../../assets/authorization/signup.svg'
import { Link, useNavigate } from 'react-router-dom'
import {eye,facebookIcon,footerlogo,googleIcon,signup} from '../../assets/authorization'
const ForgotPassword = () => {
  const navigate=useNavigate()
    const [formData,setFormData]=useState(null)
    const [showPassword,setShowPassword]=useState(false)
    const handleSubmit=(e)=>{
      console.log('form sumitted')
      e.preventDefault()
      navigate('/success')
    }
    const handleChange=(e)=>{
  console.log('form data collected')
  setFormData({...formData,[e.target.id]:e.target.value})
    }

  return (
    <section className='grid grid-cols-1 p-4 w-[100%] md:grid-cols-2'>
   
    <form className=' p-2 flex justify-center mt-10 ' onSubmit={handleSubmit}>
    <div className='flex flex-col gap-2 md:w-[80%] lg:w-[60%] w-full'>
    <div className='flex flex-col gap-1 mb-6'>
      <h2 className='text-2xl font-medium text-[#3F3E3E]'>Forgot password</h2>
      <p className='text-sm font-medium text-[#3F3E3E] w-[90%]'>Enter the email address you use on PlanPaths. We'll send you a link to reset your password. </p>
    
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor="" className='font-medium text-[16px] text-[
    #3F3E3E] capitalize'>Email ID</label>
        <input className='border-[1px] border-gray-300 px-2 py-2 rounded-md outline-none' type="email" id="email" placeholder='Enter your email Id' onChange={handleChange} />
      </div>
   
    <button className='btn bg-primary text-white mt-6'>Submit</button>
 
   {/* <p>Back to <Link to=''>Login</Link></p> */}
  
    
    
    
    </div>
    
     
    </form >
    
        <div className='my-6 md:my-0 flex md:justify-start md:items-start justify-center'>
        <LazyLoadImage  src={signup}
        className='w-full'
      loading='lazy'
       
        alt="signup image"
        />
        </div>
    
    <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 md:hidden'>
    <img src={footerlogo} alt="" />
    <ul className='flex flex-col items-center justify-center gap-4'>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>About us</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>Privacy Policy</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'> contact us</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>Terms of services & Use</Link></li>
    </ul>
    
    </footer>
       </section>
  )
}

export default ForgotPassword