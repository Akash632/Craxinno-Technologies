import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
function Graph() {
  const [month, setMonth] = useState(0);
  const data = [];
  let count = 0;
  let amount = useSelector((state) => state.amount.total);

  if (amount > 0&&month>0) {
    for (let i = amount; i >= 0; i -= month) {
      count++;
      data.push({ "amount": i, "pv": count });
    }
  }
  return (
    <div style={{width:"70%"}}>
      <h3>Intial Balance : {amount}</h3>
      <label htmlFor="month">Monthly Payement</label>
      <input type="number" id="month" onChange={(e) => setMonth(e.target.value)} />
      <hr/>
      <h3>Balance of accounts after a number of months</h3>
      {amount>0&&month>0?<div>
        <ResponsiveContainer width="80%" height={300}>
          <LineChart
            width={100}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pv" />
            <YAxis dataKey="" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>:<h3>Enter values to display charts</h3>}
    </div>
  );
}

export default Graph;
