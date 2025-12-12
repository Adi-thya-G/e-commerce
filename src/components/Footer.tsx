
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover, FaCcAmazonPay } from "react-icons/fa";

function Footer() {
  return (
<footer className='w-full h-max bg-footer-bg p-2 md:p-4 lg:p-6 rounded-2xl  mt-20'>
  <div className='w-full relative h-20 lg:h-30 mb-8 flex justify-center'>
<div className='w-full lg:w-[70%] h-60  bg-black absolute  -top-32 lg:-top-9/10 rounded-3xl p-2 md:p-4 lg:p-7 justify-center'>
<div className='grid lg:grid-cols-2 w-full h-full'>
  <div className='flex place-items-center h-full w-full justify-item-center '>
    <h2 className='font-black text-xl text-white md:text-2xl lg:text-3xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
  </div>
  <div className=' h-full w-full  flex place-items-center '>
    <div className=' p-4 space-y-4 w-full' >

      <div className='w-full h-full relative'>
        <IoIosMail size={26} className='absolute left-2 top-1/4' />
        <input type="text" className='w-full h-12 rounded-3xl bg-gray-100 px-10 ' placeholder='Please Enter Email ' />
      </div>
    <button className='bg-gray-100 w-full rounded-3xl p-2 lg:h-12'>Subscribe to NewsLetter</button>
    </div>
  </div>
</div>
</div>
  </div>
  <div className='grid lg:grid-cols-[40%_60%] gap-5 h-full'>
    <div className='h-full flex-col justify-center lg:p-4 space-y-3'>
      <h2 className='font-black text-2xl'>SHOP X</h2>
      <p className='text-left'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
     <div className='flex gap-3'>
      {
       [FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn]
       .map((Icon, i) => (
    <Icon key={i} size={20} className="" />
  ))
}
     </div>
    </div>
    <div className='grid grid-cols-2 gap-4 grid-flow-row lg:grid-cols-4 p-3 lg:justify-end'>
<ul className="grid gap-4">
  <li className="font-bold text-xl mb-2">Company</li>
  <li>About Us</li>
  <li>Features</li>
  <li>Careers</li>
  <li>Contact</li>
</ul>

<ul className="grid gap-4">
  <li className="font-bold text-xl mb-2">Help</li>
  <li>Customer Support</li>
  <li>FAQs</li>
  <li>Shipping & Returns</li>
  <li>Order Tracking</li>
</ul>

<ul className="grid gap-4">
  <li className="font-bold text-xl mb-2">Resources</li>
  <li>Blog</li>
  <li>Product Guides</li>
  <li>Size Charts</li>
  <li>Style Inspiration</li>
</ul>

<ul className="grid gap-4">
  <li className="font-bold text-xl mb-2">Legal</li>
  <li>Privacy Policy</li>
  <li>Terms of Service</li>
  <li>Cookie Policy</li>
  <li>Refund Policy</li>
</ul>

  </div>
  </div>
  <div className='my-5 mb-5 space-y-4 h-full '>
    <hr />
     <div className='lg:flex justify-between space-y-5  '>
       <p>XShop © 1997 - 2024, All Rights Reserved</p>
       <p>Developed by <a href="">Adithya karmarkar G</a></p>
       
<div className="flex gap-4 items-center">
  <FaCcVisa size={36} style={{ color: "#1A1F71" }} />         {/* Visa Blue */}
  <FaCcMastercard size={36} style={{ color: "#EB001B" }} />  {/* Mastercard Red */}
  <FaCcPaypal size={36} style={{ color: "#003087" }} />      {/* PayPal Blue */}
  <FaCcAmex size={36} style={{ color: "#2E77BB" }} />        {/* AmEx Blue */}
  <FaCcDiscover size={36} style={{ color: "#FF6000" }} />    {/* Discover Orange */}
  <FaCcAmazonPay size={36} style={{ color: "#FF9900" }} />   {/* Amazon Yellow */}
</div>

       
     </div>
  </div>

</footer>
  )
}

export default Footer