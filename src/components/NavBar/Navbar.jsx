// import styles from './Navbar.module.css'
import { NavRoutes } from '../../ArrayOfData/NavBarArrays'
import Button from '../Button/Button'
import Logo from '/LexJohnLogo/LexJohnLogo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    
    function isActive(routes){
        return location.pathname === routes 
    }


  return (
    
        <nav className="w-screen bg-primary mx-auto flex h-[100px] justify-between items-center ">
            <div className='pl-36'>
                <img src={Logo} alt="" />    
            </div>
            <ul className='flex justify-center items-center pr-20'>
                {
                    NavRoutes.map((route, index)=> (
                        <li key={index}>
                            <Link   to={route.path} className={` ${isActive(route.path) ? "text-secondary" : "text-white"}  pr-20`}>
                                {route.label}
                            </Link>  
                        </li>
                        
                    ))
                }
                 <Button className='text-white'>Get in touch</Button>
            </ul>
           

        </nav>
    
  )
}

export default Navbar