// import styles from './Navbar.module.css'
import { NavRoutes } from '../../ArrayOfData/NavBarArrays'
import Button from '../Button/Button'
import Logo from '/LexJohnLogo/LexJohnLogo.png'
import { Link, useLocation } from 'react-router-dom'
import { VscThreeBars } from "react-icons/vsc";
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation()
    
    function isActive(routes){
        return location.pathname === routes 
    }
    const [isOpen, setIsOpen] = useState(false)

    const toggleBar = () => {
        setIsOpen(!isOpen)
    }


  return (
    
        <nav 
            className="w-screen bg-primary flex h-[100px] justify-between items-center 
            md:flex-col md:justify-normal md:items-start md:pt-5  ">
            <div className='md:flex md:justify-between md:items-center md:w-full md:px-5'>
                <div className='pl-36 md:pl-0'>
                    <img src={Logo} alt="" className='w-[100px]' />    
                </div>
                <div className='md:flex md:justify-center md:items-center hidden' onClick={toggleBar}>
                    <VscThreeBars className='text-white text-3xl '/>
                </div>
            </div>
            <ul className={`flex justify-center items-center pr-10
                 md:flex-col md:pr-0 md:gap-10 md:mt-5 md:bg-primary md:w-screen md:${isOpen ? "flex" : "hidden"} md:relative top-auto left-auto transition-all duration-300 ease-in-out`}>
                {
                    NavRoutes.map((route, index)=> (
                        <li key={index}>
                            <Link to={route.path} className={` ${isActive(route.path) ? "text-secondary" : "text-white"}  pr-20 md:pr-0`}>
                                {route.label}
                            </Link>  
                        </li>
                        
                    ))
                }
                 <Button className='text-white md:text-xs md:ml-3'>Get in touch</Button>
            </ul>
           

        </nav>
    
  )
}

export default Navbar