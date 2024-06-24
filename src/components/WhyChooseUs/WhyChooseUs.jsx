import { Service_WhyChooseUs } from "../../ArrayOfData/WhyChooseUs"
import tickerIcon from '/LexJohn_Images/homepages images/Iconsax.svg'



const WhyChooseUs = () => {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center sm:mt-24 mt-20 gap-5">
        <h1 className="text-2xl font-bold leading-10 pl-5 sm:pl-0">Why Choose Us</h1>
        <ul className="flex flex-col sm:gap-5 gap-2  sm:flex-wrap sm:h-[264px] pl-4">
        {
            Service_WhyChooseUs.map((item, index)=> (
                <li key={index} className="flex sm:gap-4 gap-2 items-center">
                    <img src={tickerIcon} alt="" className="w-3 sm:w-4" />
                    <span className="sm:text-base text-[10px] text-text-color sm:leading-6 leading-0 font-normal">{item}</span>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default WhyChooseUs