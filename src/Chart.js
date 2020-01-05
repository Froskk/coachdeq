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
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={() => <div />} />
      {Object.keys(data[0]).map(measure =>
        measure !== "date" ? (
          <Line
            type={curveCatmullRom}
            dataKey={measure}
            stroke={measure === "average" ? "#8BD5E6" : "#FFC600"}
            strokeWidth="2"
            dot={false}
            key={measure}
          />
        ) : null
      )}
    </LineChart>
  );
};
