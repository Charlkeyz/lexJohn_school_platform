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

      <div className="w-screen h-[250px] mb-16">
        {/* <div className=" ">
          <h3 className="w-[300px] text-1xl text-center">
            Connect with our Head office
          </h3>
        </div> */}

        <div className="h-[100px] flex justify-center items-center gap-6">
          <div>
            <img src="/images/Rectangle 4081.png" />
          </div>
          <div className="flex  flex-col justify-center gap-6">
            {addressData.map((items, index) => {
              return (
                <div key={index}>
                  <div className="text-[12px] font-bold">{items.head}</div>
                  <p className="text-xs mt-2">{items.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
