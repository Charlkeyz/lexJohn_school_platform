// import styles from './Navbar.module.css'
import { NavRoutes } from '../../ArrayOfData/NavBarArrays'
import Button from '../Button/Button'
import Logo from '/LexJohnLogo/LexJohnLogo.png'

const Navbar = () => {
  return (
    
        <main className="w-screen bg-primary flex h-[114px] justify-between items-center ">
            <div className='pl-36'>
                <img src={Logo} alt="" />    
            </div>
            <ul className='flex justify-center items-center pr-40 '>
                {
                    NavRoutes.map((routes, index)=> (
                        <div key={index}>  
                                <li className='text-white pr-20'>{routes.label}</li>
                        </div>
                    ))
                }
                 <Button>Get in touch</Button>
            </ul>
           

        </main>
    
  )
}

export default Navbar