import React from "react";

const SymbolInfo = (props) => {

  console.log(props.coin.symbol)
  return (
    <div>
      <div className="flex m-auto md:w-2/3 h-24 items-center">
        <div className="flex px-2">
          <div className="">
            <img
              className="w-16 h-16 md:w-20 md:h-20"
              src={`https://assets.coincap.io/assets/icons/${props.coin.symbol.toLowerCase()}@2x.png`}
              alt="crypto"
            />
          </div>
          <div className="flex-col px-2">
            <div className="text-2xl md:text-4xl font-semibold uppercase">
              {props.coin.id}
            </div>
            <div className="uppercase text-lg md:text-2xl text-gray-500">
              {props.coin.symbol}
            </div>
          </div>
        </div>

        <div className="ml-auto text-right">
          <div className="flex-col">
            <div className="text-2xl md:text-4xl font-normal mr-2">
              ${parseFloat(props.coin?.priceUsd).toFixed(2)}
            </div>
            <div className="flex mr-2">
              <div
                className={
                  parseFloat(props.coin?.changePercent24Hr) > 0
                    ? "text-green-600 text-lg md:text-2xl"
                    : "text-red-600 text-lg md:text-2xl"
                }
              >
                {parseFloat(props.coin?.changePercent24Hr).toFixed(2)}%
              </div>

              <div
                className={
                  parseFloat(props.coin?.changePercent24Hr) > 0
                    ? "text-green-600 text-lg md:text-2xl"
                    : "text-red-600 text-lg md:text-2xl"
                }
              >
                (${((parseFloat(props.coin?.priceUsd))*(parseFloat(props.coin?.changePercent24Hr)/100)).toFixed(2)})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymbolInfo;
