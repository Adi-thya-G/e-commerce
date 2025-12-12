
import { IoMdClose } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import { toggleSideNavbar } from '../Features/ui/uiSlice';
import type { RootState, AppDispatch } from "../store/store"
function SideNavbar() {
  const issidebar=useSelector((state:RootState)=>state.uislice.IsSideNavbarOpen)
  const dispatch:AppDispatch=useDispatch()

  const close=()=>{
    dispatch(toggleSideNavbar())
  }
  return (
    <aside className={`h-[99%]   transition duration-500 translate-x-0 ${issidebar&&"fixed"||"hidden"} lg:hidden mt-1
    shadow-gray-300 top-0 max-ms:w-[90%] w-[336px]  z-50 bg-white shadow-md  rounded-md p-2 `}>
      <div className='grid grid-cols-1 grid-flow-row gap-6'>
        <div className='flex gap-2 place-items-center justify-between'>
              
              <h2 className=' font-black'>
              SHOP.COM
             </h2>
             <button className='cursor-pointer' onClick={close}>< IoMdClose className='font-black' style={{stroke:"3px"}} size={20}/></button>
            </div>
      <div>
        <ul className=' grid grid-cols-1 grid-flow-row gap-5  '>
        <li className='cursor-pointer'>

          Shop
          <hr />
        </li>
        <li className='cursor-pointer'>
          New sales
           <hr className='text-gray-400 font-semibold' />
        </li>
        <li className='cursor-pointer'>
         New Arrivals
          <hr />
        </li>
        <li className='cursor-pointer'>
          Brands
           <hr />
        </li>
      </ul>
      </div>
      </div>
    </aside>
  )
}

export default SideNavbar