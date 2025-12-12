
import { FaStar } from "react-icons/fa";
function Card() {
  return (
    <div className='h-[400px] '>
    <div className='h-3/4 w-full rounded-md overflow-hidden'>
    <img src="https://shopco.surge.sh/static/media/newarrivalimg1.baa7d7b54b3efa8ece92.png" alt="" className='transform duration-500 hover:scale-110'/>

    </div>
   <div className='p-1'>
    <h2 className='font-black'>T-shirt With Tape Details</h2>
    <div className='flex'>
      {"00000".split("0").map(()=>(
        <FaStar className='text-amber-400 fill-amber-400"'/>
      ))}
    </div>
    <h6>$1200</h6>
   </div>
    </div>
  )
}

export default Card