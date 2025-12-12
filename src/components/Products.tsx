import  { useState ,useEffect} from 'react'
import { BiHeart } from 'react-icons/bi'
import { FiTag } from "react-icons/fi";
import { MdFilterAlt } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import Filter from './Filter';
import { useDispatch, } from 'react-redux';
import type { RootState,} from "../store/store"
import { useSelector } from 'react-redux'
import { toggleSortButton } from '../Features/ui/uiSlice';
function Product() {
  const [filter ,setfilter]=useState(false)
  const dispatch=useDispatch()
  const isSortButtonOpen=useSelector((state:RootState)=>state.uislice.IsSortButtonOpen)
 const dic=[
  {},{},{},{},{},{},{},{},{},{}, {},{},{},{},{},{},{},{},{},{}
 ]
useEffect(() => {
  if (filter) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  // Cleanup on unmount
  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [filter]);
  return (
  <div className='w-full h-full grid lg:flex lg:flex-col-[20%_80%] p-1.5  2xl:pr-20 lg:overflow-hidden '>
    <div className='lg:w-[400px] w-full  lg:h-screen flex justify-between p-3 mb-3 '>
      {
        filter?(<Filter filter={filter} setfilter={setfilter}/>):(
          ""
        )
      }
   <button className={` font-serif z-10 ${filter?"hidden":"flex"} lg:hidden` } onClick={()=>setfilter((pre)=>!pre)}> <i className='py-1'><MdFilterAlt  size={18} color='black' /></i> Filter</button>
    <button className={` font-serif z-10 ${isSortButtonOpen&&"hidden"} ${filter?"hidden":"flex"} lg:hidden` }
    onClick={()=>dispatch(toggleSortButton())}
    > <i className='py-1 oncl'><BsSortDown size={18} /></i> Sort</button>
    <aside className="h-screen right-2 w-full  l left-0   gap-3 p-3 z-10 hidden lg:block 2xl:pl-20 ">
  <div className="flex justify-between p-1 w-full row-span-2 ">
    <h2 className="font-serif">Filter</h2>
    
  </div>

  <div className="w-full row-span-11 font-sans">
    <ul className="p-2 space-y-4 text-gray-600">

      {/* Gender */}
      <li>
        <h3 className="font-semibold mb-1">Gender</h3>
        <ul className="ml-4 space-y-1">
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="Gender" />
            <span>Men</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="Gender" />
            <span>Women</span>
          </li>
        </ul>
      </li>

      {/* Size */}
      <li>
        <h3 className="font-semibold mb-1">Size</h3>
        <ul className="ml-4 flex gap-2 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map(size => (
            <li key={size} className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              {size}
            </li>
          ))}
        </ul>
      </li>

      {/* Price */}
      <li>
        <h3 className="font-semibold mb-1">Price</h3>
        <ul className="ml-4 space-y-1">
          {Array(5).fill(0).map((_, i) => (
            <li key={i} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="Price" />
              <span>₹500 - ₹900</span>
            </li>
          ))}
        </ul>
      </li>

      {/* Sleeve Type */}
      <li>
        <h3 className="font-semibold mb-1">Sleeve Type</h3>
        <ul className="ml-4 space-y-1">
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="Sleeve Type" />
            <span>Full Sleeves</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="Sleeve Type" />
            <span>Short Sleeves</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="Sleeve Type" />
            <span>Sleeveless</span>
          </li>
        </ul>
      </li>

    </ul>
  </div>
</aside>




    </div>
    
     <div>
       <div className='grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4  xs-range:grid-cols-3  lg:grid-cols-4 '>
   {
    dic.map(()=>(
       <div className='w-full max-w-[330px]    bg-white shadow-md shadow-slate-100  lg:h-[450px] grid grid-rows-6   border-2 border-stone-100 rounded-md'>
  <div className='w-full  row-span-4 rounded-t-md  overflow-hidden'>
    <img
      src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875448006-18.jpg"
      alt=""
      className='w-full h-full object-fit rounded-t-md transform duration-500 hover:scale-105'
    />
  </div>   
 <div className='w-full flex flex-col row-span-2 p-1 gap-1  md:text-[15px]'>
  <div className='flex justify-between items-start p-1 gap-2'>
    
    <a href='' className='flex-1 font-serif text-[12px] md:text-[15px] line-clamp-2 hover:underline'>
      Men Green Back Print Short Sleeve Oversized T-shirt
    </a>

    <BiHeart size={24} className='shrink-0 mt-1' />
    
  </div>
 <div className="flex text-[11px] items-center gap-1 md:text-[15px] ">
  <span className=" text-gray-500 line-through">₹1,799</span>
  <span className=" text-red-600 font-semibold">₹1,299</span>
  <span className=' text-red-600 font-semibold'>( 25% off )</span>
</div>

<div className='py-1 flex gap-1 text-[11px] md:text-[15px] '>

  <FiTag size={22} className="text-sky-400 p-1 rounded" />
  <h3 className='text-sky-600 '>Best price</h3>
  <span className='text-sky-600 '>₹ 1299</span>

</div>

</div>
   
</div>
    ))
   }


    </div>
     </div>
  </div>
  )
}

export default Product