import React from "react";
import "./App.css";
import { curveCatmullRom } from "d3-shape";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function App() {
  return (
    <div className="App">
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
        <defs>
          <filter
            id="pink-glow"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="blur2"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur4"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur2" />
              <feMergeNode in="blur4" />
            </feMerge>

            <feColorMatrix
              result="pink-blur"
              in="blur-merged"
              type="matrix"
              values="1 0    0    0 0
                      0 0.06 0    0 0
                      0 0    0.44 0 0
                      0 0    0    1 0"
            />
            <feMerge>
              <feMergeNode in="pink-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="orange-glow"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="blur2"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur4"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur2" />
              <feMergeNode in="blur4" />
            </feMerge>

            <feColorMatrix
              result="orange-blur"
              in="blur-merged"
              type="matrix"
              values="1 0    0    0 0
                      0 0.34 0    0 0
                      0 0    0.06 0 0
                      0 0    0    1 0"
            />
            <feMerge>
              <feMergeNode in="orange-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="blue-glow"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="blur2"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur4"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur2" />
              <feMergeNode in="blur4" />
            </feMerge>

            <feColorMatrix
              result="blue-blur"
              in="blur-merged"
              type="matrix"
              values="0.06 0    0 0 0
                      0    0.44 0 0 0
                      0    0    1 0 0
                      0    0    0 1 0"
            />
            <feMerge>
              <feMergeNode in="blue-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={() => <div />} />
        <Legend />
        <Line
          type={curveCatmullRom}
          dataKey="pv"
          stroke="#F5AED6"
          strokeWidth="2"
          filter="url(#pink-glow)"
          dot={false}
        />
        <Line
          type={curveCatmullRom}
          dataKey="uv"
          stroke="#F5A862"
          strokeWidth="2"
          filter="url(#orange-glow)"
          dot={false}
        />
        <Line
          type={curveCatmullRom}
          dataKey="amt"
          stroke="#8BD5E6"
          strokeWidth="2"
          filter="url(#blue-glow)"
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default App;
