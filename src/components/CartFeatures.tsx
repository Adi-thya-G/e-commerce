import React from 'react'
import CartCard from './CartCard'

function CartFeatures() {
  return (
    <div
    className='xl:flex grid w-full h-full xl:justify-center space-x-10 space-y-2 ' 
    >
    <div className='w-full min-h-screen max-h-full space-y-2  xl:w-[60%] rounded-2xl p-2 '>
    
        {[0,0,0,0,0,0,0].map(()=>(
<CartCard/>
        ))}
      
    </div>
    <div className='w-full h-[300px] bg-white shadow-lg shadow-gray-200 xl:w-[30%] xl:sticky xl:top-1/4 rounded-2xl border-2 border-gray-100 p-4 pt-6 flex '>
     <div className=' w-full h-full space-y-3'>
     <h2 className='font-semibold font-serif text-xl w-full'>Order Summery</h2> 
     <ul className='space-y-2 text-[18px]'>
      <li>Subtotal</li>
      <li>Discount</li>
      <li>Delivery Fees</li>
      <li>
        Total
      </li>
     </ul>
     
     </div>
    <div className='w-28 h-full space-y-3'>
 <span className='w-full'>8 items</span>
 <ul className='space-y-2 text-[18px] mt-4'>
      <li>$1000</li>
      <li>$200</li>
      <li>$16</li>
      <li>
       $1080
      </li>
     </ul>
    </div>
    </div>
    </div>
  )
}

export default CartFeatures