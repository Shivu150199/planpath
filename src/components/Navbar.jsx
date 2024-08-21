import React, { useState } from 'react'
import search from '../assets/search.svg'
import { Link } from 'react-router-dom'
import { Button, Drawer, Radio, Space } from 'antd';
import logo from '../assets/navbar/plan_path_logo.svg'
import cart from '../assets/navbar/cart.svg'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
 
  const showDrawerMenu = () => {
    setOpenMenu(true);
  };
  const onCloseMenu = () => {
    setOpenMenu(false);
  };
 
 
  return (
<div className="navbar px-4 sticky top-0 bg-white shadow-md z-10 flex gap-4 items-center justify-between">
 <div className='flex items-center'>
 <div className=" md:hidden">
    <button className="btn btn-square btn-ghost" onClick={showDrawerMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <Link className="" to='/'>
  <img src={logo} alt="" />
  </Link>
 </div>


    <div className=' bg-[#f4f4f4] gap-2 items-center rounded-[8px] px-4 pl-2 w-96 hidden lg:flex'>
      <select name="" id="" className='bg-transparent p-2 border-r-[1px] border-[#525252] outline-none'>
        <option value="">All</option>
        <option value="">All</option>
        <option value="">All</option>
        <option value="">All</option>
      </select>
    <input type="search" placeholder='Search Course' className='bg-transparent outline-none w-full' />
    <button>
    <img src={search} alt="" className='w-[20px] h-[20px]'/>

    </button>
    </div>

  <div className="">
    <Link to='/cart' className='flex  relative p-2 md:hidden'>
        <img src={cart} alt="" />
        <span className='flex items-center justify-center text-white w-6 h-6 rounded-full absolute top-[-8px] right-[-8px] bg-red-600 border-2 border-white'>0</span>
    </Link>
<div className='items-center justify-center gap-8 hidden md:flex'>
    <ul className='flex gap-8 items-center'>
        <li className='font-medium text-sm'><Link to="/course">Courses</Link></li>
        <li className='font-medium text-sm'><a href="">Pricing</a></li>
        <li>
        <Link to='/cart' className='flex relative p-2'>
        <img src={cart} alt="cart" />
        <span className='flex items-center justify-center text-white w-6 h-6 rounded-full absolute top-[-8px] right-[-8px] bg-red-600 border-2 border-white'>0</span>
    </Link>
        </li>
      
    </ul>
    <div className='flex items-start justify-center gap-4'>
    <Link to='/login' className="border-primary border-[1px] px-2 py-1 rounded font-medium text-primary capitalize text-sm">Sign in </Link>
    <Link to='/register' className="bg-primary border-primary border-[1px] px-2 py-1 rounded font-medium text-sm text-white capitalize hidden md:block">Sign up</Link>
    </div>
</div>


  </div>
  <Drawer
        title="Drawer"
        width='100%'
        placement='left'
        closable={true}
        onClose={onCloseMenu}
        open={openMenu}
      
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
 
</div>
  )
}

export default Navbar