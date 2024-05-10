
import { OurExpertiseArray } from "../../ArrayOfData/OurExpertiseArray"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const OurExpertise = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-3/4 m-auto">
        <div className="flex justify-center items-center mt-5">
            <Slider {...settings} className="w-[1350px] ">
            {
                OurExpertiseArray.map((item, index)=> {
                    const {img, body, name, arrow} = item
                    return(
                        <div key={index} className="w-[270px] h-[222px] pl-5 flex flex-col justify-center item-center gap-5 bg-white rounded-[10px] shadow-3xl">  
                            <div className="flex items-center gap-5">
                                <img src={img} alt="" className="w-[36px] h-[36px]" />
                                <h1 className="text-base leading-6 font-normal">{name}</h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-normal leading-6 text-text-color">{body}</p>
                                <p className="text-secondary flex gap-1 items-center text-xs font-bold leading-6">Learn More <img src={arrow} alt="" /></p>
                            </div>                              
                        </div>
                    )
                })
            }
        
            </Slider>
        </div>

    </div>
  )
}

export default OurExpertise