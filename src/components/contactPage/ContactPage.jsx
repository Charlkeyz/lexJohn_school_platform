import React from "react";

const customerData = [
  {
    head: "Talk to Sales",
    paragraph:
      "Intrested in LexJon software? Just pick up the phone and call our sales team.",
    image: "/images/call.png",
    button: "Contact Sales",
  },
  {
    head: "Talk to Sales",
    paragraph:
      "Intrested in LexJon software? Just pick up the phone and call our sales team.",
    image: "/images/call.png",
    button: "Contact Sales",
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="w-screen bg-tertiary h-[600px] flex flex-row justify-center items-center">
        <div className="flex justify-center items-center mx-40">
          <div className="">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-xs text-unique my-4">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="">
            <img cl src="/images/Images.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
