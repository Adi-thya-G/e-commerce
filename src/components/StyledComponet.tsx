
function StyledComponet() {
  return (
   
      <div className="w-[90%] p-3 py-10 bg-style-color lg:w-[80%] rounded-3xl mx-auto my-8">
  <h2 className="font-black text-2xl md:text-3xl text-center pb-6 lg:pb-12">
    BROWSE BY DRESS STYLE
  </h2>

  <div className="grid gap-6 justify-center">

    {/* Row 1 */}
    <div className="grid md:grid-cols-[40%_55%] gap-4">
      <div className="relative w-full h-48 md:h-72 rounded-3xl overflow-hidden">
        <h2 className="absolute top-6 left-6 font-semibold font-serif text-xl md:text-3xl">
          Casual
        </h2>
        <img
          src="https://x-shop-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery1.23e97210.png&w=1080&q=75"
          className="w-full h-full object-cover"
          alt="Casual Dress"
        />
      </div>

      <div className="relative w-full h-48 md:h-72 rounded-3xl overflow-hidden">
        <h2 className="absolute top-6 left-6 font-semibold font-serif text-xl md:text-3xl">
          Party
        </h2>
        <img
          src="https://x-shop-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery1.23e97210.png&w=1080&q=75"
          className="w-full h-full object-cover"
          alt="Party Dress"
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid md:grid-cols-[55%_40%] gap-4">
      <div className="relative w-full h-48 md:h-72 rounded-3xl overflow-hidden">
        <h2 className="absolute top-6 left-6 font-semibold font-serif text-xl md:text-3xl">
          Formal
        </h2>
        <img
          src="https://x-shop-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery1.23e97210.png&w=1080&q=75"
          className="w-full h-full object-cover"
          alt="Formal Dress"
        />
      </div>

      <div className="relative w-full h-48 md:h-72 rounded-3xl overflow-hidden">
        <h2 className="absolute top-6 left-6 font-semibold font-serif text-xl md:text-3xl">
          Gym
        </h2>
        <img
          src="https://x-shop-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery1.23e97210.png&w=1080&q=75"
          className="w-full h-full object-cover"
          alt="Gym Wear"
        />
      </div>
    </div>

  </div>
</div>

  )
}

export default StyledComponet