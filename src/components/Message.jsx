import React, { useEffect } from 'react'

function Message({ patient, closeModal }) {

    const close = () => {
        closeModal("close")
    }

    
    return (
        <div className="fixed  inset-0 flex items-center justify-end z-50 p-10 bg-black bg-opacity-50">

            <div className=" w-full max-w-md max-h-full ">
                <div className=" bg-[#E4FBFB] rounded-lg shadow p-3">
                    <div className='flex justify-between'>
                        <div>
                            <span>{patient.orderNo}</span>
                        </div>
                        <div>
                            <button type="button" className=" text-white bg-[#1F6CAB] hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1 ml-auto inline-flex items-center" onClick={close}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                    </div>


                    <div>
                        <input type="text" className='h-28 w-full border border-black' placeholder='Type your messages here' />
                    </div>

                    <div className='text-right'>
                        <button className='p-1 text-white bg-[#1F6CAB] rounded-md'>send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Message
