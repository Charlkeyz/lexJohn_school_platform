import { footerData } from "../../ArrayOfData/footerArray"
import Logo from '/LexJohnLogo/LexJohnLogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from "../Button/Button";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <main className="w-screen h-80 bg-primary flex justify-between items-center text-white relative top-11">
        <section className="pl-36 pb-24" >
            <img src={Logo} alt=""  />
            <div className="flex gap-5 pt-10" >
                <FaFacebookF className=" rounded bg-secondary" />
                <FaInstagram/>
                <FaLinkedinIn/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </section>

            <div className="flex gap-20 relative right-24">
                {
                    footerData.map((item, index)=> (
                        <div key={index}>
                            <h2>{item.header}</h2>
                            <ul className="pt-4">
                                {
                                    item.list.map((item, index)=> (
                                        <li key={index} className="pt-2">{item}</li>
                                    ))
                                }
                            </ul>
                            
                        </div>
                        
                    ))
                }
            </div>
            <div className="relative right-64 bottom-10">
                <h1 className="pb-5">Newsletter</h1>
                <p>Subscribe to our newsletter</p>
                <input type="text" placeholder="Your Email" className="w-72 h-11 p-5 rounded"/>
                <Button className="block relative top-10 left-44">Subscribe</Button>
            </div>
            
    </main>
            <div className="flex bg-primary text-white">
                <FaRegCopyright/> 2024 LEXICON Technologies. All rights reserved
            </div>
    </>
  )
}

export default Footer