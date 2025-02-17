"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "29 August", uv: 4000 },
  { name: "30 August", uv: 3000 },
  { name: "31 August", uv: 5000 },
  { name: "1 September", uv: 7000 },
  { name: "2 September", uv: 2000 },
];

export default function Chart() {
  return (
    <>
    <div className="flex justify-around my-8">
        <div className="flex justify-start gap-4">
        <p>Sales</p>
        <p>Purchase</p>
        <p>Gross Profit</p>
        </div>
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
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}
