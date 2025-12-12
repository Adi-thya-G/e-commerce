
import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import StyledComponet from '../components/StyledComponet'
function Home() {
  return (
    <div className='grid md:lg-8 lg:gap-12 w-full'>
       <Hero/>
       {
        [{},{},{}].map((ele)=>(
          <div className='grid gap-4 py-3'>
        <h2 className='font-black bg-white w-full text-center p-2 text-2xl lg:text-4xl '>NEW ARRIVALS</h2>
        <div className='w-full p-2 justify-center place-items-center gap-2 grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-4 '>
        <Card/>
         <Card/>
         <Card/>
         <Card/>
       </div>
       <div className='flex w-full justify-center place-items-center'>
        <button className='border-2 border-dashed p-2 rounded-2xl px-8 font-semibold cursor-pointer' >
          View All
        </button>
       </div>
       </div>
        ))
       }
      <StyledComponet/>
      
    </div>
  )
}

export default Home