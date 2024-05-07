import { ArrayOfLogos } from '../../ArrayOfData/ArrayLogos'


const Companies = () => {
  return (
    <div className='flex items-center justify-center gap-24 my-24'>
               <div className='w-[318px] h-[130px] mb-20'>
                    <h1 className='text-2xl font-semibold leading-10 py-5'>6.3k trusted companies</h1>
                    <p className='text-xs font-normal text-text-color leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias tenetur debitis illum nulla. Ea illum nisi asperiores laboriosam molestias sit. Perferendis dolor tempore accusamus ducimus et quasi nesciunt quo!</p>
               </div>
               <div className='flex items-center gap-10'>
                    {
                        ArrayOfLogos.map((item, index)=> (
                            <div key={index} className='w-[150px] h-[75px] px-37.5 flex items-center justify-center shadow-lg'>
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }
               </div> 
    </div>
  )
}

export default Companies