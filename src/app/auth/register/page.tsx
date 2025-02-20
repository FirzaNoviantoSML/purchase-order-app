'use client'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import {Formik, Field,Form, ErrorMessage} from "formik"
import { authRegisterSchema } from '@/app/features/auth/register/schemas/authRegisterSchema';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Register = () => {
const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleSubmit = async (
    {name,email,password,role} :{name:string,email:string,password:string,role:string}
  ) => {
    setIsLoading(true)
    try {
     const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          name,password,email,role
        })
        toast.success(response.data.message)
        setIsLoading(false)
      
    } catch (error:any) {
     toast.error(error?.response?.data?.message || 'Something Went Wrong!')
     setIsLoading(false)
    }
  }

  return (
    <div className='flex justify-center h-[100vh] items-center'>
      <ToastContainer/>
        <div className="w-[30vw]">
            <div className="text-center text-2xl font-semibold mb-2">
            Register User
            </div>
                <Formik
                  initialValues={{
                    email:"",
                    password:'',
                    name: '',
                    role: ''
                  }}
                  validationSchema={authRegisterSchema}
                  onSubmit={(values) => 
                    handleSubmit(
                      {
                        name:values.name,
                        email:values.email,
                        password:values.password,
                        role:values.role
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
                <label className="input input-bordered flex items-center gap-2 mb-2 rounded-3xl">
                <CgProfile />
                <Field name="name" type="text" className="grow" placeholder="Type your name" />
                </label>
                <ErrorMessage name='name' className='text-red-700' component={'div'}/>
                <Field as='select' name="role" className="select select-bordered w-full mb-2 rounded-3xl">
                <option value="" disabled>User Role</option>
                <option value="ADMIN">Admin</option>
                <option value="MANAGER" >Manager</option>
                </Field>
                <ErrorMessage name='role' className='text-red-700' component={'div'}/>
                {
                                        values.email === "" || values.password === "" || values.name === "" || values.role === ""  || isLoading   ?
                                        <button disabled type='submit' className="btn btn-success w-full text-white rounded-full mb-2">
                                            {
                                                isLoading ?
                                                <AiOutlineLoading3Quarters className=" text-blue-500 animate-spin" />
                                                :
                                                ""
                                            }
                                            Register</button>
                                        :
                                        <button type='submit' className="btn btn-success w-full text-white rounded-full mb-2">Login</button>
                                    }
                <div className='flex justify-center mt-6'>
                   {"Already have an account? "} 
                    <Link href={"/auth/login"} className='text-green-700'>
                    Login
                    </Link>
                   </div>
                    </Form>
                    )}
                </Formik>
        </div>
    </div>
  )
}

export default Register