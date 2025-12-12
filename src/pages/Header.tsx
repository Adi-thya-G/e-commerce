import React from 'react'
import { useState } from "react"
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import SideNavbar from '../components/SideNavbar'
function Header() {
 const [isclose,setisclose]=useState(false)
 const [ismenu,setismenu]=useState(false)
console.log(isclose)
  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <div className={`${isclose&&"hidden"}`}>
          <Message children={<p>Please <a href="#">login /signup</a> get 20% off</p>} color="text-white" backgroundColor="bg-black" setisclose={setisclose}/>
        </div>
      <Navbar />
      </div>
      
     <SideNavbar/>
      
     
    </>
  )
}

export default Header