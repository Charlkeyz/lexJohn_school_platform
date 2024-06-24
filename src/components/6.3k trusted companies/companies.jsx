/* eslint-disable react/prop-types */
import { ArrayOfLogos } from '../../ArrayOfData/ArrayLogos'
import './companies.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Companies = ({className, text_white}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`sm:flex items-center justify-center sm:gap-24 ${className} overflow-hidden`}>
               <div className='sm:w-[318px] sm:h-[130px] sm:mb-20 sm:p-0 p-7'>
                    <h1 className='text-2xl font-semibold leading-10 py-5 '>6.3k trusted companies</h1>
                    <p className={`text-xs font-normal text-text-color leading-6 ${text_white}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias tenetur debitis illum nulla. Ea illum nisi asperiores laboriosam molestias sit. Perferendis dolor tempore accusamus ducimus et quasi nesciunt quo!</p>
               </div>
               <div className='flex justify-center items-center gap-10 overflow-hidden'>
                  <Slider {...settings} className=" sm:w-[700px] w-screen">
                    {
                        ArrayOfLogos.map((item, index)=> (
                            <div key={index} className='w-[150px] h-[75px] flex items-center shadow-lg bg-white z-10 '>
                                <img src={item.img} alt="" className='relative inset-[22%] w-[100px]' />
                            </div>
                        ))
                    }
                  </Slider>
               </div> 
    </div>
  )
}

export default Companies