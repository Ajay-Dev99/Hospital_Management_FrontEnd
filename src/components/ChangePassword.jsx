import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'
function ChangePassword() {
    return (
        <div>
            <section className='h-screen flex justify-between items-center bg-[#E4FBFB] '>
                <div className='flex-1 flex justify-evenly items-center flex-col h-full'>
                    <div className='bg-white p-2 md:p-8 flex justify-center items-center flex-col rounded-3xl'>
                        <div className='w-full flex justify-start'>
                            <img src="/images/vector.png" alt="" className='h-4 w-4' />
                        </div>
                        <img src="/images/logo.jpg" alt="" className='text-center' />
                        <div className='w-full pe-5 flex justify-end'>
                            <img src="/images/vector.png" alt="" className='h-8 w-8' />
                        </div>
                        <div className='p-2 md:p-5 bg-[#3EC1D0] flex flex-col gap-3 rounded-2xl ms-2 mt-2 me-2 md:ms-5 md:me-5 md:mt-5'>
                            <h1 className='text-center font-bold text-2xl text-[#1F6CAB] '>Change Password</h1>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='text-[#505050]'>Enter New Password</label>
                                <input type="text" name="" id="" className='w-80 p-2 rounded-md' placeholder='New password' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='text-[#505050]'>Re-enter New Password</label>
                                <input type="text" name="" id="" className='w-80 p-2 rounded-md' placeholder='Re-enter new password' />
                            </div>

                            <div className='text-center'>
                                <button className='bg-[#1F6CAB] w-40 p-2 text-white rounded-md'>CONFIRM</button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-[#1F6CAB] underline font-semibold">
                            <FaAnglesLeft />
                            <Link to={"/login"}>Back To Login</Link>
                        </div>



                        <div className=" flex  justify-items-start w-full my-3">
                            <img src="/images/vector.png" alt="" className="h-12 w-12" />
                        </div>


                        <div className="flex justify-items-center items-start">
                            <MdOutlineLocalPhone className='text-lg text-[#1F6CAB] font-bold h-5 w-5 mt-1' />
                            <span className='text-lg text-[#1F6CAB] font-bold'>(+91) 9288008801</span>
                        </div>


                    </div>

                </div>
                <div className='flex-2 h-full hidden md:block'>
                    <img src="images/GirlImage.png" alt="" className='h-full w-full object-cover' />
                </div>


            </section>


            <div className="flex flex-col sm:flex-row justify-center   w-full mt-2 text-black  sm:text-left text-xs md:text-sm absolute bottom-6">
                <span className="mb-2 sm:mb-0 md:w-1/2 w-full text-center">Copyright © 2023 Access Home Lab Solutions</span>
                <span className='md:w-1/2 w-full text-center'>
                    All Rights Reserved |
                    <span className="text-[#00D3EB]">Terms and Conditions</span> |
                    <span className="text-[#00D3EB]">Privacy Policy</span>
                </span>
            </div>
        </div>
    )
}

export default ChangePassword
