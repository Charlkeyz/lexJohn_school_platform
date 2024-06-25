/* eslint-disable react/prop-types */

import { ProductArray } from "../../ArrayOfData/productArray"
import tickerIcon from '/LexJohn_Images/homepages images/Iconsax.svg'
import Button from "../Button/Button"
import './Product.css'
import { motion} from "framer-motion"

const Products = ({ref, variants, initial, animate, transition}) => {
  return (
    
        <div className={`flex flex-col items-center pb-48`}>
            <div className="flex flex-col items-center sm:gap-5 relative sm:bottom-24 mt-10">
                <h1 className="text-2xl font-semibold leading-10">Our Products</h1>
                <p className="text-text-color font-normal sm:text-base text-sm leading-6">Discover our industry-leading software solutions</p>
            </div>
            <div className="sm:flex justify-between items-center gap-40 sm:space-y-0 space-y-20 mt-10">
                {
                    ProductArray.map((item, index)=> {
                        const {imgIcon, title, paragraph, heading, list} = item
                        return(
                            <motion.div
                                ref={ref}
                                variants={variants}
                                initial={initial}
                                animate={animate}
                                transition={transition}
                                 key={index} className="w-[331px] h-[417px] sm:border-none p-5 rounded-[4px] bg-white flex flex-col justify-center gap-5 border border-secondary">
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
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Products