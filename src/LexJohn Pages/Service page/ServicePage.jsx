import Companies from "../../components/6.3k trusted companies/companies"
import Footer from "../../components/Footer/footer"
import Navbar from "../../components/NavBar/Navbar"
import OurExpertise from "../../components/Our Expertise/OurExpertise"
import Testimonial from "../../components/Testimonial/Testimonial"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"
import ServiceImg from '/LexJohn_Images/homepages images/serviceImg1.png'


const ServicePage = () => {
  return (
    <main>
        <Navbar/>
        <section className="flex flex-col justify-center items-center w-screen">
          <div className="flex w-[1065px] h-[398px] justify-center items-center relative top-24">
            <div className="flex flex-col gap-10">
              <h1 className="text-[40px] font-bold leading-[48px]">What we do</h1>
              <p className="text-base font-normal leading-6 text-text-color">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor libero ea voluptatem ad dolore, aut quibusdam cumque voluptas necessitatibus autem distinctio aliquid dolorem exercitationem itaque repellat? Natus, rerum! Explicabo, recusandae?
              </p>
            </div>
            <img src={ServiceImg} alt="" />
          </div>
        
            <Companies className='bg-primary text-white w-screen' text_white='text-white'/>
            <div className="flex flex-col justify-center gap-10">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold leading-10">Our Expertise</h1>
                <p className="text-base text-text-color font-normal leading-6 w-[1115px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Voluptates quidem corporis ut maiores nobis dolorem cupiditate aut animi illum,
                    quos iure distinctio delectus, perspiciatis praesentium facilis pariatur laborum quo esse.
                </p>
              </div>
              <div className="flex flex-col gap-32">
                <OurExpertise/>
                <WhyChooseUs/>
                <Testimonial title="Feedback from Our Clients"/>
              </div>
            </div>
          
        </section>
        <Footer/>
    </main>
  )
}

export default ServicePage