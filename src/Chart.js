import React from "react";
import { useFetch } from "./useFetch";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { curveCatmullRom } from "d3-shape";
const apiURL = "https://coachdeq.rossc.now.sh/api/get-data";

export const BaseChart = ({ data }) => {
  const { singleSeries, loading } = useFetch(apiURL);

  return (
    <div>
      {loading && <div>Loading...</div>}

      {!loading && (
        <LineChart
          width={400}
          height={300}
          data={singleSeries}
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
            dataKey="x"
            stroke="#F5AED6"
            strokeWidth="2"
            dot={false}
          />
          <Line
            type={curveCatmullRom}
            dataKey="reading"
            stroke="#F5A862"
            strokeWidth="2"
            dot={false}
          />
          <Line
            type={curveCatmullRom}
            dataKey="average"
            stroke="#8BD5E6"
            strokeWidth="2"
            dot={false}
          />
        </LineChart>
      )}
    </div>
  );
};
