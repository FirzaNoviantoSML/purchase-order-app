import { GoHomeFill } from "react-icons/go";

const listmenu = [
    {href:'/',name:"Home", icon:<GoHomeFill />},
    {href:'/',name:"Supliers Catalogue", icon:<GoHomeFill />},
    {href:'/',name:"Order", icon:<GoHomeFill />},
    {href:'/',name:"Warehouse", icon:<GoHomeFill />},
    {href:'/',name:"Finance", icon:<GoHomeFill />},
]

function Sidebar(){
    return(
        <section className="px-3 py-2 bg-teal-200 h-[100vh]">
            <div className="pb-3">
            <h1 className="text-3xl font-bold text-green-500 text-center">Logo</h1>
            </div>
       

        <div className="flex flex-col overflow-y-auto h-52 gap-1 pr-2">
        {listmenu.map((item,index) => {
            return (
                <div key={index} className="flex items-center gap-2 bg-green-600 p-2 text-white rounded-lg">
                    {item.icon}{item.name}
                 </div>   
            )
        })}
        </div>
        <div className="mt-4 bg-green-300 rounded-xl p-4">
            <p>Support</p>
            <p>Firza@support.com</p>
            <p>(+62)851-5518-3030</p>
        </div>
        </section>
    )
}

export default Sidebar