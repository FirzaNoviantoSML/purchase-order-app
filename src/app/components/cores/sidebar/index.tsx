'use client'
import { GoHomeFill } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {usePathname} from 'next/navigation'
import Link from "next/link";

const listmenu = [
    {href:'/',name:"Home", icon:<GoHomeFill />},
    {href:'/dashboard/supliers-catalogue',name:"Supliers Catalogue", icon:<GoHomeFill />},
    {href:'/dashboard/orders',name:"Order", icon:<GoHomeFill />},
    {href:'/dashboard/warehouse',name:"Warehouse", icon:<GoHomeFill />},
    {href:'/dashboard/finance',name:"Finance", icon:<GoHomeFill />},
    {href:'/dashboard/order',name:"Order", icon:<GoHomeFill />}
]

function Sidebar(){
    const pathName = usePathname()
    return(
        <section className="px-3 py-2 bg-teal-200 h-[100vh]">
            <div className="pb-3">
            <h1 className="text-3xl font-bold text-green-500 text-center">Logo</h1>
            </div>
       

        <div className="flex flex-col overflow-y-auto h-80 gap-3 pr-2">
        {listmenu.map((item,index) => {
            return (
                <Link href={item.href} key={index}>
                <div className={`flex items-center gap-2  p-2  rounded-lg 
                ${pathName === item.href ? "bg-green-600 text-white":"bg-green-200 text-green-600"}`}>
                    {item.icon}{item.name}
                 </div>   
                </Link>
            )
        })}
        </div>
        <div className="mt-4 bg-green-300 rounded-xl p-4">
            <p>Support</p>
            <p>Firza@support.com</p>
            <p>(+62)851-5518-3030</p>
        </div>
        <div className="grid grid-flow-col grid-cols-4 items-center gap-4">
            <div className="col-span-1">
            <FaUserCircle className="text-6xl" />
            </div>
            <div className="col-span-2 text-wrap">
            <p>
                Tri
            </p>
            <p>
                trisurya77@gmail.com
            </p>
            <p>
                TRI COMPANY
            </p>
            <p>
                Bussiness Admin
            </p>
            </div>
            <div className="col-span-1 flex justify-end">
            <IoIosLogOut />
            </div>
        </div>
        </section>
    )
}

export default Sidebar