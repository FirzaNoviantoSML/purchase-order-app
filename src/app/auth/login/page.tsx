'use client'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import {Formik, Field,Form, ErrorMessage} from "formik"
import { authLoginSchema } from '@/app/features/auth/register/schemas/authLoginSchema';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { redirect } from "next/navigation";
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
const [isRedirect,setIsRedirect] = useState<boolean>(false)
const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleLogin = async (
        {email,password} :{email:string,password:string}
        
      ) => {
        console.log("trigger")
        setIsLoading(true)
        try {
        const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
            email,password
        })

        if(response?.data ){
            setIsRedirect(true)
        }


        
        
            toast.success(response.data.message)
          
        } catch (error:any) {
         toast.error(error?.response?.data?.message || 'Something Went Wrong!')
         setIsLoading(false)
        }
      }

      if(isRedirect){
        redirect("/dashboard")
      }
  return (
    <div className='flex justify-center h-[100vh] items-center'>
      <ToastContainer/>
        <div className="w-[30vw]">
            <div className="text-center text-2xl font-semibold mb-2">
            Login User
            </div>
                <Formik
                  initialValues={{
                    email:"",
                    password:''
                  }}
                  validationSchema={authLoginSchema}
                  onSubmit={(values) => 
                    handleLogin(
                      {
                        email:values.email,
                        password:values.password,
                      }
                    )
                  }
                  >
                {({values}) => (
                    <Form>
                    <label className="input input-bordered flex items-center gap-2 mb-2 rounded-3xl">
                    <MdOutlineEmail />
                    <Field name="email" type="text" className="grow" placeholder="Email" />
                    </label>
                    <ErrorMessage name='email' className='text-red-700' component={'div'}/>
                    <label className="input input-bordered flex items-center gap-2 mb-2 rounded-3xl">
                    <TbLockPassword />
                    <Field name="password" type="password" className="grow" placeholder="Password" />
                    </label>
                    <ErrorMessage name='password' className='text-red-700' component={'div'}/>
                    {
                        values.email === "" || values.password === "" || isLoading   ?
                        <button disabled type='submit' className="btn btn-success w-full text-white rounded-full mb-2">
                            {
                                isLoading ?
                                <AiOutlineLoading3Quarters className=" text-blue-500 animate-spin" />
                                :
                                ""
                            }
                            Login</button>
                        :
                        <button type='submit' className="btn btn-success w-full text-white rounded-full mb-2">Login</button>
                    }
                </Form>
                )}
                </Formik>
                <div className='flex justify-center mt-6'>
                   {"Dont have account ? "} 
                    <Link href={"/auth/register"} className='text-green-700'>
                    click here for register
                    </Link>
                   </div>
        </div>
    </div>
  )
}

export default Login