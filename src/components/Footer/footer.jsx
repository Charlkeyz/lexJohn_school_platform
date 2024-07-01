import { footerData } from "../../ArrayOfData/footerArray";
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> target/main
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
<<<<<<< HEAD
    <main className="w-screen h-screen sm:h-fit bg-primary">
      <div className="w-screen sm:h-80 h-full flex flex-col sm:flex-row justify-center items-center text-white ">
        <section className="sm:pl-30 sm:pb-24 flex flex-col justify-center items-center mt-5">
          <img src={Logo} alt="" className="sm:w-fit w-40"/>
          <div className="flex gap-5 pt-10 ">
=======
    <main className=" bg-primary relative top-11">
      <div className="w-screen h-80 flex justify-between items-center text-white ">
        <section className="pl-36 pb-24">
          <img src={Logo} alt="" />
          <div className="flex gap-5 pt-10">
>>>>>>> target/main
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

<<<<<<< HEAD
        <div className="flex flex-wrap sm:gap-20 gap-12 sm:relative left-10 mt-5 sm:mt-0 text-sm pl-14 ">
          {footerData.map((item, index) => (
            <div key={index}>
              <h2 className="font-semibold">{item.header}</h2>
              <ul className="pt-4">
                {item.list.map((item, index) => (
                  <li key={index} className="sm:pt-2 sm:text-sm text-xs leading-5">
=======
        <div className="flex gap-20 relative right-24">
          {footerData.map((item, index) => (
            <div key={index}>
              <h2>{item.header}</h2>
              <ul className="pt-4">
                {item.list.map((item, index) => (
                  <li key={index} className="pt-2">
>>>>>>> target/main
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        <div className="sm:relative left-20 bottom-10 sm:mt-7 mt-4 ml-8 sm:ml-0 ">
          <h1 className="sm:pb-5 text-sm font-semibold">Newsletter</h1>
          <p className="text-sm mt-5 sm:mt-0">Subscribe to our newsletter</p>
=======
        <div className="relative right-64 bottom-10">
          <h1 className="pb-5">Newsletter</h1>
          <p>Subscribe to our newsletter</p>
>>>>>>> target/main
          <input
            type="text"
            placeholder="Your Email"
            className="w-72 h-11 p-5 rounded"
          />
<<<<<<< HEAD
          <Button className="block sm:relative top-10 left-40 mt-5 ">Subscribe</Button>
        </div>
      </div>
      <div className="flex bg-primary text-white justify-center p-5 items-center text-xs ">
=======
          <Button className="block relative top-10 left-44">Subscribe</Button>
        </div>
      </div>
      <div className="flex bg-primary text-white justify-center p-5 items-center">
>>>>>>> target/main
        <FaRegCopyright /> 2024 LEXICON Technologies. All rights reserved
      </div>
    </main>
  );
};

export default Footer;
