/* eslint-disable react/prop-types */
import { ArrayOfLogos } from '../../ArrayOfData/ArrayLogos'
import './companies.css'


const Companies = ({className, text_white}) => {
  return (
    <div className={`flex items-center justify-center gap-24 my-24 ${className}`}>
               <div className='w-[318px] h-[130px] mb-20'>
                    <h1 className='text-2xl font-semibold leading-10 py-5'>6.3k trusted companies</h1>
                    <p className={`text-xs font-normal text-text-color leading-6 ${text_white}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias tenetur debitis illum nulla. Ea illum nisi asperiores laboriosam molestias sit. Perferendis dolor tempore accusamus ducimus et quasi nesciunt quo!</p>
               </div>
               <div className='flex items-center gap-10 '>
                    {
                        ArrayOfLogos.map((item, index)=> (
                            <div key={index} className='w-[150px] h-[75px] px-37.5 flex items-center justify-center shadow-lg bg-white z-10'>
                                <img src={item.img} alt=""  />
                            </div>
                        ))
                    }
               </div> 
    </div>
  )
}

export default Companies