import { type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { IoIosClose } from "react-icons/io";
interface MessageProps{

  color ?:string;
  backgroundColor ?:string;
  children:ReactNode;
  setisclose:Dispatch<SetStateAction<boolean>>;

}

function Message(props:MessageProps) {
  return (
    <div className={`w-full z-50 p-1 flex shadow-md shadow-white px-6 ${props.backgroundColor}`}>
      <h2 className={`${props.color} text-sm text-center flex-1`}>{props.children}</h2>
     <button onClick={()=>{
props.setisclose(true)
     }}><IoIosClose color='white'size={20} className='cursor-pointer'/></button>
    </div>
  )
}

export default Message