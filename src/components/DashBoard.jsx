import React, { useEffect, useState } from 'react';
import Header from './Header';
import { FaFilter, FaDownload } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Footer from './Footer';
import Message from './Message';

function DashBoard() {

    const [applyFilter, setApplyFilter] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [patient,setPatient] = useState(false)

    const modal = (patient)=>{
        setShowModal(!showModal)
        setPatient(patient)
        
    }

    const closeModal = (data)=>{
        if(data === "close"){
            setShowModal(false)
        }
    }



    useEffect(() => {
        if (applyFilter) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [applyFilter]);




    const filter = () => {
        setApplyFilter(!applyFilter)
    }

    const patientData = [
        {
            orderNo: "A19023",
            date: "01/05/2023",
            patientName: "Sankaranarayanan",
            hospitalID: "DH2023/0001245",
            testName: "Anti Leukemia 1 Serum",
            doctorName: "Dr. Arun K Thambi",
            eta: "03/05/2023",
            status: "Ready",
            age: 60,
            gender: "male"
        },
        {
            orderNo: "A19024",
            date: "01/05/2023",
            patientName: "Baby. Alan",
            hospitalID: "DH2023/0001242",
            testName: "Anti Leukemia 1 Serum",
            doctorName: "Dr. Abdul Siddique",
            eta: "03/05/2023",
            status: "Partial Report",
            age: 6,
            gender: "male"

        },
        {
            orderNo: "A19025",
            date: "01/05/2023",
            patientName: "Baby. Anirudh",
            hospitalID: "DH2023/0001212",
            testName: "Anti Leukemia 1 Serum",
            doctorName: "Dr. Raveendran",
            eta: "03/05/2023",
            status: "Lab dropped",
            age: 60,
            gender: "male"

        },
        {
            orderNo: "A19026",
            date: "01/05/2023",
            patientName: "Sankaranarayanan Warrier",
            hospitalID: "DH2023/0001247",
            testName: "Comprehensive leukemia - Basic Lineage Panel",
            doctorName: "Dr. Vignesh Muraleedharan",
            eta: "03/05/2023",
            status: "Ready",
            age: 80,
            gender: "male"
        },
        // Add more patient data as needed
    ];

    const getTooltipContent = (patient) => {
        return (
            `<div style="background-color: #4CAF50; color: white; border: none;">
            <strong>${patient.patientName}</strong> <br/>
            <strong>Age:</strong> ${patient.age}
            <strong>Gender:</strong> ${patient.gender}<br/>
            <strong>Bill No:</strong> ${patient.hospitalID}
            <strong>Bill Date:</strong> ${patient.date}
           
        </div>`
        )
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-1 py-2 px-4 md:py-4 md:px-10 bg-[#E4FBFB]'>
                <div className='flex justify-between md:flex-row flex-col'>
                    <h1 className='text-[#1F6CAB] text-lg font-semibold'>Patient Reports</h1>

                    <div className='flex flex-col md:flex-row items-start md:space-x-3 space-x-0 md:space-y-0 space-y-3 mt-3 md:mt-0'>
                        <button className="bg-[#1F6EAE] p-1 text-white flex items-center" onClick={filter}>
                            APPLY FILTER
                            <FaFilter className="" />
                        </button>
                        <div className='relative w-full md:w-auto '>
                            <input type="text" className='w-full md:w-[28rem] p-1 bg-[#F4F4F4] border border-black' placeholder='Search by Doctor Name/ Patient Name/ Test Name' />
                            <CiSearch className='absolute top-0 right-0 font-extrabold h-8 w-8 text-[#9ca3af]' />
                        </div>
                    </div>


                </div>


                {applyFilter && (
                    <div className={`transition-div ${isVisible ? 'transition-visible' : ''} mb-2 bg-white w-full mt-2 border border-black flex flex-col gap-3`}>
                        <div className='flex md:flex-row flex-col gap-2 p-1'>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="From Date" className="input-label">From Date</label>
                                <input type="date" name="fromdate" id="" className='input-field' />
                            </div>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="To Date" className="input-label">To Date</label>
                                <input type="date" name="todate" id="" className='input-field' />
                            </div>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="referBy" className="input-label">Refer by</label>
                                <select name="referBy" id="referBy" className='input-field'>
                                    <option value="" disabled selected>DOCTOR NAME</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Michael Brown">Michael Brown</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-2 p-1'>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="Patient Name" className="input-label">Patient Name</label>
                                <input type="text" name="patientname" id="" className='input-field' />
                            </div>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="Hospital Id" className="input-label">Hospital Id</label>
                                <input type="text" name="hospitalid" id="" className='input-field' />
                            </div>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="Status" className="input-label">Status</label>
                                <select name="status" id="status" className='input-field'>
                                    <option value="" disabled selected>Ready</option>
                                    <option value="John Doe">Ready</option>
                                    <option value="Jane Smith">Partial Report</option>
                                    <option value="Michael Brown">Lab Dropped</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-2 p-1'>
                            <div className='flex justify-between md:justify-center items-center gap-1 w-full md:w-1/3'>
                                <label htmlFor="Bill No:" className="input-label">Bill No:</label>
                                <input type="text" name="billno" id="" className='input-field' />
                            </div>
                        </div>
                        <div className='w-full flex justify-center md:justify-end gap-2 border border-black px-32 py-1 bg-[#E4FBFB]'>
                            <button className='p-2 bg-[#1F6CAB] text-white rounded-md min-w-24 flex items-center justify-center gap-1'>
                                <CiSearch className=' font-extrabold h-5 w-5 ' />
                                Search
                            </button>
                            <button className='p-2 bg-[#F46C09] text-white rounded-md min-w-24 flex gap-1 items-center justify-center'>
                                <MdClear className=' font-extrabold h-5 w-5' />
                                Clear
                            </button>
                        </div>
                    </div>
                )}

                <div className="relative py-5 h-full overflow-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-white border shadow-inner">
                            <tr>
                                <th scope="col" className="px-6 py-3">Order No</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Patient Name</th>
                                <th scope="col" className="px-6 py-3">Hospital ID</th>
                                <th scope="col" className="px-6 py-3">Test Name</th>
                                <th scope="col" className="px-6 py-3">Doctor Name</th>
                                <th scope="col" className="px-6 py-3">ETA</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientData.map((patient, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b border-black"
                                    data-tooltip-id={`tooltip-${index}`}
                                    data-tooltip-html={getTooltipContent(patient)}
                                >
                                    <td className="px-6 py-4">{patient.orderNo}</td>
                                    <td className="px-6 py-4">{patient.date}</td>
                                    <td className="px-6 py-4">{patient.patientName}</td>
                                    <td className="px-6 py-4">{patient.hospitalID}</td>
                                    <td className="px-6 py-4">{patient.testName}</td>
                                    <td className="px-6 py-4">{patient.doctorName}</td>
                                    <td className="px-6 py-4">{patient.eta}</td>
                                    <td className="px-6 py-4">
                                        <div className={`p-2 ${patient.status === 'Ready' ? 'bg-green-500' : patient.status === 'Partial Report' ? 'bg-yellow-500' : 'bg-red-500'} text-start text-[#505050] rounded-lg w-min-20 font-semibold`}>
                                            {patient.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex justify-evenly text-blue-700'>
                                            <FaDownload className='h-6 w-6' />
                                            <FaMessage className='h-6 w-6' onClick={()=>modal(patient)} />
                                        </div>
                                    </td>
                                    <ReactTooltip id={`tooltip-${index}`} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

            {showModal && <Message patient={patient} closeModal={closeModal}/>}
        </div>
    );
}

export default DashBoard;




