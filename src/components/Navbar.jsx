


import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const Navbar = ({ white, setWhite, buy ,setBuy}) => {
    const onClickHandler = (e) => {
    e.preventDefault();
    setBuy((prevBuy) => !prevBuy);
  };
  return (

    <div className={` w-full sticky top-0 z-50 flex justify-between items-center h-20 mx-auto backdrop-blur-md  ${white ? 'bg-white/70' : 'bg-black/50'}`}>

      <div className='w-full px-4 md:w-10/12  flex justify-between items-cente h-20 mx-auto mt-6 '>

        <a href="/" onClick={(e) => {
          e.preventDefault();
          setWhite(!white)
        }
        }
        
        >
          <img src={logo} alt="logo"  className="w-10 h-10 md:w-12 md:h-12" />

        </a>

        <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 '>
          <NavLink to="/">
            <button className={`${white ? 'text-black' : 'text-white'} text-sm md:text-lg flex items-center h-14  px-4 py-2 md:px-8 md:py-3`}>About Us</button>
          </NavLink>

          <NavLink to="/">
            <button className={`${white ? 'text-black' : 'text-white'} text-sm md:text-lg flex items-center h-14 md:px-8 md:py-3`}>Wallet</button>
          </NavLink>

          <NavLink to="/">
            <button className={`  ${buy ? 'border-b-2 ' : ''} ${white ? 'text-black' : 'text-white'} text-sm md:text-lg flex items-center h-14 px-8 py-3`}>Cart</button>
          </NavLink>

          <button onClick={onClickHandler} className={` ${buy ? 'hidden' : ''}  ${white ? 'text-white bg-black' : 'text-black bg-white'} h-14 px-4  md:px-8 md:py-3 text-sm md:text-lg  rounded flex items-center hover:bg-red-600`}>
            BUY
          </button>
        </div>



      </div>

    </div>
  )
}

export default Navbar
