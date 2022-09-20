import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format, parseISO, subDays } from "date-fns";

export default function Home() {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let xaxis = data.prices.map((coin) => {
    let date = new Date(coin[0]);
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let name = h + ":" + m;
    return name;
  });

  //console.log(xaxis)

  let yaxis = data.prices.map((coin) => {
    let y = coin[1];
    return y;
  });

  const chartData = [];
  for (let i = 0; i < xaxis.length; i++) {
    const newRow = {};
    newRow.name = parseInt(xaxis[i]);
    newRow.data = parseInt(yaxis[i]);
    chartData.push(newRow);
  }

  //console.log(chartData)

  function CustomTooltip({ active, payload, label }) {
    let name = data.prices.map((coin) => {
      let date = new Date(coin[0]);
      let h = addZero(date.getHours());
      let m = addZero(date.getMinutes());
      let name = h + ":" + m;
      return name;
    });
    if (active) {
      return (
        <div className="bg-white border-1 border-black p-2.5">
          <div>{label}</div>
          <div className="text-center font-semibold">
            ${payload[0].value.toFixed(2)} USD
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="md:w-2/3 flex items-center justify-center m-auto">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="data" stroke="#2451B7" fill="url(#color)" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickCount={8}
            />

            <YAxis
              tickCount={10}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={["auto", "auto"]}
            />

            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
