import Contact from "../../Contact/Contact";
// import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/footer";
import Button from "../../Button/Button";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
// import useAnimateOnView from "../../useAnimationOnView";


const dummyData = [
  {
    id: 1,
    head: "About Us",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: "/LexJohnLogo/Image.png",
  },
  {
    id: 2,
    head: "Our Mission",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: "/images/Image.png",
  },
  {
    id: 3,
    head: "Our Story",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: "/images/Image.png",
  },
];

const lexjonData = [
  {
    services: "Remote Offices",
    figures: 20,
    image: "/images/Stack.png",
  },

  {
    services: "Employees",
    figures: 100,
    image: "/images/Users.png",
  },

  {
    services: "Customers",
    figures: 1000,
    para: "Worldwide",
    image: "/images/GlobeHemisphereWest.png",
  },
];

const ourTeamData = [
  {
    names: "James Adebayo",
    position: "CEO & Co-Founder",
    image: "/images/fixed-height sec-.png",
  },
  {
    names: "Jonathan Smith",
    position: "Ass. CEO & Head of Operations",
    image: "/images/user-cover-2.png",
  },
  {
    names: "Fatimah Abdullahi",
    position: "Human Resource Manager",
    image: "/images/user-cover-4.png",
  },
  {
    names: "Ngozi Adeleke",
    position: "Customer Service Manager",
    image: "/images/user-cover-4.png",
  },
];

const productsData = [
  {
    paragraph:
      "Streamline school administration with our all-in-one management system.",
    system: "School Management System",
    button: "Learn More",
  },

  {
    paragraph: "Simplify exam scheduling, administration, and grading",
    system: "Exams Management System",
    button: "Learn More",
  },

  {
    paragraph: "Track and manage attendance effortlessly to monitor complaince",
    system: "Attendance Management System",
    button: "Learn More",
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 1,
  cssEase: "linear",
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


const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     
    });
  }, []);

  const viewportHeight = window.innerHeight;
  const middleOfViewport = viewportHeight / 2;

  const [counterOn, setCounterOn] = useState(false)

  const handleCounterOn = () => {
    setCounterOn(true)
  }
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-screen flex flex-col mt-20">
  
        {dummyData.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-offset={middleOfViewport}
              className={`flex ${
                index === 1 ? "sm:flex-row-reverse" : "sm:flex-row flex-col"
              } justify-center items-center sm:flex-row flex-col sm:gap-40 ${
                index === 0 ? "bg-tertiary" : ""
              }`}
            >
              <div className="text-center sm:text-left">
                <h2
                  className={`${
                    index === 0
                      ? " text-2xl font-bold my-5"
                      : "text-2xl font-bold my-5"
                  }`}
                >
                  {items.head}
                </h2>
                <p className="w-[360px] text-1xs text-text-color">
                  {items.content}
                </p>
              </div >
                <img data-aos="fade-right" data-aos-offset={middleOfViewport} className="sm:w-[400px] my-10 p-5"  src={items.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="sm:h-[500px]  bg-tertiary w-screen">
        <div className=" sm:my-10">
          <h1 data-aos="fade-left" className="sm:text-3xl text-2xl pt-5 font-bold flex justify-center pb-5">
            LexJon By the Numbers
          </h1>
        </div>
        <div className="flex justify-center items-center w-screen">
          <ScrollTrigger onEnter={handleCounterOn} onExit={() => setCounterOn(false)} className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-5">
                {lexjonData.map((items, index) => {
                  return (
                    <div
                      key={index}
                      // data-aos="fade-right"
                      data-aos-offset={middleOfViewport}
                      className="h-[309px] w-[253px] bg-white text-1xl gap-2 font-bold flex flex-col justify-center items-center"
                    >
                      <div
                        className="">
                        <img className="" src={items.image} alt="" />
                      </div>
                      <div className="my-0">
                        <h3 className="w-100 flex justify-center items-center">
                          {counterOn && <CountUp start={0} end={items.figures} duration={4} delay={0}/>}
                          <span className="pr-1">+</span>
                          {items.services}
                        </h3>
                        <p className="px-20">{items.para}</p>
                      </div>
                    </div>
                  );
                })}
          </ScrollTrigger>
        </div>
      </div>
      <div>
        <div className="flex  flex-col justify-center items-center">
          <h3 className="text-2xl font-bold my-5">Our Team</h3>
          <p className="text-1xs text-text-color my-[-12px]">
            Meet the leaders driving LexJon success
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 my-10">
          {ourTeamData.map((items, index) => {
            return (
              <div key={index} >
                <div data-aos="fade-up" data-aos-offset={middleOfViewport}>
                  <img src={items.image} alt="" />
                </div>
                <div className="shadow-xl">
                  <h3 className="text-1xl font-bold flex justify-center items-center my-4">
                    {items.names}
                  </h3>
                  <p className="text-xs font-medium text-text-color flex justify-center items-center relative bottom-2">
                    {items.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div>
          <div className="w-[10px] border-[0.75px] bg-yellow"></div>
        </div> */}
      </div>
      <Contact className="mb-10"/>
      <div className="h-[400px] bg-primary">
        <div className=" my-10 pt-5">
          <h1 className="text-1xl text-white font-medium flex justify-center">
            LexJon Products
          </h1>
          <p className="text-xs text-white flex justify-center my-2 ">
            Discover our industry-leading software solutions
          </p>
        </div>
        <div data-aos="fade-up" className="flex justify-center items-center gap-12 mt-10 ">
          <Slider {...settings} className="w-[331px] sm:w-[1000px] h-[286px] overflow-hidden">
            {productsData.map((items, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-offset={middleOfViewport}
                  key={index}
                  className="h-[286px] w-[331px] bg-white flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center items-center p-10">
                        <div className="">
                          <h3 className="text-2xl font-bold leading-10">{items.system}</h3>
                        </div>
                        <div className="my-0">
                          <h3 className="text-[12px] text-text-color leading-6">
                            {items.paragraph}
                          </h3>
                          <div className="px-6"></div>
                        </div>

                        <Button className="w-[266px] h-[48px] text-white mt-5 flex items-center justify-center text-[14px]">
                          Learn More
                        </Button>
                      </div>
                  </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
