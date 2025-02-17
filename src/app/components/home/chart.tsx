"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "29 August", sales: 4000, purchase: 3000, grossProfit: 1000 },
  { name: "30 August", sales: 5000, purchase: 2000, grossProfit: 3000 },
  { name: "31 August", sales: 7000, purchase: 5000, grossProfit: 2000 },
  { name: "1 September", sales: 6000, purchase: 4000, grossProfit: 2000 },
  { name: "2 September", sales: 8000, purchase: 5000, grossProfit: 3000 },
];

export default function Chart() {
  return (
    <>
    <div className="flex justify-end my-8">
        <div className="flex justify-start gap-4">
            <p className="items-center flex justify-center gap-1">
            <input type="checkbox"/>
            Sales
            </p>
            <p className="items-center flex justify-center gap-1">
            <input type="checkbox"/>
            Sales
            </p>
            <p className="items-center flex justify-center gap-1">
            <input type="checkbox"/>
            Sales
            </p>
        </div>
    </div>
    <ResponsiveContainer width="100%" height={600}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="left" wrapperStyle={{ paddingLeft: "10px" ,paddingBottom:"30px" }}/>
        <Bar dataKey="sales" fill="#8884d8" name="Sales" />
        <Bar dataKey="purchase" fill="#82ca9d" name="Purchase" />
        <Bar dataKey="grossProfit" fill="#ffc658" name="Gross Profit" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}
