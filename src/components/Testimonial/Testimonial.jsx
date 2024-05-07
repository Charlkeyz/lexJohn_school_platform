import { Testimonials } from "../../ArrayOfData/Testimonial"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-3/4 m-auto">
        <h1 className="text-2xl font-semibold leading-10">Testimonial</h1>
        <div className="flex justify-center flex-wrap items-center mt-5">
            <Slider {...settings} className="w-[1350px]">
            
            {
                Testimonials.map((item, index)=> {
                    const {img, body, heading, name} = item
                    return(
                        <div key={index} className="w-[300px] h-[234px] p-7 flex  gap-10 bg-white rounded-[10px] shadow-3xl">
                            <div className="flex gap-5">
                                <img src={img} alt="" />
                                <div className="flex flex-col gap-3 ">
                                    <h1 className="text-2xl font-semibold leading-6">{name}</h1>
                                    <p className="text-xs font-normal leading-4">{heading}</p>
                                </div>
                            </div>
                            <p className="text-base font-normal leading-6 w-[342px] text-black mt-6">{body}</p>
                        </div>
                    )
                })
            }
            </Slider>
        
        </div>

    </div>
  )
}

export default Testimonial