'use client'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuComponent } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { useState } from 'react';

const FormOrder = () => {
    const [isOpenBuyerInfo,setIsOpenBuyerInfo] = useState(false)
    const [isOpenSellerInfo,setIsOpenSellerInfo] = useState(false)
    const [isOpenProductNService,setIsOpenProductNService] = useState(false)
    const [isOpenAddDeliveryInfo,setIsOpenAddDeliveryInfo] = useState(false)



    const handleOpenBuyerInfo = () => {
        setIsOpenBuyerInfo(!isOpenBuyerInfo)
    }

    const handleOpenSellerInfo = () => {
        setIsOpenSellerInfo(!isOpenSellerInfo)
    }

    const handleOpenProductNService = () => {
        setIsOpenProductNService(!isOpenProductNService)
    }

    const handleOpenAddDeliveryInfo = () => {
        setIsOpenAddDeliveryInfo(!isOpenAddDeliveryInfo)
    }

  return (
    <div>
        {/*SECTION BUYER INFO*/}
        <div className='border-gray-800 my-4 pb-4 border-b '>
        <div className='flex justify-start '>
        <CgProfile className="text-2xl mr-2" />
        <div className='w-[93%]'>
            Buyer info
        </div>
        {isOpenBuyerInfo ?
        <FaMinus className='col-span-1 text-green-600' onClick={handleOpenBuyerInfo}/>
        :
        <FaPlus className='col-span-1 text-green-600' onClick={handleOpenBuyerInfo} />
        }       
        </div>
        <div>
        {isOpenBuyerInfo ? "Isi":""}
        </div>        
        </div>
        {/*SECTION SELLER INFO*/}
        <div className='border-gray-800 my-4 pb-4 border-b '>
        <div className='flex justify-start '>
        <HiOutlineBuildingOffice2 className="text-2xl mr-2" />
        <div className='w-[93%]'>
            Seller Info
        </div>
        {isOpenBuyerInfo ?
        <FaMinus className='col-span-1 text-green-600' onClick={handleOpenSellerInfo}/>
        :
        <FaPlus className='col-span-1 text-green-600' onClick={handleOpenSellerInfo} />
        }       
        </div>
        <div>
        {isOpenSellerInfo ? 
        <div className="my-4">
            <select className="select select-bordered w-full max-w-xs rounded-3xl">
            <option disabled selected>Search Seller</option>
            <option>Han Solo</option>
            <option>Greedo</option>
            </select>
        </div>
        :
        ""}
        </div>
        </div>
        {/* SECTION PRODUCT SERVICE */}
        <div className='border-gray-800 my-4 pb-4 border-b '>
        <div className='flex justify-start '>
        <LuComponent className="text-2xl mr-2" />
        <div className='w-[93%]'>
            Product & Service
        </div>
        {isOpenBuyerInfo ?
        <FaMinus className='col-span-1 text-green-600' onClick={handleOpenProductNService}/>
        :
        <FaPlus className='col-span-1 text-green-600' onClick={handleOpenProductNService} />
        }       
        </div>
        <div>
        {isOpenProductNService ?
        <div className="flex flex-col gap-4 ">
            <div>
            <button className="btn btn-outline btn-success rounded-full">Add From Catalogue</button>
            </div>
            <div>
            <button className="btn btn-outline btn-success rounded-full">Add New</button>
            </div>
        
        
        </div>
         :
         ""}
        </div>        
        </div>
        {/*ADD DELIVERY INFO*/}
        <div className='border-gray-800 my-4 pb-4 border-b '>
        <div className='flex justify-start '>
        <CiDeliveryTruck className="text-2xl mr-2" />
        <div className='w-[93%]'>
            Add Delivery Info
        </div>
        {isOpenBuyerInfo ?
        <FaMinus className='col-span-1 text-green-600' onClick={handleOpenAddDeliveryInfo}/>
        :
        <FaPlus className='col-span-1 text-green-600' onClick={handleOpenAddDeliveryInfo} />
        }       
        </div>
        <div>
        {isOpenAddDeliveryInfo ? 
        <textarea className="textarea textarea-bordered w-full" placeholder="Delivery Info"></textarea>
        :
        ""}
        </div>        
        </div>
        <div className='bg-green-100 p-4 rounded-xl'>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4">
            <div>
            Delivery Fee
            </div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4">
            <div>
            Additional Discount
            </div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4">
            <div>
            Subtotal
            </div>
            <div>
            
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4 border-b-2 pb-4">
            <div>
            Additional Tax
            </div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4">
            <div>
            Grand Total Amount
            </div>
            <div>
            
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4 border-b-2 pb-4">
            <div>
            Total Discount
            </div>
            <div>
            
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 items-center mt-4 pb-4">
            <div>
            Payable Amount
            </div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='flex justify-end'>
                0.00
            </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default FormOrder