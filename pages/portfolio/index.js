import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      router.push("/login");
    }
  });
  const [dataCG, setDataCG] = useState(null);
  const [data2, setData2] = useState(null);
  const [dataCash, setDataCash] = useState(null);

  const url2 = "/api/bought";
  useEffect(() => {
    axios
      .get(url2, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const url = `https://api.coincap.io/v2/assets?limit=300`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDataCG(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const url3 = "/api/cash";
  useEffect(() => {
    axios
      .get(url3, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDataCash(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!dataCash) return null;
  if (!data2) return null;
  if (!dataCG) return null;

  const getName = data2.map((coin) => coin.name);
  const getBoughtPrice = data2.map((coin) => coin.price);
  const idMongo = data2.map((coin) => coin.idMongo);
  const getCount = data2.map((coin) => coin.count);
  const get = (name) => {
    return dataCG.filter(function (data) {
      return data.id == name;
    });
  };

  const finalData = [];
  for (let i = 0; i < getName.length; i++) {
    const newRow = {};
    const array = get(getName[i]);
    newRow.symbol = array[0]?.symbol;
    newRow.name = array[0]?.name;
    newRow.current_price = parseFloat(array[0]?.priceUsd);
    newRow.boughtPrice = getBoughtPrice[i];
    newRow.count = getCount[i];
    newRow.id = array[0]?.id;
    newRow.idMongo = idMongo[i];
    finalData.push(newRow);
  }
  const arrPL = finalData.map(
    (coin) => (coin.current_price - coin.boughtPrice) * coin.count
  );
  const difference = arrPL.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const arrAssets = finalData.map((coin) => coin.current_price * coin.count);

  const assets = arrAssets.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const networth = 50000 + difference + dataCash.cash;

  const percentageChange = ((networth - 50000) / 50000) * 100;
  return (
    <div className="">
      <div className="mt-2 flex items-center justify-center text-3xl md:text-4xl">
        ${networth.toFixed(2)}
        <span
          className={
            difference + dataCash.cash > 0
              ? "text-green-600 text-lg md:text-2xl ml-1"
              : "text-red-600 text-lg md:text-2xl ml-1"
          }
        >
          ({percentageChange.toFixed(2)}%)
        </span>
      </div>
      <div className="flex md:w-2/3 justify-between mx-auto px-2">
        <div className="text-xl font-bold">Assets:</div>
        <div className="text-xl">${assets.toFixed(2)}</div>
      </div>
      <div className="flex md:w-2/3 justify-between mx-auto px-2">
        <div className="text-xl font-bold">Cash:</div>
        <div className="text-xl">${(networth - assets).toFixed(2)}</div>
      </div>
      <div className="flex md:w-2/3 justify-between m-auto px-2">
        <div className="text-xl font-bold">
          {difference + dataCash.cash > 0 ? "All Profits:" : "All Losses:"}
        </div>
        <div className="flex">
          <div
            className={
              difference + dataCash.cash > 0
                ? "text-green-600 text-xl mr-1"
                : "text-red-600 text-xl mr-1"
            }
          >
            ${(difference + dataCash.cash).toFixed(2)}
          </div>
          <div
            className={
              difference + dataCash.cash > 0
                ? "text-green-600 text-xl"
                : "text-red-600 text-xl"
            }
          >
            ({percentageChange.toFixed(2)}%)
          </div>
        </div>
      </div>
      {/*Table*/}
      <div className="md:w-2/3 mx-auto mt-2">
        <div className="text-lg font-bold px-2">Your Assets</div>
        <table className="table">
          <thead className="leading-8">
            <tr className="">
              <th>Coin</th>
              <th className="hidden md:table-cell">Price</th>
              <th>Bought Price</th>
              <th className="hidden md:table-cell">Quantity</th>
              <th className="hidden md:table-cell">Percentage +/-</th>
              <th>P&L</th>
            </tr>
          </thead>
          <tbody>
            {finalData.map((coin) => (
              <Link
                href={{ pathname: "/portfolio/[id]" }}
                as={`/portfolio/${coin.idMongo}`}
                key={coin.name}
              >
                <tr className="leading-7 hover:bg-gray-100 cursor-pointer">
                  <td className="flex">
                    <a>
                      <img
                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        style={{ width: 25, height: 25, marginRight: 10 }}
                      />
                    </a>
                    <div className="px-2 md:px-4">
                      <b>{coin.name}</b>
                    </div>
                    <div className="hidden md:table-cell">
                      {coin.symbol?.toUpperCase()}
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    ${coin.current_price?.toFixed(2)}
                  </td>
                  <td>${coin.boughtPrice.toFixed(2)}</td>
                  <td className="hidden md:table-cell">{coin.count}</td>
                  <td
                    className={
                      ((coin.current_price - coin.boughtPrice) /
                        coin.boughtPrice) *
                        100 >
                      0
                        ? "text-green-600 hidden md:table-cell"
                        : "text-red-600 hidden md:table-cell"
                    }
                  >
                    {(
                      ((coin.current_price - coin.boughtPrice) /
                        coin.boughtPrice) *
                      100
                    ).toFixed(2)}
                    %
                  </td>
                  <td
                    className={
                      (coin.current_price - coin.boughtPrice) * coin.count > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    $
                    {(
                      (coin.current_price - coin.boughtPrice) *
                      coin.count
                    )?.toFixed(2)}
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

export default Index;
