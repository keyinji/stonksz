import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinInfo = (props) => {
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
    <div className="flex md:w-2/3 justify-between m-auto">
      <div className="flex-col px-2.5 w-1/2">
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Name: </span>
          {props.coin?.name}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Symbol: </span>
          {props.coin?.symbol?.toUpperCase()}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Market Cap Rank: </span>
          {props.coin?.rank}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Current Price: </span>
          {parseFloat(props.coin?.priceUsd).toFixed(2)}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Price Change % 24h: </span>
          {parseFloat(props.coin?.changePercent24Hr).toFixed(2)}%
        </div>
      </div>
      <div className="flex-col w-1/2">
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Market Cap: </span>
          {numFormatter(parseFloat(props.coin?.marketCapUsd).toFixed(3))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Volume 24H: </span>
          {numFormatter(parseFloat(props.coin?.volumeUsd24Hr).toFixed(3))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Total Supply: </span>
          {numFormatter(parseFloat(props.coin?.maxSupply))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Circulating Supply: </span>
          {numFormatter(parseFloat(props.coin?.supply))}
        </div>
        <div className="text-xs font-normal md:text-base md:font-medium">
          <span className="font-medium md:font-bold">Volume Weighted Average Price: </span>
          {parseFloat(props.coin?.vwap24Hr).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
