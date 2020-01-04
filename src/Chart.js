import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { curveCatmullRom } from "d3-shape";

export const BaseChart = ({ data }) => {
  return (
    <LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 60,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={() => <div />} />
      <Line
        type={curveCatmullRom}
        dataKey="pv"
        stroke="#F5AED6"
        strokeWidth="2"
        dot={false}
      />
      <Line
        type={curveCatmullRom}
        dataKey="uv"
        stroke="#F5A862"
        strokeWidth="2"
        dot={false}
      />
      <Line
        type={curveCatmullRom}
        dataKey="amt"
        stroke="#8BD5E6"
        strokeWidth="2"
        dot={false}
      />
    </LineChart>
  );
};
