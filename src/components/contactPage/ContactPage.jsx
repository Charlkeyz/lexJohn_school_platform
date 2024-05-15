import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/footer";
import Button from "../Button/Button";

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
  return (
    <>
      <Navbar />
      <div className="w-screen bg-tertiary h-[600px] flex flex-row justify-center items-center">
        <div className="flex justify-center items-center mx-20">
          <div className="">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-1xs text-text-color my-4">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="">
            <img src="/images/Images.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12">
        {customerData.map((items, index) => {
          return (
            <div
              key={index}
              className="w-[290px] h-[220px] bg-white relative bottom-60 left-20 flex flex-col items-center"
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

      <div className="bg-w-screen h-[400px]  relative bottom-40">
        <h2 className="text-2xl font-bold text-center mb-4">
          Connect with our Head office
        </h2>
        <div className="w-screen flex flex-col items-center h-[600px]">
          <div className="mt-4 flex justify-center items-center">
            <div className="pl-6 pr-6 h-[620px] bg-tertiary">
              <h2 className="text-2xl font-bold mt-8">Contact Form</h2>
              <p className="text-1xl text-primary mt-2">
                We're here to answer your questions.
              </p>
              <p className="text-[14px] mt-6">Full Name</p>
              <input
                type="text"
                className=" w-[350px] h-[35px] outline-none mt-1"
              />
              <p className="text-[14px] mt-4">Contact Number</p>
              <input
                type="text"
                className=" w-[350px] h-[30px] outline-none mt-1"
              />
              <p className="text-[14px] mt-4">Email Address</p>
              <input
                type="text"
                className=" w-[350px] h-[30px] outline-none mt-1"
              />
              <p className="text-[14px] mt-4">Subject</p>
              <input
                type="text"
                className=" w-[350px] h-[40px] outline-none mt-1"
              />
              <p className="text-[14px] mt-4">Message</p>
              <input
                className=" w-[350px] h-[80px] outline-none mt-1 "
                type="text"
                placeholder="    Please type message"
              />
              <div className="mt-6 flex justify-center">
                <Button className=" h-[10px] text-sx text-white pl-8 pr-8 pb-8">
                  Send
                </Button>
              </div>
            </div>
            <div className="w-[300px] h-[620px] border right">
              <div className="flex  flex-col justify-center gap-6 mt-40">
                {addressData.map((items, index) => {
                  return (
                    <div key={index}>
                      <div className="text-[13px] font-bold mb-4 flex justify-center">
                        {items.head}
                      </div>
                      <p
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
      <div className="mt-40 mb-10">
        <img className="w-screen h-[500px]" src="/images/Rectangle 4081.png" />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
