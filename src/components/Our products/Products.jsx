/* eslint-disable react/prop-types */

import { ProductArray } from "../../ArrayOfData/productArray"
import tickerIcon from '/LexJohn_Images/homepages images/Iconsax.svg'
import Button from "../Button/Button"
import './Product.css'
const Products = ({isVisible, componentRef}) => {
  return (
    
        <div ref={componentRef} className={`flex flex-col items-center pb-48 ${isVisible ? 'animate-fadeup' : ''}`}>
            <div className="flex flex-col items-center gap-5 relative bottom-24">
                <h1 className="text-2xl font-semibold leading-10">Our Products</h1>
                <p className="text-text-color font-normal text-base leading-6">Discover our industry-leading software solutions</p>
            </div>
            <div className="flex justify-between items-center gap-40 ">
                {
                    ProductArray.map((item, index)=> {
                        const {imgIcon, title, paragraph, heading, list} = item
                        return(
                            <div key={index} className="w-[331px] h-[417px] p-5 rounded-[4px] bg-white flex flex-col justify-center gap-5">
                                <div className="flex justify-center items-center gap-3">
                                    <img src={imgIcon} alt="" />
                                    <h1 className="text-sm font-meduim leading-6">{title}</h1>
                                </div>
                                <p className="text-xs text-text-color font-normal leading-6">{paragraph}</p>
                                <div className="w-[266] border-t-[0.75px] border-text-color"></div>
                                <div className="flex flex-col justify-center px-5">
                                    <h1 className="text-sm font-meduim leading-6 py-3">{heading}</h1>
                                    <ul className="flex flex-col gap-2 justify-center">
                                        {
                                            list.map((item, index)=> (
                                                <li key={index} className="flex gap-3 ">
                                                    <img src={tickerIcon} alt="" />
                                                    <span className="text-xs text-text-color font-normal leading-6">{item}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <Button className="text-base font-bold text-white leading-6"> Learn More</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Products