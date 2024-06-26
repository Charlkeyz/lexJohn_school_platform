/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import  './Home.css'
import Button from '../../components/Button/Button'
import Image1 from '/LexJohn_Images/homepages images/Images1.png'
import Image2 from '/LexJohn_Images/homepages images/images 2.png'
import { ArraysOfSDE } from '../../ArrayOfData/Software_Digital'
import OvalBackground from '/LexJohn_Images/homepages images/Oval.png'
import FeaturedCourseImg from '/LexJohn_Images/homepages images/Featured Courses.png'
import Companies from '../../components/6.3k trusted companies/companies'
import Products from '../../components/Our products/Products'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/footer'
import Contact from '../../components/Contact/Contact'
import { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
//    
   
    
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     
    });
  }, []);
    
    
  const viewportHeight = window.innerHeight;
  const middleOfViewport = viewportHeight;
  
    
  return (
    <main>
        {/* <Navbar/> */}
        <section className='sm:flex flex-col justify-center items-center w-screen mt-20 overflow-hidden'>
            <div className='sm:flex justify-center gap-40 items-center sm:p-20 w-screen' data-aos-offset={middleOfViewport}>
                   <div className='sm:flex flex-col sm:w-[580.5px] gap-5 mt-5 w-screen p-10'>
                    <h1 className='sm:text-4xl font-bold leading-10 sm:w-[486px] text-3xl' data-aos="fade-down">Transforming Digital Solutions for a Smarter Future</h1>
                    <p className='text-text-color leading-6 sm:text-base mt-3 text-sm'data-aos="fade-left">
                        Leading the way of software development digital marketing, and digital education.
                        We create innovative solutions that empower businesses and educational institute
                    </p>
                    <Button className='w-[144px] text-white mt-3'>Get in Touch</Button>
                    <p className='text-text-color leading-6 sm:text-base text-sm mt-3' data-aos="fade-left">
                        Get in touch to learn how we can help your businesses or educational institution thrive. 
                    </p>
                </div>
                <img src={Image1} alt="" className='p-5' data-aos="fade-up"/>
            </div>
            <div className='w-screen h-[72px] bg-secondary flex justify-center items-center mt-10'>
                <p className='text-white sm:text-base font-bold leading-6 text-sm p-3'> 1000+ customers in over 20 countries in africa grow their businesses with LEXJON Technologies</p>
            </div>
            <div className='sm:flex justify-center items-center sm:w-[1200px] gap-10 sm:p-20 p-5 w-screen mt-20'>
                <img src={Image2} alt="" data-aos="fade-right" data-aos-offset={middleOfViewport}/>
                <div className='flex flex-col sm:w-[644px] sm:gap-5 mt-5' >
                    <h1 className='text-2xl font-semibold leading-10' data-aos="fade-right" data-aos-offset={middleOfViewport}>About LexJon</h1>
                    <p className='text-text-color leading-6 sm:text-base text-sm' data-aos="fade-up" data-aos-offset={middleOfViewport}>LexJon is a premier IT firm specializing in innovative software development,
                        cutting-edge digital marketing and comprehensive digital education solutions.
                        Our mission is to deliver transformative technology solutions that thrive success
                        for businesses.
                    </p>
                    <p className='text-text-color leading-6 sm:text-base text-sm mt-2' data-aos="fade-down" data-aos-offset={middleOfViewport}>
                        Get a Demo to learn about our premium software, 
                        or get started with our full suite of free tools and upgrade as you grow.
                    </p>
                    <div className='flex sm:gap-8 gap-3 mt-5' >
                        <Button className='w-[139px] h-[48px] text-white text-base font-bold' data_aos="fade-right" data_aos_offset={middleOfViewport}>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary hover:bg-secondary hover:text-white'
                        data_aos="fade-left" data_aos_offset={middleOfViewport}>
                            Get started for free
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`flex justify-between items-center sm:gap-24 mt-10 overflow-hidden`} data-aos-offset={middleOfViewport} data-aos="fade-up">

                {
                    ArraysOfSDE.map((item, index)=> (
                        <div key={index} className='sm:flex flex-col justify-center items-center p-5'>
                            <img src={item.img} alt="" className='w-[50px]'/>
                            <h1 className='sm:text-2xl font-semibold sm:leading-10 text-sm'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
            <div className={`my-10 flex flex-col items-center gap-5 p-5 w-screen`} >
                <img src={FeaturedCourseImg} alt="" data-aos-offset={middleOfViewport} data-aos="fade-left" />
                <div className="flex flex-col gap-4" data-aos-offset={middleOfViewport} data-aos="fade-up">
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'>Our team of experts offer a range of services to meet up your IT needs. We specialize in:</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Software Development: </span>Customs software solutions tailored to your business requirements</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Digital Marketing: </span>Comprehensive digital marketing strategies to boost your brand visibility.</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Digital Education: </span> Innovative educational software and platforms designed for effective learning</p>
                </div>
                    <div className='flex sm:gap-5 gap-2 p-10'>
                        <Button className='w-[129px] h-[48px] text-white text-base font-bold' data_aos="fade-right" data_aos_offset={middleOfViewport}>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary
                         hover:bg-secondary hover:text-white' data_aos="fade-left" data_aos_offset={middleOfViewport}>
                            Get started for free
                        </Button>
                    </div>
            </div>

            <div className='my-10' data-aos-offset={middleOfViewport} data-aos="fade-right">
                <Companies/>
            </div>

            <div className="relative w-full h-full flex flex-col justify-center items-center" data-aos-offset={middleOfViewport} data-aos="fade-up" data-aos-delay="200" >
                <img src={OvalBackground} alt="" className="absolute sm:relative  inset-0 w-full h-full object-cover bottom-20" />
                <div  className='sm:absolute'data-aos="flip-left" data-aos-offset={middleOfViewport}>
                    <Products/>
                </div>
            </div>
            <div className="relative">
                <Testimonial title="Testimonials"/>  
            </div>
            <div className='w-screen h-[295px] mb-10 ' data-aos-offset={middleOfViewport} data-aos="fade-right" >
                <Contact/>
            </div>
        </section>
        <Footer/>
    </main>
  )
}

export default HomePage