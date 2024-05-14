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
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/footer'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import Contact from '../../components/Contact/Contact'

const HomePage = () => {
    const {ref: componentRef, inView: isVisible} = useInView()
    
  return (
    <main>
        <Navbar/>
        <section className='flex flex-col justify-center items-center w-screen'>
            <motion.div 
                ref={componentRef} 
                className='flex justify-center gap-40 items-center w-[1200px] p-20'
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='flex flex-col w-[580.5px] gap-5'>
                    <h1 className='text-4xl font-bold leading-10 w-[486px]'>Transforming Digital Solutions for a Smarter Future</h1>
                    <p className='text-text-color leading-6 text-base'>
                        Leading the way of software development digital marketing, and digital education.
                        We create innovative solutions that empower businesses and educational institute
                    </p>
                    <Button className='w-[144px] text-white'>Get in Touch</Button>
                    <p className='text-text-color leading-6 text-base'>
                        Get in touch to learn how we can help your businesses or educational institution thrive. 
                    </p>
                </div>
                <img src={Image1} alt="" />
            </motion.div>
            <div className='w-screen h-[72px] bg-secondary flex justify-center items-center'>
                <p className='text-white text-base font-bold leading-6'> 1000+ customers in over 20 countries in africa grow their businesses with LEXJON Technologies</p>
            </div>
            <div ref={componentRef} 
                className='flex justify-center items-center w-[1200px] gap-10 p-20'>
                <img src={Image2} alt="" />
                <div className='flex flex-col w-[644px] gap-5'>
                    <h1 className='text-2xl font-semibold leading-10'>About LexJon</h1>
                    <p className='text-text-color leading-6 text-base'>LexJon is a premier IT firm specializing in innovative software development,
                        cutting-edge digital marketing and comprehensive digital education solutions.
                        Our mission is to deliver transformative technology solutions that thrive success
                        for businesses.
                    </p>
                    <p className='text-text-color leading-6 text-base'>
                        Get a Demo to learn about our premium software, 
                        or get started with our full suite of free tools and upgrade as you grow.
                    </p>
                    <div className='flex gap-8'>
                        <Button className='w-[139px] h-[48px] text-white text-base font-bold'>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary hover:bg-secondary hover:text-white'>
                            Get started for free
                        </Button>
                    </div>
                </div>
            </div>
            <div ref={componentRef} 
                className={`flex justify-between items-center gap-24 ${isVisible ? 'animate-fadeup' : ''}`}>

                {
                    ArraysOfSDE.map((item, index)=> (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <img src={item.img} alt="" />
                            <h1 className='text-2xl font-semibold leading-10'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
            <div ref={componentRef} className={`my-10 flex flex-col items-center gap-5 ${isVisible ? 'animate-fadeup' : ''}`}>
                <img src={FeaturedCourseImg} alt="" />
                <div className="flex flex-col gap-4">
                    <p className='text-text-color text-lg font-normal leading-6'>Our team of experts offer a range of services to meet up your IT needs. We specialize in:</p>
                    <p className='text-text-color text-lg font-normal leading-6'><span className='text-secondary'>Software Development: </span>Customs software solutions tailored to your business requirements</p>
                    <p className='text-text-color text-lg font-normal leading-6'><span className='text-secondary'>Digital Marketing: </span>Comprehensive digital marketing strategies to boost your brand visibility.</p>
                    <p className='text-text-color text-lg font-normal leading-6'><span className='text-secondary'>Digital Education: </span> Innovative educational software and platforms designed for effective learning</p>
                </div>
                    <div className='flex gap-8'>
                        <Button className='w-[139px] h-[48px] text-white text-base font-bold'>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary hover:bg-secondary hover:text-white'>
                            Get started for free
                        </Button>
                    </div>
            </div>

            <div ref={componentRef} className={`${isVisible ? 'animate-fadeup' : ''}`}>
                <Companies/>
            </div>

            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <img src={OvalBackground} alt="" className=" inset-0 w-full h-full object-cover" />
                <div className='absolute'><Products componentRef = {componentRef} isVisible = {isVisible}/></div>
            </div>
            <div ref={componentRef} className={`relative ${isVisible ? 'animate-fadeup' : ''}`}>
                <Testimonial title="Testimonials"/>  
            </div>
            <div className='w-screen h-[295px] '>
                <Contact/>
            </div>
        </section>
        <Footer/>
    </main>
  )
}

export default HomePage