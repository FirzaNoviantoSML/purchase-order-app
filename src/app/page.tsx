import Card from "./components/home/card";
import Chart from "./components/home/chart";

export default function Home() {
const listCard = [
  {text:"Total sales last 7 weeks",idr:180000},
  {text:"Total Purchase last 7 weeks",idr:280000},
  {text:"Total Gross Profit last weeks",idr:380000},
]


  return (
    <div className="p-4 pt-4 pb-8 border-b-2 ">
     <div className="flex justify-start gap-8">
     {listCard.map((item,index) => {
        return(
          <Card text={item.text} idr={item.idr} key={index}/>
        )
      })}
     </div>
      <Chart/>
    </div>
  );
}
