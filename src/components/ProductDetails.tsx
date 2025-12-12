import  { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  "https://x-shop-eight.vercel.app/_next/image?url=%2Fimg%2Fproducts%2Ftrousers%2Fsixth-june-carpenter-pants%2F4.jpg&w=3840&q=75", // front
  "https://x-shop-eight.vercel.app/_next/image?url=%2Fimg%2Fproducts%2Ftrousers%2Fsixth-june-carpenter-pants%2F4.jpg&w=3840&q=75", // back
  "https://x-shop-eight.vercel.app/_next/image?url=%2Fimg%2Fproducts%2Ftrousers%2Fsixth-june-carpenter-pants%2F4.jpg&w=3840&q=75", // close fit
 
];


const colors: string[] = ["floralwhite", "dimgrey"];

function ProductDetails() {
  const [size, setSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);

  let sliderRef1 = useRef<any>(null);
  let sliderRef2 = useRef<any>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="xl:flex gap-5 space-y-4 w-full pt-4 md:pt-6 lg:p-8 xl:pt-10 xl:h-screen justify-center h-[900px] mb-[300px] xl:mb-10">
      
      {/* Left - Image Sliders */}
      <div className="w-full xl:w-[40%] h-[60%] xl:h-full rounded-2xl space-y-3 p-7 2xl:space-y-10">
        
        {/* Main Slider */}
        <div className="w-full h-[70%] bg-gray-700 ">
          <Slider
            asNavFor={nav2}
            ref={(slider:any) => (sliderRef1.current = slider)}
            className="w-full h-[70%] bg-gray-700 "
          >
            {images.map((img, i) => (
              <div key={i} className="w-full h-[340px] xl:h-[430px] 2xl:h-[600px]">
                <img
                  src={img}
                  className="w-full h-full object-cover "
                  alt="product-image"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Slider */}
        <div className="w-full h-[20%] bg-gray-300  rounded-2xl ">
          <Slider
            asNavFor={nav1}
            ref={(slider:any) => (sliderRef2.current = slider)}
            slidesToShow={3}
            swipeToSlide
            focusOnSelect
            className="flex gap-2"
          >
            {images.map((img, i) => (
              <div key={i} className="roundex-2xl ">
                <img
                  src={img}
                  className={`w-full h-[120px] xl:h-[125px] 2xl:h-[170px] object-cover  ${
                    nav1?.innerSlider?.state.currentSlide === i
                  }`}
                  alt="product-thumbnail"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right - Product Info */}
      <div className="xl:w-[50%] h-[95%] shadow-md shadow-white rounded-2xl xl:p-6 space-y-4 p-4">
        <h2 className="font-black xl:text-3xl text-xl">
          {"adidas Climacool 1".toUpperCase()}
        </h2>

        {/* Rating */}
        <div className="flex gap-1 items-center">
          {[1, 2, 3, 4, 5].map((i:number) => (
            <FaStar key={i} size={20} className="text-amber-400" />
          ))}
          <h2>5/5</h2>
        </div>

        <p className="text-3xl font-semibold">$154.95</p>
        <p className="text-sm">
          This product is perfect for any occasion. Crafted from breathable
          material, ensuring superior comfort & style.
        </p>

        {/* Color Selection */}
        <hr className="text-gray-300 mt-6 mb-3" />
        <div className="grid gap-4">
          <p>Select Color</p>
          <div className="flex flex-wrap gap-4">
            {colors.map((element, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-2xl border-2 relative
                border-gray-300 flex justify-center items-center cursor-pointer"
                style={{ background: element }}
                onClick={() => setSelectedColor(element)}
              >
                {selectedColor === element && (
                  <FaCheck
                    size={15}
                    className="absolute text-black transition-all"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <hr className="text-gray-300" />
        <div className="grid gap-4">
          <p>Choose Size</p>
          <div className="flex flex-wrap gap-4">
            {["44", "46", "48", "50", "52"].map((ele, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-xl cursor-pointer border
                ${
                  size === ele
                    ? "bg-black text-white"
                    : "bg-slate-200 text-gray-800"
                }`}
                onClick={() => setSize(ele)}
              >
                {ele}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <hr className="text-gray-300 mb-4" />
        <button className="text-white bg-black w-full h-12 max-w-[500px] rounded-xl cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
