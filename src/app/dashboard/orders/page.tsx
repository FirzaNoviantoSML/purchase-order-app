import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import OrderTable from '../../components/orders/Table';
import Link from 'next/link';

const Orders = () => {
  return (
    <div className="p-8">
        <div className="grid grid-flow-col grid-cols-6">
        <div className="col-span-2">
        <label className="input input-bordered flex items-center gap-2 rounded-3xl">
        <IoMdSearch />
            <input type="text" placeholder="Search" />
        </label>
        </div>
        <div className="col-span-4 flex justify-end">
        <details className="dropdown">
        <summary className="btn m-1 bg-green-700 text-white rounded-3xl">Create Order<MdArrowDropDown className="text-xl" /></summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link href={"/dashboard/orders/order"}>
              Purchase order
              </Link>
            </li>
            <li><a>Sales Order</a></li>
        </ul>
        </details>
        </div>
        </div>
        <div>
            <OrderTable/>
        </div>
    </div>
  )
}

export default Orders