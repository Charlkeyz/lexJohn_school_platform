// import styles from './Navbar.module.css'
import { NavRoutes } from '../../ArrayOfData/NavBarArrays'
import Button from '../Button/Button'
import Logo from '/LexJohnLogo/LexJohnLogo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    
    function isActive(route){
        return location.pathname === route 
    }


  return (
    
        <main className="w-screen bg-primary flex h-[114px] justify-between items-center ">
            <div className='pl-36'>
                <img src={Logo} alt="" />    
            </div>
            <ul className='flex justify-center items-center pr-40 '>
                {
                    NavRoutes.map((route, index)=> (
                        <li key={index}>
                            <Link   to={route.path} className={` ${isActive(route.path) ? "text-secondary" : "text-white"}  pr-20`}>
                                {route.label}
                            </Link>  
                        </li>
                        
                    ))
                }
                 <Button>Get in touch</Button>
            </ul>
           

        </main>
    
  )
}

export default Navbar