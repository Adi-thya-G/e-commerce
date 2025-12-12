
import Product from '../components/Products'
import type { RootState,  } from "../store/store"
import { IoMdClose } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux'
import { toggleSortButton } from '../Features/ui/uiSlice';
function Products_Page() {
  const isSortButtonOpen=useSelector((state:RootState)=>state.uislice.IsSortButtonOpen)
  const dispatch=useDispatch()
  return (
    <div className='relative mb-30'>
     {
      isSortButtonOpen&&(
         <div className='absolute top-7 right-3 h-60 w-52 bg-white shadow-md rounded-md 
         transform transition-transform animate-dropdown overflow-hidden shadow-gray-400  '>
          <div className='absolute top-2 right-2'>
         <button onClick={()=>dispatch(toggleSortButton())}><IoMdClose size={20}/></button>
          </div>


            </div>
      )
     }

    
      <Product/></div>
  )
}

export default Products_Page