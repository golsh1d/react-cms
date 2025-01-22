import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    { month: "Jan", sale: 100 },
    { month: "Feb", sale: 100 },
    { month: "Mar", sale: 200 },
    { month: "April", sale: 100 },
    { month: "May", sale: 300 },
    { month: "Jun", sale: 200 },
    { month: "Jul", sale: 100 },
    { month: "Aug", sale: 200 },
    { month: "Sep", sale: 300 },
    { month: "Oct", sale: 200 },
    { month: "Nov", sale: 100 },
    { month: "Dec", sale: 200 },
  ];

  return (
    <div className="chart">
      <div className="chart-title">Month Sale</div>
      <ResponsiveContainer width="100%" height={250} className="chart-wrapper">
        <LineChart data={data}>
          <Line type="monotone" dataKey="sale" stroke="#4E6C50" />
          <CartesianGrid stroke="#5f5f5f" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}