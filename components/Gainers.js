import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Gainers = () => {
  const [data, setData] = useState(null);

  const url = "https://api.coincap.io/v2/assets?limit=200";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  const high = data.sort(function (b, a) {
    return a.changePercent24Hr - b.changePercent24Hr;
  });
  const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(3) + "K";
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(3) + "M";
    } else if (num >= 1000000000) {
      return (num / 1000000000).toFixed(3) + "B";
    } else if (num <= 999) {
      return num;
    }
  }

  return (
    <div>
      <div className="md:w-full mx-auto">
        <table className="table">
          <thead className="leading-8">
            <tr className="">
              <th>Coin</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {high.slice(0, 3).map((coin) => (
               <Link href="/markets/[id]" as={`/markets/${coin.id}`} key={coin.id}>
               <tr
                 key={coin.id}
                 className="leading-7 hover:bg-gray-100 cursor-pointer"
               >
                 <td className="flex">
                   <a>
                     <img
                       src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                       style={{ width: 25, height: 25, marginRight: 10 }}
                     />
                   </a>
                   <div className="px-2.5 md:px-4">
                     <b className="capitalize">{coin.id}</b>
                   </div>
                 </td>
                 <td>${parseFloat(coin.priceUsd).toFixed(3)}</td>
                 <td
                   className={
                     coin.changePercent24Hr > 0
                       ? "text-green-600"
                       : "text-red-600"
                   }
                 >
                   {formatPercent(coin.changePercent24Hr)}
                 </td>
               </tr>
             </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Gainers;
