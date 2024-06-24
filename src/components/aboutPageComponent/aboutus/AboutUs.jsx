import Contact from "../../Contact/Contact";
// import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/footer";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
    serevices: "20 Remote Offices",
    image: "/images/Stack.png",
  },

  {
    serevices: "100+ Employees",
    image: "/images/Users.png",
  },

  {
    serevices: "1000+ Customers",
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
  const { ref: componentRef, inView: isVisible } = useInView();

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        ref={componentRef}
        className="w-screen flex flex-col mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {dummyData.map((items, index) => {
          return (
            <div
              key={index}
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
              </div>
              <img className="sm:w-[400px] my-10 p-5"  src={items.image} alt="" />
            </div>
          );
        })}
      </motion.div>
      <div className="sm:h-[400px] h-screen bg-tertiary">
        <div className=" sm:my-10">
          <h1 className="sm:text-3xl text-2xl pt-5 font-bold flex justify-center sm:relative top-10">
            LexJon By the Numbers
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-7">
          {lexjonData.map((items, index) => {
            return (
              <div
                key={index}
                className="h-[200px] w-[260px] bg-white text-1xl font-bold flex flex-col relative top-5"
              >
                <div className="px-20">
                  <img className="my-5" src={items.image} alt="" />
                </div>
                <div className="my-0">
                  <h3 className="w-100 px-14">{items.serevices}</h3>
                  <p className="px-20">{items.para}</p>
                </div>
              </div>
            );
          })}
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
              <div key={index}>
                <div>
                  <img className="" src={items.image} alt="" />
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
        <div className="flex justify-center items-center gap-12 mt-10 ">
          <Slider {...settings} className="w-[331px] sm:w-[1000px] h-[286px] overflow-hidden">
            {productsData.map((items, index) => {
              return (
                <div
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
