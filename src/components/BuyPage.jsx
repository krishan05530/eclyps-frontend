import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";


const BuyPage = ({ white,setBuy }) => {
 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        apt: '',
        state: '',
        zip: '',
    })



    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // You can now send `formData` to backend or store it
    };

    return (


        <div className={`w-full px-4 md:w-10/12 flex    flex-col md:flex-col ${white ? 'text-black' : 'text-white'} `}>

            <button onClick={() =>{ 
setBuy(false)

            }
                } className='flex  hover:cursor-pointer flex-row items-center mt-16 md:items-center md:mt-16 md:text-3xl ' >
                < IoIosArrowBack  className='md:mr-8' />
                <span> Shipping address </span>
            </button>

            {/* main */}
            <div className='w-full flex flex-col items-center  mx-auto md:flex-row gap-4'>

                {/* left */}
                <div className='flex flex-col w-full px-4 py-4 mt-10 md:flex-col md:w-1/2 md:mt-16 border-4 md:py-4 md:px-4 rounded-2xl border-gray-300 border-t-2  '>

                    {/* // create a from */}
                    <div className='flex gap-4 items-center md:items-center md:gap-4 md:text-3xl md: py-4  md:px-4
                '>

                        <div className='relative  w-12 h-12 border-2 rounded-full border-red-500 '>
                            <div className=' absolute w-5 h-5  top-1/2 left-1/2  border-2 rounded-full border-red-500 bg-red-600 transform -translate-x-1/2 -translate-y-1/2'>

                            </div>
                        </div>
                        <p>Add new Address </p>


                    </div>

                    <div className='flex flex-col '>
                        {/* create order summary */}
                        <form className='flex flex-col mb-8' onSubmit={handleSubmit}>
                            <div className='flex justify-between items-center  gap-4'>
                                <div className=' flex flex-col gap-2 flex-grow'>
                                    <label>First Name</label>
                                    <input type='text'
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder='enter you full name'
                                        className='border-2  rounded-xl  border-gray-400 px-8 py-4 w-full
                                    '
                                    >

                                    </input>
                                </div>

                                <div className=' flex flex-col flex-grow gap-2 '>
                                    <label>Last Name</label>
                                    <input type='text'
                                        name='lastName'
                                        onChange={handleChange}
                                        value={formData.lastName}
                                        placeholder='enter you last name '
                                        className='border-2  rounded-xl  border-gray-400  px-8 py-4 w-full'
                                    >

                                    </input>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-2 mt-4'>
                                <label >Street Address</label>
                                <input type='text'
                                    name='street'
                                    onChange={handleChange}
                                    value={formData.street}
                                    placeholder='enter you last name'
                                    className='border-2   rounded-xl  border-gray-400 px-8 py-4'
                                >

                                </input>
                            </div>

                            <div className='flex  mt-4  gap-4'>
                                <div className='flex flex-col gap-2 flex-grow '>
                                    <label>Apt No</label>
                                    <input type='text' name='apt'
                                        value={formData.apt}
                                        onChange={handleChange}
                                        placeholder=''
                                        className='border-2   rounded-xl  border-gray-400 px-2 py-3 w-full'
                                    >

                                    </input>
                                </div>
                                <div className='flex flex-col gap-2  flex-grow'>
                                    <label>state</label>
                                    <input type='text'
                                        value={formData.state}
                                        onChange={handleChange}
                                        name='state'
                                        placeholder=''
                                        className='border-2  rounded-xl  border-gray-400 px-2 py-3 w-full'>

                                    </input>
                                </div>
                                <div className='flex flex-col gap-2 flex-grow '>
                                    <label>Zip</label>
                                    <input type='text'
                                        value={formData.zip}
                                        name='zip'
                                        placeholder=''
                                        onChange={handleChange}
                                        className='border-2  rounded-xl  border-gray-400 px-2 py-3 w-full'>

                                    </input>
                                </div>
                            </div>





                            <div className='flex flex-col mt-4 md:flex md:flex-row  md:justify-between md:mt-8'>
                                <button className='border-2 border-gray-400  rounded-xl  px-8 py-4'>Cancel</button>
                                <button type='submit' className={` border-2 mt-4 border-gray-400 rounded-xl px-8 py-4 ${white ? 'bg-black text-white' : 'bg-white text-black'}  hover:bg-red-500`}>Save this Address</button>
                            </div>



                        </form>

                    </div>


                </div>

                {/* right */}
                <div className='w-full mt-16 py-4 md:w-1/2 md:mt-16 border-4 md:py-4 md:px-4 rounded-2xl border-gray-300 md:border-t-2 bg-gray-300'>
                    <div className='flex flex-col w-[80%]  mx-auto text-xl'>
                        <p>By placing your order, you agree to our company Privacy policy and Conditions of use.</p>
                        <div className='border-b-2 border-gray-300 w-full h-1 my-4'></div>
                        <div className='flex fle-col justify-start text-3xl mt-6 '>
                            <p>Order Summary</p>
                        </div>
                        <div className='flex flex-col justify-between mt-6 gap-4'>

                            <div className='flex justify-between'>
                                <div>Items - Silhouette No. 1 – Vermilion</div>
                                <div>7,999</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Shipping and handling:</div>
                                <div>200</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Before tax:</div>
                                <div>6,599</div>
                            </div>
                            <div className='flex justify-between'>
                                <div>Tax Collected:</div>
                                <div>1,400</div>
                            </div>
                        </div>
                        <div className='border-b-2 border-gray-300 w-full h-1 my-4'></div>

                        <div className='flex justify-between'>
                            <p>Order Total:</p>
                            <p>8,199</p>
                        </div>

                        <div className='mb-4 items-baseline-last mt-6'>
                            <button className={`w-full px-4 py-3 border-2 rounded-xl ${white ? 'bg-black text-white' : 'bg-white text-black'}  hover:bg-red-500`}>Place Order</button>
                        </div>

                    </div>

                </div>

            </div>






        </div>
    )
}

export default BuyPage
