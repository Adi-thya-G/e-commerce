import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
function CartCard() {
  const [qty,setqty]=useState(1)
  return (
    <div className='w-full  bg-white shadow-md shadow-gray-300
     border-2 border-gray-200
    rounded-2xl p-2 xl:grid xl:grid-cols-[4fr_2fr] transform transition-transform duration-300 origin-top hover:scale-y-102 overflow-visible hover:z-20 '>
      <div className='flex w-full'>
        <div className='w-[90px] xl:w-[150px] h-[90px] xl:h-[170px] rounded-2xl xl:p-1 flex xl:place-self-center'>
       <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875448006-18.jpg" alt="" 
       className='w-full h-full object-fill rounded-2xl'
       />
      </div>
      <div className='w-[65%] h-full p-2 xl:px-3'>
          <p className='text-sm md:text-[18px] font-black'>Sixth June Carpenter Pants</p>
          <div className='flex place-items-center py-2 space-x-2'>
            <p>color</p>
            <div className='w-6 h-6 rounded-full bg-gray-300'>
           
            </div>
             
          </div>
           <p>size:large</p>
           <div className='flex flex-wrap relative'>
            <h2 className='xl:text-[24px] text-[25px] w-full'>$600</h2>
            
              <div className='flex place-items-center'>
                <del className=' xl:text-[24px] text-[25px]'>$57</del>
              <div className='flex place-items-center justify-center mx-5 bottom-2 bg-red-100 w-9 h-5 text-[12px] text-red-500 rounded-4xl'>
              65% 
              </div>
              </div>
            

           </div>
      </div>
      </div>
      <div className='w-full  flex xl:flex-col xl:h-full xl:place-items-end justify-between flex-row-reverse place-items-center justify-self-end '>
      
        <button className='flex'><MdDelete color='red ' size={20}/></button>
        
        <div className='w-52 h-12 bg-increment-button shadow-lg border-2 border-cream shadow-gray-200 text-black flex rounded-3xl '>
          <button className='flex w-full place-items-center justify-center text-xl rounded-l-3xl rounded-3xl
          active:bg-gray-200 active:
          '
          onClick={()=>setqty((pre)=>pre+1)}
          >+</button>
          <span className='flex w-full place-items-center justify-center text-xl'>{qty}</span>
          <button className='flex w-full place-items-center justify-center text-xl  rounded-r-3xl rounded-3xl
          active:bg-gray-200 active:'
           onClick={()=>{
            qty==1||setqty((pre)=>pre-1)
           }}
          >-</button>
        </div>
      </div>
    </div>
  )
}

export default CartCard