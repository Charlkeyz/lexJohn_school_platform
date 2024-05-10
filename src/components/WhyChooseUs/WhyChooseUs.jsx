import { Service_WhyChooseUs } from "../../ArrayOfData/WhyChooseUs"
import tickerIcon from '/LexJohn_Images/homepages images/Iconsax.svg'



const WhyChooseUs = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-10">
        <h1 className="text-2xl font-semibold leading-10">Why Choose Us</h1>
        <ul className="flex flex-col gap-5 flex-wrap h-[264px]">
        {
            Service_WhyChooseUs.map((item, index)=> (
                <li key={index} className="flex gap-5 items-center">
                    <img src={tickerIcon} alt="" />
                    <span className="text-base text-text-color leading-6 font-normal">{item}</span>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default WhyChooseUs