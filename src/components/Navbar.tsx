
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

import { toggleSideNavbar } from "../Features/ui/uiSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const navbarData:Array<string>=[
 "Shop", "New sales","New Arrivals","Brands"
]


function Navbar() {
  const dispath=useDispatch()
  const toggleMenu=():void=>{
  dispath(toggleSideNavbar())
  
 }
 const navigate=useNavigate()
  return (
    <div className='w-full p-2 flex  place-items-center h-12 md:h-16 gap-7 px-3 lg:px-12 bg-white shadow-md'>
      <div className='flex gap-2 place-items-center'>
        <button className=' flex lg:hidden'onClick={toggleMenu} ><IoMenu size={20}/></button>
        <h2 className=' font-black'>
        SHOP.COM
       </h2>
      </div>
      
      <div className=' flex justify-start  flex-1 place-items-center'>
        <ul className=' gap-12 hidden lg:flex  place-items-center flex-1 px-6 '>
          {
            navbarData.map((ele)=>(
 <li className='cursor-pointer'>
          <Link to={ele.replace(" ","").toLowerCase()}>{ele}</Link>
        </li>
            ))
          }
       
       
        <li className='flex-1 place-items-center w-max flex '>
         
           <div className='relative flex flex-1'>
             <input type="search" name="" id="" className='flex-1 rounded-2xl outline-none border-2 border-black text-sm px-2 py-2 ' placeholder='Search for product'/>
           <button className='flex absolute right-0 rounded-full p-2'><IoIosSearch size={20} className='font-black cursor-pointer '/></button>
           </div>
          
        </li>
      </ul>
      </div>
      <div className='flex  gap-2 lg:pr-6 lg:gap-4'>
        <button className='flex lg:hidden'><IoIosSearch size={20} className='font-black cursor-pointer '/></button>
        <button onClick={(e)=>{
      navigate("/cart")
        }}><FaShoppingCart size={20} className='font-black cursor-pointer'/></button>
        <button><CgProfile size={20} className='font-black cursor-pointer'/></button>
      </div>

    </div>
  )
}

export default Navbar