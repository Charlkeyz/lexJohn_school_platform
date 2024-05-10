/* eslint-disable react/no-unescaped-entities */
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/footer"
import Navbar from "../../components/NavBar/Navbar"
import CareerImg1 from '/LexJohn_Images/homepages images/Frame 1000001511.png'
import CareerImg2 from '/LexJohn_Images/homepages images/Union.png'
import tickerIcon from '/LexJohn_Images/homepages images/Iconsax.svg'





const CareerPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center bg-background">
            <div className="flex flex-col w-[486px] gap-10">
                <h1 className="font-bold text-[40px] leading-[48px]">Let's grow together</h1>
                <p className="text-base text-text-color font-normal leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet temporibus enim ullam blanditiis. Nam dolor, 
                    quis voluptates accusamus eligendi placeat a commodi fugiat veniam expedita vero voluptas. Iure, nulla nostrum.
                </p>
                <Button className='w-[266px] text-white'>See all open positions</Button>
            </div>
            <img src={CareerImg1} alt="" />
        </div>
        <div className="flex justify-center items-center h-[696px] gap-20">
            <img src={CareerImg2} alt="" />
            <div className="flex flex-col w-[587px] gap-10">
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl font-semibold leading-10">Will you join our team</h1>
                    <p className="text-text-color text-base font-normal leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum numquam rem, 
                        quibusdam dignissimos sint, tenetur blanditiis eum provident sapien
                    </p>
                </div>
                <div className="w-[500px] ml-16">
                    <h1 className="flex item-center gap-3 text-base font-normal leading-6"><img src={tickerIcon} alt="" /> Will you join our team</h1>
                    <p className="text-text-color text-base font-normal leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum numquam rem, 
                        quibusdam dignissimos sint, tenetur blanditiis eum provident sapien
                    </p>
                </div>
                <div  className="w-[500px] ml-16">
                    <h1 className="flex item-center gap-3 text-base font-normal leading-6"><img src={tickerIcon} alt="" /> Will you join our team</h1>
                    <p className="text-text-color text-base font-normal leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum numquam rem, 
                        quibusdam dignissimos sint, tenetur blanditiis eum provident sapien
                    </p>
                </div>
            </div>
            
        </div>
        <div className="flex flex-col justify-center items-center gap-5 bg-background h-[265px]">
            <h1 className="text-2xl font-semibold leading-10">We'd love to get to know you</h1>
            <p className="text-base font-normal leading-6 text-text-color">Browse our open positions, 
                find a job you love, tell imposter syndrome to take a day off, and apply.
            </p>
            <Button className='w-[266px] text-white'>See all open positions</Button>
        </div>
        <Footer/>
    </div>
  )
}

export default CareerPage