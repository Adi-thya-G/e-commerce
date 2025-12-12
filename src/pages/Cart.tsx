import React from 'react'
import CartCard from '../components/CartCard'
import { useNavigate } from 'react-router-dom'
import CartFeatures from '../components/CartFeatures'
function Cart() {
  const navigate=useNavigate()
  return (
    <div className='w-full  min-h-[90vh]  max-h-full p-4 sm:p-6 md:px-8 xl:px-12 max-ms:mb-32 max-lg:mb-90 mb-16 space-y-8'>
      <h2 className='font-black text-2xl xl:text-3xl font-serif'>YOUR CART</h2>
      {/* <div className='w-[80%]  max-sm:w-full h-[80vh] border-4 border-dashed border-gray-300 flex justify-self-center rounded-4xl place-items-center justify-center p-1'>
      <div className='grid justify-item-center place-items-center gap-5'>
        <p className='text-3xl md:text-4xl font-black flex text-center font-serif'>Your Cart Is Empty !</p>
      <button className='bg-black text-white text-xl cursor-pointer active:scale-105 
      w-[240px] p-3 md:px-3 rounded-3xl'
      onClick={(e)=>navigate("/shop")}
      >Shopping Now</button>
      </div>
      </div> */}
      <CartFeatures/>

      
    </div>
  )
}

export default Cart