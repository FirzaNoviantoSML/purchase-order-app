"use client"
import { useState } from 'react'
import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";


const OrderTable = () => {
const [data] = useState([
    {type:"P",orderId:"38993",company:"DADEDS",person:"",status:"draft",updated:"03 mei 2025"},
    {type:"P",orderId:"38493",company:"DADEDS",person:"",status:"draft",updated:"02 mei 2025"},
    {type:"S",orderId:"58993",company:"DADEDS",person:"",status:"Awaiting Response",updated:"04 mei 2025"},
    
])
  return (
    <div>
        <div className="grid grid-flow-col grid-cols-12 mt-12 gap-4 items-center">
            <div className="col-span-6">
            <input type="number"  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="col-span-2">
                <input type='number'  placeholder="All Type" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <div className="col-span-2">
                <input type='number'  placeholder="All Status" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <div className="col-span-1">
                <input type='number'  placeholder="" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <div className="col-span-1">
                1-3 data
            </div>
            
        </div>
        <div className="overflow-x-auto mt-6 min-h-[60vh]">
        <table className="table">
            {/* head */}
            <thead className='bg-gray-300'>
            <tr>
                <th><input type="checkbox"></input></th>
                <th>Type</th>
                <th>Order no</th>
                <th>Company</th>
                <th>Person</th>
                <th className="text-center">Status</th>
                <th>Updated</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data?.map((item,index) => {
                return(
                    <tr key={index}>
                        <td><input type="checkbox"></input></td>
                        <td>
                            <div className={`${item.type === "P" ? "bg-red-400 text-red-900 ":"bg-blue-400 text-blue-900 " } rounded-xl w-12 h-12 flex justify-center items-center`}>
                            {item.type === ""?"-":item.type}
                            </div>
                        </td>
                        <td>{item.orderId === ""?"-":item.orderId}</td>
                        <td>{item.company === ""?"-":item.company}</td>
                        <td>{item.person === ""?"-":item.person}</td>
                        <td className="flex justify-center">
                            <div className="bg-slate-300 rounded-2xl py-2 px-4">
                            {item.status}
                            </div>
                        </td>
                        <td>{item.updated}</td>
                        <td><HiDotsHorizontal /></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
        <div className="flex justify-center">   
        <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
        </div>
        </div>
    </div>
  )
}

export default OrderTable