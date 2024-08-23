import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaRegEye } from "react-icons/fa";
// import signup from '../../assets/authorization/signup.svg'
import { Link, useNavigate } from 'react-router-dom'
import {eye,facebookIcon,footerlogo,googleIcon,signup} from '../../assets/authorization'


const Signin = () => {

  const [formData,setFormData]=useState(null)
  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    console.log('form sumitted')
    e.preventDefault()
 
    navigate('/')

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
   <section className='grid grid-cols-1 p-4 w-[100%] md:grid-cols-2'>

<form className=' p-2 flex justify-center' onSubmit={handleSubmit}>
<div className='flex flex-col gap-2 md:w-[80%] lg:w-[60%] w-[100%]'>
<div className='flex flex-col gap-1 mb-6'>
  <h2 className='text-2xl font-medium text-[#3F3E3E]'>Welcome Back</h2>
  <p className='text-sm font-medium text-dark_gray'>Create your own learning path </p>

  </div>
  <div className='flex flex-col gap-1 w-full'>
    <label htmlFor="" className='font-medium text-[16px] text-[
#3F3E3E] capitalize'>email ID</label>
    <input className='border-[1px] border-gray-300 px-2 py-2 rounded-md' type="email" id="email" placeholder='Enter your email ID' onChange={handleChange} />
  </div>
  <div className='flex flex-col gap-1 w-full'>
    <label className='font-medium text-[16px] text-[#3F3E3E] capitalize' htmlFor="">password</label>

<div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
    <input className='border-none outline-none bg-transparent w-full' type={showPassword?"text":"password"} id="password" placeholder='Enter password' onChange={handleChange}/>
<button onClick={showPass}>
{showPassword?<FaRegEye />:<img src={eye} alt="" />}
</button>
</div>
<Link to='/forgot-password' className='font-normal text-sm text-primary'>Forgot Password?</Link>
  </div>
  
<button className='btn bg-primary text-white'>Log in</button>

<div className="divider text-xs text-light_gray">OR</div>
<div className='flex gap-2 flex-col '>
  <button className=' border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'><img className='justify-start' src={googleIcon} alt="" loading='lazy' /> <span>Continue with google</span><span></span></button>
  <button className=' border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'><img className='justify-start' src={facebookIcon} alt="" loading='lazy' /> <span>Continue with Facebook</span><span></span></button>
</div>
<p className=' text-center text-light_gray text-sm mt-2'>New to plan paths ? <Link className='font-medium text-primary underline' to='/register'>Sign up</Link> </p>
<hr className='my-2' />
<Link to='/signin-organisation' className='text-center text-primary text-sm font-bold underline'>Log in with your organisation</Link>


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
{/* <Alert message='hello' bgColor='bg-red-700'/> */}
   </section>
  )
}

export default Signin