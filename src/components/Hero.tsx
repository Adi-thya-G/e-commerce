

function Hero() {
  return (
    <>
     <div className='w-full h-full lg:h-[600px] sm:flex justify-center bg-cream z-0'>
      <div className="w-full lg:w-[600px] p-3 grid place-items-center">
  <div className="w-full lg:h-[450px] p-3 grid gap-2">
    <h2 className="font-black text-2xl lg:text-[40px] w-full">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>

    <p>
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </p>

    <button className="bg-black text-white font-semibold h-12 w-full md:w-[200px] rounded-2xl cursor-pointer">
      Shop Now
    </button>

    {/* Stats */}
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      <div className="h-20 lg:text-xl">
        <h2 className="font-black">2000</h2>
        <p className="font-black">International Brands</p>
      </div>

      <div className="h-20 lg:text-xl">
        <h2 className="font-black">2000</h2>
        <p className="font-black">International Brands</p>
      </div>

      <div className="h-20 lg:text-xl col-span-full lg:col-span-1 justify-self-center w-1/2">
        <h2 className="font-black">2000</h2>
        <p className="font-black">International Brands</p>
      </div>
    </div>
  </div>
</div>

      
 <div className='lg:w-[600px] relative z-0 justify-items-center'>
   <img src="https://shopco.surge.sh/static/media/heroimg.36e39fd1af323bf51c7e.png" alt="" className='max-ms:h-[400px] lg:h-[90%] w-[500px] mt-[10%] ' /> 
   <div className='absolute top-10 left-0'>
<img src="https://x-shop-eight.vercel.app/_next/static/media/star.982a55e7.svg" alt="" className='h-12 w-12 md:w-20 md:h-20'/>
 </div>
   <div className='absolute bottom-10 right-0'>
<img src="https://x-shop-eight.vercel.app/_next/static/media/star.982a55e7.svg" alt="" className='h-12 w-12 md:w-20 md:h-20'/>
 </div>
 </div>
 
 
     </div>
     
 
 </>
       
      
  )
}

export default Hero