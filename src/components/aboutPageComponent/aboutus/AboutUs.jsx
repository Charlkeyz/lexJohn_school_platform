import Contact from "../../Contact/Contact";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/footer";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const AboutUs = () => {
  const { ref: componentRef, inView: isVisible } = useInView();

  return (
    <>
      <Navbar />
      <motion.div
        ref={componentRef}
        className="w-screen flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {dummyData.map((items, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                index === 1 ? "flex-row-reverse" : "flex-row"
              } justify-center items-center flex-row gap-40 ${
                index === 0 ? "bg-tertiary" : ""
              }`}
            >
              <div className="">
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
              <img className="w-[400px] my-10" src={items.image} alt="" />
            </div>
          );
        })}
      </motion.div>
      <div className="h-[400px] bg-tertiary">
        <div className=" my-10">
          <h1 className="text-3xl font-bold flex justify-center relative top-10">
            LexJon By the Numbers
          </h1>
        </div>
        <div className="flex justify-center gap-12">
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
        <div className="flex justify-center gap-4 my-10">
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
      <Contact className="mb-10"></Contact>
      <div className="h-[400px] bg-primary">
        <div className=" my-10 relative top-14">
          <h1 className="text-1xl text-white font-medium flex justify-center">
            LexJon Products
          </h1>
          <p className="text-xs text-white flex justify-center my-2 ">
            Discover our industry-leading software solutions
          </p>
        </div>
        <div className="flex justify-center gap-12">
          {productsData.map((items, index) => {
            return (
              <div
                key={index}
                className="h-[180px] w-[250px] bg-white flex flex-col items-center relative top-5 my-10"
              >
                <div className="px-6 my-4">
                  <h3 className="text-1xl font-bold">{items.system}</h3>
                </div>
                <div className="my-0">
                  <h3 className="text-[10px] text-text-color px-6">
                    {items.paragraph}
                  </h3>
                  <div className="px-6"></div>
                </div>

                <Button className="w-[200px] h-[38px] text-white mt-5 flex items-center justify-center text-[14px]">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
