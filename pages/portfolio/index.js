import React, { useState, useEffect } from "react";
import axios from "axios";

const index = () => {
  const [dataCG, setDataCG] = useState(null);
  const [dataMongo, setDataMongo] = useState(null);

  //const U = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDataCG(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/bought")
      .then((response) => {
        setDataMongo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!dataMongo) return null;
  if (!dataCG) return null;

  const percentage =
     (dataCG.market_data.current_price.usd-dataMongo.boughtPrice)/dataMongo.boughtPrice;

  const pl =
    (dataCG.market_data.current_price.usd - dataMongo.boughtPrice) *
    dataMongo.quantity;
  return (
    <div>
      <div className="md:w-2/3 mx-auto">
        <table className="table">
          <thead className="leading-8">
            <tr className="">
              <th>Coin</th>
              <th>Price</th>
              <th>Bought Price</th>
              <th>Quantity</th>
              <th className="hidden md:table-cell">Percentage +/-</th>
              <th className="hidden md:table-cell">P&L</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={dataCG.id}
              className="leading-7 hover:bg-gray-100 cursor-pointer"
            >
              <td className="flex">
                <a>
                  <img
                    src={dataCG.image.large}
                    style={{ width: 25, height: 25, marginRight: 10 }}
                  />
                </a>
                <div className="px-4">
                  <b>{dataCG.name}</b>
                </div>
                <div className="hidden md:table-cell">
                  {dataCG.symbol.toUpperCase()}
                </div>
              </td>
              <td>${dataCG.market_data.current_price.usd.toFixed(2)}</td>
              <td>{dataMongo.boughtPrice.toFixed(2)}</td>
              <td>{dataMongo.quantity}</td>
              <td className={pl > 0 ? "text-green-600" : "text-red-600"}>{percentage.toFixed(2)}%</td>
              <td className={pl > 0 ? "text-green-600" : "text-red-600"}>{pl.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
