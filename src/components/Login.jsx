import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLocalPhone } from "react-icons/md";
import { loginApi } from '../services/userApis';
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Login() {
    const [values,setValues] = useState({username:'',password:''})
    const [error,setError] = useState(false)

    // useEffect(()=>{
    //     if(error){
    //         setTimeout(()=>{
    //             setError(false)
    //         },5000)
    //     }
    // },[error])


    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("This field is required"),
        password: Yup.string().required("This field is required ")
    })

  

    const postData = {
        client_id: "ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa",
        client_secret: "Yjq2KXplGi6Niarcp1gn6PP7OrMDlP",
        user_name: "daya",
        password: "123",
        grant_type: "client_credentials"
    };

    const onSubmit = ()=>{
        setError(false)
        loginApi(postData).then((res)=>{
            console.log(res,"Res");
            if(!res.data ){
                setError(true)
            }
            else if(res.data.error){
                setError(true)
            }else{
                setError(false)
            }
            console.log(res.data.error,"datat")
        }).catch((err)=>{
            console.log(err,"err>>>");
        })
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (

        <section className=' h-screen flex justify-center items-center loginBody flex-col'>


            <div className='bg-white p-2 md:p-3 flex justify-center items-center flex-col rounded-2xl m-2 '>
                <div className='w-full  flex justify-start'>  <img src="/images/vector.png" alt="" className='h-4 w-4' /></div>
                <img src="/images/logo.jpg" alt="" className='text-center' />
                <div className='w-full pe-5 flex justify-end'>  <img src="/images/vector.png" alt="" className='h-8 w-8' /></div>
                <h1 className='text-[#1F6CAB] font-bold text-center '>Report Downlad portal</h1>

                <div className='p-2 md:p-5 bg-[#3EC1D0] flex flex-col gap-3 rounded-2xl  m-2 md:m-5 '>
                    <h1 className='text-center font-bold text-2xl text-[#1F6CAB] '>Login</h1>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[#505050]'>Username</label>
                        <input type="text" name="username" id="username" className=' w-80 p-2 rounded-md' placeholder='Enter email id' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                        {formik.touched.username && formik.errors.username ? <p className="text-sm text-red-600">{formik.errors.username}</p> : null}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-[#505050]'>Password</label>
                        <input type="password" name="password" id="password" className=' w-80 p-2 rounded-md' placeholder='Password'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                        {formik.touched.password && formik.errors.password ? <p className="text-sm text-red-600">{formik.errors.password}</p> : null}
                    </div>

                    <div className='text-center'>
                        <button className='bg-[#1F6CAB] w-40 p-2 text-white rounded-md'  onClick={formik.handleSubmit}>SUBMIT</button>
                    </div>

                    <Link to={"/resetpassword"} className='text-center underline text-sm font-medium'>Reset Password</Link>
                </div>
               {error && <span className='text-xs text-red-600 font-bold mb-2'>Wrong Credentials! your email Id or password entered is wrong</span>}
                <div className="w-full flex">
                    <div className="w-1/3 flex items-start">
                        <img src="/images/vector.png" alt="" className="h-12 w-12" />
                    </div>
                    <div className="w-2/3 flex items-start">
                        <MdOutlineLocalPhone className='text-lg text-[#1F6CAB] font-bold h-5 w-5 mt-1' />
                        <span className='text-lg text-[#1F6CAB] font-bold'>(+91) 9288008801</span>
                    </div>
                </div>

                <span className="text-xs  p-2">
                    I hereby agree and accept the
                    <span className="text-blue-500">Terms of service</span>
                    and
                    <span className="text-blue-500">Privacy policy</span>
                </span>

            </div>

            <div className="flex flex-col sm:flex-row justify-around w-full mt-2 text-white text-center sm:text-left text-xs md:text-sm">
                <span className="mb-2 sm:mb-0">Copyright © 2023 Access Home Lab Solutions</span>
                <span>
                    All Rights Reserved |
                    <span className="text-[#00D3EB]">Terms and Conditions</span> |
                    <span className="text-[#00D3EB]">Privacy Policy</span>
                </span>
            </div>

        </section>
    )
}
