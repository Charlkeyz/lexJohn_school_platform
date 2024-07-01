// import styles from './Navbar.module.css'
<<<<<<< HEAD
import { NavRoutes } from '../../ArrayOfData/NavBarArrays'
import Button from '../Button/Button'
import Logo from '/LexJohnLogo/LexJohnLogo.png'
import { Link, useLocation } from 'react-router-dom'
import { VscThreeBars } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
=======
import React from "react";
import { NavRoutes } from "../../ArrayOfData/NavBarArrays";
import Button from "../Button/Button";
import Logo from "/LexJohnLogo/LexJohnLogo.png";
>>>>>>> target/main

const Navbar = () => {
    const location = useLocation()
    
    function isActive(routes){
        return location.pathname === routes 
    }
    const [isOpen, setIsOpen] = useState(false)

    const toggleBar = () => {
        setIsOpen(!isOpen)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }


  return (
<<<<<<< HEAD
    
        <nav 
            className={`w-screen bg-primary sm:flex sm:h-auto sm:w-full z-20 left-0 right-0 top-0 py-5 justify-between items-center overflow-hidden fixed`}>
            <div className='flex justify-between items-center w-screen' >
                <div className='sm:pl-36 pl-5'>
                    <img src={Logo} alt="" className='w-[100px]' />    
                </div>
                <div className='sm:hidden pr-5 overflow-hidden' onClick={toggleBar}>
                    {isOpen ? (
                        <GrClose  className={`text-white text-3xl ${isOpen ? "icon-transition": "icon-transition-close"}`}/>) : (
                        <VscThreeBars className={`text-white text-3xl ${!isOpen ? "icon-transition": "icon-transition-close"}`}/>

                    )}
                </div>
            </div>
            <ul className="sm:flex justify-between space-x-16 items-center pr-10 hidden">
                {
                    NavRoutes.map((route, index)=> (
                        <li key={index}>
                            <Link to={route.path} className={` ${isActive(route.path) ? "text-secondary" : "text-white"}  pr-20 md:pr-0`}>
                                {route.label}
                            </Link>  
                        </li>
                        
                    ))
                }
                 <Button className='text-white w-[100px] text-xs'>Get in touch</Button>
            </ul>
            {/* mobile view */}
            {isOpen ? 
            <ul className={`sm:hidden flex-col space-y-5 pl-7 pt-5  ${isOpen ? "menu-transition" : "menu-transition-close"}`}>
            {
                NavRoutes.map((route, index)=> (
                    <li key={index}>
                        <Link to={route.path} className={` ${isActive(route.path) ? "text-secondary" : "text-white"}`} onClick={closeMenu}>
                            {route.label}
                        </Link>  
                    </li>
                    
                ))
            }
             <Button className='text-white w-[100px] text-xs'>Get in touch</Button>
        </ul> : null }
           

        </nav>
    
  )
}

export default Navbar
=======
    <main className="w-screen bg-primary flex h-[114px] justify-between items-center ">
      <div className="pl-36">
        <img src={Logo} alt="" />
      </div>
      <ul className="flex justify-center items-center pr-40 ">
        {NavRoutes.map((routes, index) => (
          <div key={index}>
            <li className="text-white pr-20">{routes.label}</li>
          </div>
        ))}
        <Button>Get in touch</Button>
      </ul>
    </main>
  );
};

export default Navbar;
>>>>>>> target/main
