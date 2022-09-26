import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Middle = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

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
  return (
    <div className="bg-blue-500 items-center justify-center space-x-10 h-auto md:flex">
      <div className="grid grid-cols-3">
        {data.map((coin) => (
          <Link href="/[id]" as={`/${coin.id}`}>
            <div className="flex justify-evenly py-2 md:px-2">
              <div className="w-28 h-28 md:h-36 cursor-pointer flex-col bg-white shadow-xl rounded-md border-2 md:w-32 flex items-center justify-center">
                <div className="h-8 w-8 md:h-12 md:w-12">
                  <img src={coin.image} />
                </div>
                <div className="font-semibold">{coin.name}</div>
                <div>${coin.current_price.toFixed(2)}</div>
                <span
                  className={
                    coin.price_change_24h > 0 ? "text-success" : "text-danger"
                  }
                >
                  <div className="">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mx-2">
        <div className="text-2xl md:text-3xl text-white font-bold">
          Don't delay, Invest today
        </div>
        <div className="max-w-md text-base md:text-lg font-normal text-white mb-2">
          Buy, Sell, and Hold hundreds of cryptocurrencies
        </div>
      </div>
    </div>
  );
};

export default Middle;
