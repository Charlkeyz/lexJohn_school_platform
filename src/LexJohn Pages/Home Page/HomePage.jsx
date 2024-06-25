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
// import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/footer'
// import { useInView } from "react-intersection-observer";
import { motion} from "framer-motion"
import Contact from '../../components/Contact/Contact'
import useAnimateOnView from '../../components/useAnimationOnView'
// import { useEffect, useRef } from 'react'

const HomePage = () => {
//    const animationOption = {triggerOnce: true}
   const {ref: ref1, mainControls: mainControls1} = useAnimateOnView()
   const {ref: ref2, mainControls: mainControls2} = useAnimateOnView()
   const {ref: ref3, mainControls: mainControls3} = useAnimateOnView()
   const {ref: ref4, mainControls: mainControls4} = useAnimateOnView()
   const {ref: ref5, mainControls: mainControls5} = useAnimateOnView()
   const {ref: ref6, mainControls: mainControls6} = useAnimateOnView()
   const {ref: ref7, mainControls: mainControls7} = useAnimateOnView()
   const {ref: ref8, mainControls: mainControls8} = useAnimateOnView()


    
    
    
    
    // const {innerWidth: Width} = window
    // const ref = useRef(null)
    // const isInView = useInView(ref)
    // console.log(ref, "signal me")
    
    // const mainControls = useAnimation()
    // useEffect(()=> {
    //     if(isInView){
    //         mainControls.start("visible")
    //     }
    // },[isInView])
    
    
  return (
    <main>
        {/* <Navbar/> */}
        <section className='sm:flex flex-col justify-center items-center w-screen mt-20 overflow-hidden'>
            <motion.div
                ref={ref1} 
                className='sm:flex justify-center gap-40 items-center sm:p-20 w-screen'
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                initial="hidden"
                animate={mainControls1}
                transition={{ duration: 0.8, delay: 0.15 }}>
                <div className='sm:flex flex-col sm:w-[580.5px] gap-5 mt-5 w-screen p-10'>
                    <h1 className='sm:text-4xl font-bold leading-10 sm:w-[486px] text-3xl'>Transforming Digital Solutions for a Smarter Future</h1>
                    <p className='text-text-color leading-6 sm:text-base mt-3 text-sm'>
                        Leading the way of software development digital marketing, and digital education.
                        We create innovative solutions that empower businesses and educational institute
                    </p>
                    <Button className='w-[144px] text-white mt-3'>Get in Touch</Button>
                    <p className='text-text-color leading-6 sm:text-base text-sm mt-3'>
                        Get in touch to learn how we can help your businesses or educational institution thrive. 
                    </p>
                </div>
                <img src={Image1} alt="" className='p-5'/>
            </motion.div>
            <div className='w-screen h-[72px] bg-secondary flex justify-center items-center mt-10'>
                <p className='text-white sm:text-base font-bold leading-6 text-sm p-3'> 1000+ customers in over 20 countries in africa grow their businesses with LEXJON Technologies</p>
            </div>
            <motion.div
                ref={ref2}
                className='sm:flex justify-center items-center sm:w-[1200px] gap-10 sm:p-20 p-5 w-screen mt-20'
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                initial="hidden"
                animate={mainControls2}
                transition={{ duration: 0.8, delay: 0.35 }}>
                <img src={Image2} alt="" />
                <div className='flex flex-col sm:w-[644px] sm:gap-5 mt-5'>
                    <h1 className='text-2xl font-semibold leading-10'>About LexJon</h1>
                    <p className='text-text-color leading-6 sm:text-base text-sm'>LexJon is a premier IT firm specializing in innovative software development,
                        cutting-edge digital marketing and comprehensive digital education solutions.
                        Our mission is to deliver transformative technology solutions that thrive success
                        for businesses.
                    </p>
                    <p className='text-text-color leading-6 sm:text-base text-sm mt-2'>
                        Get a Demo to learn about our premium software, 
                        or get started with our full suite of free tools and upgrade as you grow.
                    </p>
                    <div className='flex sm:gap-8 gap-3 mt-5'>
                        <Button className='w-[139px] h-[48px] text-white text-base font-bold'>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary hover:bg-secondary hover:text-white'>
                            Get started for free
                        </Button>
                    </div>
                </div>
            </motion.div>
            <motion.div
                ref={ref3}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                initial="hidden"
                animate={mainControls3}
                transition={{ duration: 0.8, delay: 0.50 }}
                className={`flex justify-between items-center sm:gap-24 mt-10 overflow-hidden`}>

                {
                    ArraysOfSDE.map((item, index)=> (
                        <div key={index} className='sm:flex flex-col justify-center items-center p-5'>
                            <img src={item.img} alt="" className='w-[50px]'/>
                            <h1 className='sm:text-2xl font-semibold sm:leading-10 text-sm'>{item.title}</h1>
                        </div>
                    ))
                }
            </motion.div>
            <motion.div
                ref={ref4}
                ariants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                initial="hidden"
                animate={mainControls4}
                transition={{ duration: 0.8, delay: 0.65 }}
                 
                className={`my-10 flex flex-col items-center gap-5 p-5 w-screen`} >
                <img src={FeaturedCourseImg} alt="" />
                <div className="flex flex-col gap-4">
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'>Our team of experts offer a range of services to meet up your IT needs. We specialize in:</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Software Development: </span>Customs software solutions tailored to your business requirements</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Digital Marketing: </span>Comprehensive digital marketing strategies to boost your brand visibility.</p>
                    <p className='text-text-color sm:text-lg font-normal leading-6 text-sm'><span className='text-secondary'>Digital Education: </span> Innovative educational software and platforms designed for effective learning</p>
                </div>
                    <div className='flex sm:gap-5 gap-2 p-10'>
                        <Button className='w-[129px] h-[48px] text-white text-base font-bold'>
                            Get a demo
                        </Button>
                        <Button className='w-[198px] h-[48px] bg-white text-secondary text-base font-bold border border-secondary hover:bg-secondary hover:text-white'>
                            Get started for free
                        </Button>
                    </div>
            </motion.div>

            <motion.div 
                ref={ref5}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                initial="hidden"
                animate={mainControls5}
                transition={{ duration: 0.8, delay: 0.35 }}
                
                className='my-10'>
                <Companies/>
            </motion.div>

            <div className="relative w-full h-full flex flex-col justify-center items-center " >
                <motion.img
                    ref={ref6}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    initial="hidden"
                    animate={mainControls6}
                    transition={{ duration: 0.8, delay: 0.75 }}   
                    src={OvalBackground} alt="" className="absolute sm:relative  inset-0 w-full h-full object-cover bottom-20" />
                <div ref={ref7} className='sm:absolute'>
                    <Products 
                        ref={ref7}
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        initial="hidden"
                        animate={mainControls7}
                        transition={{ duration: 0.8, delay: 0.35 }}   
                    />
                </div>
            </div>
            <motion.div
                 ref={ref8}
                 variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                   }}
                 initial="hidden"
                 animate={mainControls8}
                 transition={{ duration: 0.8, delay: 0.35 }}   
       
                 className={`relative`}>
                <Testimonial title="Testimonials"/>  
            </motion.div>
            <div className='w-screen h-[295px] mb-10 ' >
                <Contact/>
            </div>
        </section>
        <Footer/>
    </main>
  )
}

export default HomePage