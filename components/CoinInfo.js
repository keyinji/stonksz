import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinInfo = () => {
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

  const [data, setData] = useState(null);

  const url = `https://api.coingecko.com/api/v3/coins/bitcoin`;

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
    <div className="flex md:w-2/3 justify-between m-auto">
      <div className="flex-col px-2.5 w-1/2">
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Name: </span>
          {data.name}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Symbol: </span>
          {data.symbol.toUpperCase()}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Current Price: </span>
          {data.market_data.current_price.usd.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">High 24h: </span>
          {data.market_data.high_24h.usd.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Low 24h: </span>
          {data.market_data.low_24h.usd.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Market Cap Rank: </span>
          {data.market_cap_rank}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Market Cap: </span>
          {numFormatter(data.market_data.market_cap.usd.toFixed(3))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Volume: </span>
          {numFormatter(data.market_data.total_volume.usd.toFixed(3))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Total Supply: </span>
          {numFormatter(data.market_data.total_supply)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Circulating Supply: </span>
          {numFormatter(data.market_data.circulating_supply)}
        </div>
      </div>
      <div className="flex-col w-1/2">
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change 24h: </span>
          {data.market_data.price_change_24h.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 24h: </span>
          {data.market_data.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 7d: </span>
          {data.market_data.price_change_percentage_7d.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 30d: </span>
          {data.market_data.price_change_percentage_30d.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 60d: </span>
          {data.market_data.price_change_percentage_60d.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 1y: </span>
          {data.market_data.price_change_percentage_1y.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">All Time High: </span>
          {data.market_data.ath.usd.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">
            All Time High Change:{" "}
          </span>
          {data.market_data.ath_change_percentage.usd.toFixed(2)}%
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">All Time Low: </span>
          {data.market_data.atl.usd.toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">
            All Time Low Change:{" "}
          </span>
          {data.market_data.atl_change_percentage.usd.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
