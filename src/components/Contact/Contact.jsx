const contactData = [
  {
    image: "/images/message.png",
    content: "info@eschool.ng",
  },
  {
    image: "/images/Vector.png",
    content: "+234 123 456 7890",
  },
  {
    image: "/images/location.png",
    content: "123 B Avenue, Ikeja, Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <>
      <div className="my-10 border-t-2 border-yellow-400 p-10">
        <div className="mx-40">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="text-1xs my-4 font-medium">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
        </div>
        <div>
          {contactData.map((items, index) => {
            return (
              <div key={index} className="flex">
                <div className="flex gap-1 my-1 mx-40">
                  <div>
                    <img src={items.image} alt="" />
                  </div>
                  <p className="text-1xs">{items.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
