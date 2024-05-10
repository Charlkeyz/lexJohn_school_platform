import { footerData } from "../../ArrayOfData/footerArray";
import Logo from "/LexJohnLogo/LexJohnLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from "../Button/Button";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="w-screen bg-primary">
      <div className="w-full h-80 flex justify-center items-center text-white">
        <section className="pl-30 pb-24">
          <img src={Logo} alt="" />
          <div className="flex gap-5 pt-10">
            <span className="w-[34.5px] h-[34.5px] pt-10.5 gap-7.5 rounded-[4px] bg-socialIcon flex justify-center items-center">
              <FaFacebookF />
            </span>
            <span className="w-[34.5px] h-[34.5px] pt-10.5 gap-7.5 rounded-[4px] bg-socialIcon flex justify-center items-center">
              <FaInstagram />
            </span>
            <span className="w-[34.5px] h-[34.5px] pt-10.5 gap-7.5 rounded-[4px] bg-socialIcon flex justify-center items-center">
              <FaLinkedinIn />
            </span>
            <span className="w-[34.5px] h-[34.5px] pt-10.5 gap-7.5 rounded-[4px] bg-socialIcon flex justify-center items-center">
              <FaTwitter />
            </span>
            <span className="w-[34.5px] h-[34.5px] pt-10.5 gap-7.5 rounded-[4px] bg-socialIcon flex justify-center items-center">
              <FaYoutube />
            </span>
          </div>
        </section>

        <div className="flex gap-20 relative left-10">
          {footerData.map((item, index) => (
            <div key={index}>
              <h2>{item.header}</h2>
              <ul className="pt-4">
                {item.list.map((item, index) => (
                  <li key={index} className="pt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative left-20 bottom-10">
          <h1 className="pb-5">Newsletter</h1>
          <p>Subscribe to our newsletter</p>
          <input
            type="text"
            placeholder="Your Email"
            className="w-72 h-11 p-5 rounded"
          />
          <Button className="block relative top-10 left-40">Subscribe</Button>
        </div>
      </div>
      <div className="flex bg-primary text-white justify-center p-5 items-center">
        <FaRegCopyright /> 2024 LEXICON Technologies. All rights reserved
      </div>
    </main>
  );
};

export default Footer;
