/* eslint-disable react/no-unescaped-entities */
// import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/footer";
import Button from "../Button/Button";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const customerData = [
  {
    head: "Talk to Sales",
    paragraph:
      "Intrested in LexJon software? Just pick up the phone and call our sales team.",
    image: "/images/call.png",
    button: "Contact Sales",
  },
  {
    head: "Customer Care Support",
    paragraph:
      "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquen..",
    image: "/images/chat_bubble.png",
    button: "Contact Sales",
  },
];

const addressData = [
  {
    head: "WEBSITE",
    para: "www.lexjon@eschool.ng",
  },
  {
    head: "PHONE",
    para: "+234 123 456 7890",
  },
  {
    head: "ADDRESS",
    para: "123 B Avenue, Ikeja, Lagos, Nigeria",
  },
];

const ContactPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const viewportHeight = window.innerHeight;
  const middleOfViewport = viewportHeight / 2;
  
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-screen bg-tertiary h-[600px] flex flex-row justify-center items-center overflow-hidden">
        <div className="flex sm:flex-row  flex-col justify-center items-center sm:mx-20 p-5 gap-10 mt-32 sm:mt-0 sm:gap-0 sm:p-0 ">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-1xs text-text-color my-4">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="">
            <img data-aos="fade-up" data-aos-offset={middleOfViewport} src="/images/Images.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row  flex-col justify-center items-center gap-12 mt-10 sm:mt-0">
        {customerData.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-offset={middleOfViewport}
              className="w-[290px] h-[220px] bg-white sm:relative 
                bottom-60 left-20 flex flex-col items-center border border-black rounded-xl sm:border-none"
            >
              <div className="flex justify-center items-center">
                <img className="my-4" src={items.image} alt="" />
              </div>
              <div
                className={`flex justify-center items-center text-1xl font-medium my-[-8px] mb-2 ${
                  index === 1 ? "relative bottom-2" : ""
                }`}
              >
                {items.head}
              </div>
              <div
                className={`text-[11px] text-text-color mx-6 ${
                  index === 1 ? "relative bottom-2" : ""
                }`}
              >
                {items.paragraph}
              </div>
              <Button
                className={`w-[240px] text-white h-[38px] mt-5 flex items-center justify-center text-[14px] ${
                  index === 1 ? "relative bottom-3 " : ""
                }`}
              >
                {items.button}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="bg-w-screen sm:h-[400px] h-[1000px] sm:relative bottom-40 mt-10 sm:mt-0">
        <h2 data-aos="fade-right" data-aos-offset={middleOfViewport} className="text-2xl font-bold text-center sm:mb-4 p-3">
          Connect with our Head office
        </h2>
        <div className="w-screen flex flex-col items-center h-[600px]">
          <div className="mt-4 flex sm:flex-row flex-col justify-center items-center ">
            <div className="pl-6 sm:pr-6 h-[620px] bg-tertiary" data-aos="fade-up" data-aos-offset={middleOfViewport}>
              <h2 className="text-2xl font-bold mt-8">Contact Form</h2>
              <p className="text-1xl text-primary mt-2">
                We're here to answer your questions.
              </p>
              <p className="text-[14px] mt-6">Full Name</p>
              <input
                type="text"
                className=" sm:w-[350px] w-[300px] h-[35px] outline-none mt-1"
                required
              />
              <p className="text-[14px] mt-4">Contact Number</p>
              <input
                type="text"
                className=" sm:w-[350px] w-[300px] h-[30px] outline-none mt-1"
                required
              />
              <p className="text-[14px] mt-4">Email Address</p>
              <input
                type="text"
                className=" sm:w-[350px] w-[300px] h-[30px] outline-none mt-1"
                required
              />
              <p className="text-[14px] mt-4">Subject</p>
              <input
                type="text"
                className=" sm:w-[350px] w-[300px] h-[40px] outline-none mt-1"
                required
              />
              <p className="text-[14px] mt-4">Message</p>
              <input
                className=" sm:w-[350px] w-[300px] h-[80px] outline-none mt-1 p-5 "
                type="text"
                placeholder="Please type message"
                required
              />
              <div className="mt-6 flex justify-center pb-5">
                <Button className=" h-[10px] text-sx text-white pl-8 pr-8 pb-8">
                  Send
                </Button>
              </div>
            </div>
            <div className="sm:w-[300px] sm:h-[620px] h-full w-screen sm:border sm:right mt-10 sm:mt-0">
              <div className="flex  flex-col justify-center gap-6 sm:mt-40">
                {addressData.map((items, index) => {
                  return (
                    <div key={index}>
                      <div className="text-[13px] font-bold mb-4 flex justify-center" data-aos="fade-left" data-aos-offset={middleOfViewport}>
                        {items.head}
                      </div>
                      <p
                        data-aos="fade-right"
                        data-aos-offset={middleOfViewport}
                        className={`text-[13px] mt-2 flex justify-center ${
                          index === 0 ? "text-yellow" : ""
                        }`}
                      >
                        {items.para}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-40 sm:mb-10 w-screen">
        {/* <img 
          data-aos="fade-down" 
          data-aos-offset={middleOfViewport} 
          className="w-screen sm:h-[500px] p-5" 
          src="/images/Rectangle 4081.png" /> */}
          <iframe
              className="w-screen sm:p-5 p-2 overflow-hidden"
              data-aos="fade-down" 
              data-aos-offset={middleOfViewport} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.00094306994!2d3.364662475713153!3d6.5215615231843795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4da6e7985b%3A0xcc91fa8b98376c74!2sThe%20Bulb!5e0!3m2!1sen!2sng!4v1714732737710!5m2!1sen!2sng"
              // width="100%"
              height="400"
              title="Responsive Google Map"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"s
            ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
