import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";


function Footer() {
    return (
        <div className='bg-[#E4FBFB] border  flex flex-col md:flex-row justify-between items-center p-3 w-full'>
            <span className='text-xs'>Copyright © 2023 Access Home Lab Solutions</span>
            <div className=" flex items-start">
                <MdOutlineLocalPhone className='text-sm text-[#1F6CAB] font-bold h-5 w-5 mt-1' />
                <span className='text-lg text-[#1F6CAB] font-bold'>(+91) 9288008801</span>
            </div>
            <span className='text-xs'>All Rights Reserved | Terms and Conditions | Privacy Policy</span>
        </div>
    )
}

export default Footer
