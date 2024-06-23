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
    <main className="w-screen h-screen sm:h-fit bg-primary">
      <div className="w-full sm:h-80 h-full flex flex-col sm:flex-row justify-center items-center text-white">
        <section className="sm:pl-30 sm:pb-24 flex flex-col justify-center items-center mt-10">
          <img src={Logo} alt="" className="sm:w-fit w-40"/>
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

        <div className="flex flex-wrap sm:gap-20 gap-12 sm:relative left-10 mt-10 sm:mt-0 text-sm pl-14">
          {footerData.map((item, index) => (
            <div key={index}>
              <h2 className="font-semibold">{item.header}</h2>
              <ul className="pt-4">
                {item.list.map((item, index) => (
                  <li key={index} className="sm:pt-2 sm:text-sm text-xs leading-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sm:relative left-20 bottom-10 sm:mt-7 mt-4 ml-5 sm:ml-0">
          <h1 className="sm:pb-5 text-sm font-semibold">Newsletter</h1>
          <p className="text-sm mt-3 sm:mt-0">Subscribe to our newsletter</p>
          <input
            type="text"
            placeholder="Your Email"
            className="w-72 h-11 p-5 rounded"
          />
          <Button className="block sm:relative top-10 left-40 mt-2 mb-5">Subscribe</Button>
        </div>
      </div>
      <div className="flex bg-primary text-white justify-center sm:p-5 items-center text-xs pt-5">
        <FaRegCopyright /> 2024 LEXICON Technologies. All rights reserved
      </div>
    </main>
  );
};

export default Footer;
