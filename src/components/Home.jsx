import React from 'react'
import HeroImg from "../assets/HeroImg.png"
import { MdArrowOutward } from "react-icons/md";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import Frame11 from "../assets/Frame11.png"
import Frame12 from "../assets/Frame12.png"
import Frame13 from "../assets/Frame13.png"
// import image6 from "../assets/image6.png"
import video from "../assets/video.mp4"
import { FaArrowDown } from "react-icons/fa";
const Home = ({ white,setBuy }) => {

    // here it will set buy true or false 

  const onClickHandler = (e) => {
    e.preventDefault();
    setBuy((prevBuy) => !prevBuy);
  };
    return (
        <div className={`w-full mx-auto mt-[70px] ${white ? 'text-black' : 'text-white'} mb-5`}>
            <div className='w-10/12 mx-auto mt-[70px]  mb-5 '>

                <div className=' flex justify-between items-end mb-8 '>
                    <p className="text-2xl md:text-8xl  font-light">
                        Eclyps
                        <span className="inline-block">
                            e
                            <sup className="text-sm md:text-3xl font-extrabold 
                        align-super ml-1">®</sup>
                        </span>
                    </p>

                    {/* This will now be bottom-right of the text container */}
                    <sup className=" bottom-0 right-0 text-sm
                 font-semibold">
                        © 2025
                    </sup>

                </div>



                <div className='relative'>
                    <img src={HeroImg} className='w-full h-auto object-cover'>
                    </img>
                    <p className=' absolute text-xs bottom-3 right-4 md:bottom-6 md:right-10 md:text-3xl'>A silhouette worth remembering</p>
                </div>


                <div className='mt-20'>
                    <p className=''>Rooted in a philosophy of quiet luxury,
                        <br /> our garments are designed to speak softly in <br />
                        cut,
                        in movement, in presence.</p>
                </div>

                <div
                    className={`
                   mt-20 inline-flex items-center gap-2  cursor-pointer 
                   border-b-2 ${white ? 'border-black' : ' border-white'}
                   pb-4  
                   hover:border hover:border-violet-600 hover:rounded
                   transition-all duration-300`}
                >
                    Learn more about Eclypse
                    <MdArrowOutward />
                </div>

                <div className='grid grid-cols-3 grid-rows-2  gap-4 w-full'>
                    <img src={image1}
                        alt='first'
                        className='col-span-2 row-span-1 w-full h-auto object-cover' />



                    <img
                        src={image2}
                        alt="Second"
                        className="w-full h-auto object-cover"
                    />

                    {/* Third image */}
                    <img
                        src={image3}
                        alt="Third"
                        className="w-full h-auto object-cover"
                    />

                    {/* Fourth image */}
                    <img
                        src={image4}
                        alt="Fourth"
                        className="w-full h-auto object-cover"
                    />

                    {/* Fifth image */}
                    <img
                        src={image5}
                        alt="Fifth"
                        className="w-full h-auto object-cover"
                    />
                </div>



                <p className='text-3xl mt-26'>Silhouette No. 1 – Vermilion</p>
            </div >

          


            <div className="w-full flex flex-col   md:flex-row mx-auto md:w-11/12 lg:w-11/12 md:mx-auto lg:mx-auto mt-40  md:justify-between lg:justify-between bg-white md:gap-8  ">
                <div className='w-full md:w-1/2 lg:w-1/2'>
                    <video
                        src={video}
                        className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[120vh] object-cover  rounded-md"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
                <div className='px-4 md:flex md flex-col md:w-1/2 mt-8 md:mr-8 '>
                    <p className="  hidden md:block md:text-black md:mb-8">A tailored composition in motion. Cut from structured
                        wool with a sculpted shoulder and softened hem,
                        this piece captures presence without force. Worn
                        here in the stillness of a city in motion.</p>
                    <div className=' grid grid-cols-3 grid-rows-1 gap-4 w-full'>
                        <img src={Frame12}
                            alt='fame12'
                            className='col-span-1 row-span-1 w-full h-auto object-cover' />

                        <img src={Frame11}
                            alt='fame11'
                            className='col-span-1 row-span-1 w-full h-auto object-cover' />

                        <img src={Frame13}
                            alt='fame13'
                            className='col-span-1 row-span-1 w-full h-auto object-cover' />
                    </div>
                    <div className='border-b-2  border-b-gray-300 mt-10'>
                    </div>


                    <div className='text-black mt-16'>
                        <span className=' font-extrabold text-4xl'>₹ 7,999 </span> <span className='text-gray-500'>MRP incl. of all taxes</span>
                    </div>

                    <div className='mt-8'>
                        <span className='text-2xl  text-gray-500  mr-4'>Please select a size</span> <span className='text-gray-500'>Size chart</span>
                    </div>

                    <div className='flex gap-1 md:gap-8 mt-6'>
                        <button className='px-6 py-2 bg-gray-400'>XS</button>
                        <button className='px-6 py-2 bg-gray-400'>S</button>
                        <button className='px-6 py-2 bg-gray-400'>M</button>
                        <button className='px-6 py-2 bg-gray-400'>L</button>
                        <button className='px-6 py-2 bg-gray-400'>XL</button>
                    </div>
                    <div className='border-b-2  border-b-gray-500 mt-16'>
                    </div>

                    <div className='flex flex-col-reverse md:flex-row md:w-full md:flex  md:justify-between mt-16'>
                        <button className='bg-gray-500 gap-2 text-sm mb-2 px-6 py-3  md:px-6  md:py-3 rounded-xl  '>ADD TO CART</button>
                        <button onClick={onClickHandler} className={` text-sm mb-2 px-6 py-3 bg-black text-white '}  md:w-[70%]  md:py-3 rounded-xl hover:bg-red-500`}>BUY</button>
                    </div>

                </div>


            </div>







            <div className='w-10/12 mx-auto mt-40 space-y-6'>
                <div className={`flex justify-between items-center border-b ${white ? 'border-black' : 'border-white'} pb-14`}>
                    <p className='text-xl md:text-3xl'>Size & fit</p>
                    <FaArrowDown className='text-xl md:text-3xl' />
                </div>

                <div className={`flex justify-between items-center border-b ${white ? 'border-black' : 'border-white'} pb-14`}>
                    <p className='text-xl md:text-3xl'>Delivery & Returns</p>
                    <FaArrowDown className='text-xl md:text-3xl' />
                </div>

                <div className={`flex justify-between items-center border-b ${white ? 'border-black' : 'border-white'} pb-14`}>
                    <p className='text-xl md:text-3xl'>How this was made</p>
                    <FaArrowDown className='text-xl md:text-3xll' />
                </div>
            </div>

        </div>

    )
}

export default Home
