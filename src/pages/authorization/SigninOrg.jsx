
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaRegEye } from "react-icons/fa";
// import signup from '../../assets/authorization/signup.svg'
import { Link, useNavigate } from 'react-router-dom'
import {footerlogo,googleIcon,signup,eye} from '../../assets/authorization'
// import {eye,facebookIcon,footerlogo,googleIcon,signup} from '../../assets/authorization'
const SigninOrg = () => {
  const [formData,setFormData]=useState(null)
  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    console.log('form sumitted')
    e.preventDefault()
    navigate('/login')
  }
  const handleChange=(e)=>{
console.log('form data collected')
setFormData({...formData,[e.target.id]:e.target.value})
  }

  const showPass=(e)=>{
    console.log('hello')
setShowPassword(!showPassword)
  }
  console.log(formData)
  return (
    <section className='grid grid-cols-1 p-4 w-screen md:grid-cols-2'>
   
    <form className=' p-2 flex justify-center mt-10 ' onSubmit={handleSubmit}>
    <div className='flex flex-col gap-4 md:w-[80%] lg:w-[60%] w-full'>
    <div className='flex flex-col gap-1 mb-6'>
      <h2 className='text-2xl font-medium text-[#3F3E3E]'>Log into your PlanPaths account</h2>
      <p className='text-sm font-medium text-dark_gray'>You already have a PlanPaths account, please 
      log in with your existing account information</p>
    
      </div>

<div className='flex flex-col gap-1 w-full'>
<label className='font-medium text-[16px] text-[#3F3E3E] capitalize' htmlFor="">Email</label>
<p className='text-light_gray font-normal text-sm'>akshaysingh@oki.com</p>
</div>



      <div className='flex flex-col gap-1 w-full'>
    <label className='font-medium text-[16px] text-[#3F3E3E] capitalize' htmlFor="">password</label>
    
<div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
    <input className='border-none outline-none bg-transparent w-full' type={showPassword?"text":"password"} id="password" placeholder='Enter password' onChange={handleChange}/>
<button onClick={showPass} type='button'>
{showPassword?<FaRegEye />:<img src={eye} alt="" />}
</button>
</div>
<Link to='/forgot-password' className='font-normal text-sm text-primary'>Forgot Password?</Link>
</div>




<div className='w-full grid grid-cols-2 gap-1'>

    <button className='btn bg-light_gray text-white mt-6'>Continue</button>
    <button type='button' className='btn bg-primary text-white mt-6'>Cancel</button>

</div>




   
   
 
   {/* <p>Back to <Link to=''>Login</Link></p> */}
   <p className=' text-light_gray text-sm mt-2 font-normal'>By clicking “Continue”, you agree to our Terms of services & Use and acknowledge that you have read our Privacy Policy.
</p>
   <p className=' text-light_gray text-sm my-2'>
By joining you agree to your company following your progress and other activity in learning Program.</p>
 
    
    
    
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

export default SigninOrg