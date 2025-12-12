import React ,{useState}from 'react'
import { RxCross2 } from "react-icons/rx";
function Filter({filter,setfilter}:any) {
  const [open, setOpen] = useState("");

  const openClick=(element:any)=>{
    if(open===element)
    {
      setOpen("")
    }
    else{
      setOpen(element)
    }


  }
  return (
    <aside className={`  fixed scroll-smooth inset-x-0 inset-y-0.5 overflow-y-auto  bg-white border-r-2 border-2 border-zinc-100     w-[90%] xs-range:w-[280px] sm:w-[320px]  gap-3 p-3  z-50 transition-transform duration-700 ${filter?"translate-x-0":"translate-x-ful"}`}>
    <div className=  'flex justify-between p-1 w-full row-span-2 overflow-y-hidden'>
     <h2 className='font-serif'>Filter</h2>
      <button className='flex' onClick={()=>setfilter((pre:any)=>!pre)}><RxCross2 size={25}/></button>
    </div>
    <div className=  ' w-full  row-span-11 font-sans'>
      <ul className="p-2">
      <li className="font-semibold mb-1">
        <button onClick={() => openClick("Gender")} className="w-full text-left">
          Gender
        </button>
        {open=="Gender" && (
          <ul className="ml-4 mt-1 text-gray-600">
            <li className=" cursor-pointer flex gap-2"> <input type="radio" name='Gender' value="Men"  className=''/> Men</li>
      <li className=" cursor-pointer flex gap-2"><input type="radio" name='Gender' value="Women" />Women</li>
          </ul>
        )}
        <hr  className='w-full mt-2'/>
      </li>
      <li className="font-semibold mb-1">
        <button onClick={() => openClick("Size")} className="w-full text-left">
          Size
        </button>
        {open=="Size" && (
          <ul className="ml-4 mt-1 text-gray-600 flex gap-2 flex-wrap">
      <li className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">S</li>
      <li className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">M</li>
      <li className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">L</li>
      <li className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">XL</li>
      <li className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">XXL</li>
    </ul>
        )}
        <hr  className='w-full mt-2'/>
      </li>
      <li className="font-semibold mb-1">
        <button onClick={() => openClick("Price")} className="w-full text-left">
          Price
        </button>
        {open=="Price" && (
          <ul className="ml-4 mt-1 text-gray-600">
            <li className=" cursor-pointer flex justify-start  gap-1 "  > 
              <input type="radio" name="Price" id="" /> <span>₹500</span> - <span>₹900</span></li>
             <li className=" cursor-pointer flex justify-start gap-1 "  >
               <input type="radio" name="Price" id="" /> 
               <span>₹500</span> - <span>₹900</span></li>
               <li className=" cursor-pointer flex justify-star gap-1 " > 
                 <input type="radio" name="Price" id="" /> 
                <span>₹500</span> - <span>₹900</span></li>
                <li className=" cursor-pointer flex justify-start gap-1 "  >
                   <input type="radio" name="Price" id="" /> 
                   <span>₹500</span> - <span>₹900</span></li>
                 <li className=" cursor-pointer flex justify-start gap-1 " > 
                   <input type="radio" name="Price" id="" /> 
                  <span>₹500</span> - <span>₹900</span></li>
          </ul>
        )}
        <hr  className='w-full mt-2'/>
      </li>
      <li className="font-semibold mb-1">
        <button onClick={() => openClick("Sleeve Type")} className="w-full text-left">
          Sleeve Type
        </button>
        {open=="Sleeve Type" && (
          <ul className="ml-4 mt-1 text-gray-600">
            <li className=" cursor-pointer flex justify-start  gap-1 "  > 
              <input type="radio" name="Sleeve Type" id="" />Full Selvees</li>
             <li className=" cursor-pointer flex justify-start gap-1 "  >
               <input type="radio" name="Sleeve Type" id="" /> 
               Short Selvees</li>
               <li className=" cursor-pointer flex justify-star gap-1 " > 
                 <input type="radio" name="Sleeve Type" id="" /> 
                Selveeless</li>
                
          </ul>
        )}
        <hr  className='w-full mt-2'/>
      </li>
    </ul>
    </div>
    </aside>
  )
}

export default Filter