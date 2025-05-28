import React from 'react'
import Ellipse1 from "../assets/Ellipse1.png"
import Ellipse2 from "../assets/Ellipse2.png"
import Ellipse3 from "../assets/Ellipse3.png"
// import { MdOutlineArrowCircleUp } from "react-icons/md";
import { IoArrowUpSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
const OurCustomer = ({ white  }) => {

    const clickhandler=(e)=>{
        e.preventDefault();

       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className={` w-10/12  flex  flex-col mx-auto ${white ? 'text-black' : 'text-white'}  mt-40 mb-40`}>
            <p className='text-sm'> OUR CUSTOMERS</p>

            <div className='flex  justify-between items-center'>
                <div className='ml-2'>
                    <span className='text-6xl'>“</span>
                    <span className=' text-2xl md:text-3xl'>Understated, but unforgettable.
                        It feels like it was made for me</span>
                </div>
                <div>
                    <img src={Ellipse1}
                        alt='elipse Image'
                        className='w-full h-auto object-cover' />
                </div>
            </div>

            <div className='flex justify-between items-center gap-2'>
                <div>
                    <p className='text-sm ml-6'> RANDOM WOMEN</p>
                    <p className='text-xs ml-6'>NY,USA</p>
                </div>

                <div>
                    <div className='mt-4'>
                        <img src={Ellipse2}
                            alt='elipse Image'
                            className='w-full h-auto object-cover' />
                    </div>
                    <div className='mt-4'>
                        <img src={Ellipse3}
                            alt='elipse Image'
                            className='w-full h-auto object-cover' />
                    </div>
                </div>


            </div>
            <div className='border-b-2 mt-30 border-gray-600' />



            <div className='mt-30 flex justify-between items-center'>
                <div className='flex  '>
                    <span className=' text-xl md:text-3xl'>Eclypse</span>
                    <MdArrowOutward className="" />
                </div>

                <div className={`${white ? 'bg-black text-white' : 'text-black bg-white'} rounded-full p-2`}>
                    <IoArrowUpSharp onClick={clickhandler} className='text-2xl hover:cursor-pointer'  />
                </div>
            </div>

            <div className='flex justify-between items-baseline-last mt-4'>
                <div className='flex justify-between items-baseline-last gap-1 md:gap-6'>
                    <div className='text-xs md:text-xl'>
                        <p>Home &nbsp; /  &nbsp;About  &nbsp;/ &nbsp;Buy  &nbsp;/</p>
                        <p>Our customers  &nbsp;/</p>
                        <p>Contacts</p>
                    </div>
                    <div className='text-sm'>
                        <div>
                            <p className='text-xs  text-gray-400'>CONTACT</p>
                            <p className='md:text-2xl'>+91 123-456-7890</p>
                        </div>
                        <div className='mt-8 '>
                            <p className='text-xs text-gray-400' >EMAIL</p>
                            <p className='text-xs'>eclypse@gmail.com</p>
                        </div>

                    </div>
                </div>

                <div >


                    <sup className="text-xs text-gray-400 font-medium justify-end">
                        © Eclypse 2025
                    </sup>
                </div>
            </div>






        </div>
    )
}

export default OurCustomer
