
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Link, useNavigate } from 'react-router-dom'
import {footerlogo,signup} from '../../assets/authorization'
const SignupOrg = () => {
    const [formData,setFormData]=useState(null)
    const [error,setError]=useState(true)
const navigate=useNavigate()
    const handleSubmit=(e)=>{
      console.log('form sumitted')
      e.preventDefault()
      navigate('/success')
    }
    const handleChange=(e)=>{
  console.log('form data collected')
  setFormData({...formData,[e.target.id]:e.target.value})
    }
  
 
    console.log(formData)
  return (
    <section className='grid grid-cols-1 p-4 w-screen md:grid-cols-2'>
   
    <form className=' p-2 flex justify-center mt-10 ' onSubmit={handleSubmit}>
    <div className='flex flex-col gap-2 md:w-[80%] lg:w-[60%] w-full'>
    <div className='flex flex-col gap-1 mb-6'>
      <h2 className='text-2xl font-medium text-[#3F3E3E]'>Sign up with your orgnization</h2>
      <p className='text-sm font-medium text-dark_gray'>Create your own learning path </p>
    
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor="" className='font-medium text-[16px] text-[
    #3F3E3E] capitalize'>Enter your organization URL</label>
        <input className={`border-[1px] ${error?'border-red-600':'border-gray-300'} px-2 py-2 rounded-md`} type="email" id="email" placeholder='(ex: company.com or company.org)' onChange={handleChange} />
      </div>
   
    <button className='btn bg-primary text-white mt-6'>Continue</button>
 

   <p className=' text-center text-light_gray text-sm mt-2'>Back to <Link className='font-medium text-primary underline' to='/register'>Signup</Link> </p>
 
    
    
    
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

export default SignupOrg