import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Buybutton = (props) => {
  const [button, setButton] = useState(false);
  const [count, setCount] = useState(1);
  const [dataCG, setDataCG] = useState(null);
  const [data2, setData2] = useState(null);
  const [dataCash, setDataCash] = useState(null);

  const [success, setSuccess] = useState("");
  const toggleButton = () => {
    setButton(!button);
  };

  const [data, setData] = useState(null);

  const router = useRouter();

  const url = `https://api.coincap.io/v2/assets?ids=${props.coin.id}`;

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

  const url4 = `https://api.coincap.io/v2/assets?limit=300`;
  useEffect(() => {
    axios
      .get(url4)
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
  if (!data) return null;

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

  const cash = networth - assets;

  if (!data) return null;

  const price = parseFloat(data[0].priceUsd);

  const name = props.coin.id;

  const display = parseFloat(data[0].priceUsd) * count;

  function increment() {
    if (display < cash) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  function decrement() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const url = "/api/bought";
      const data = { name, count, price };
      await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });
      router.reload(window.location.pathname);
      setSuccess("Success!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button
        className="w-full text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center py-2.5 justify-center mr-1 mt-2"
        type="button"
        data-modal-toggle="defaultModal"
        onClick={toggleButton}
      >
        Buy
      </button>

      {/* Main Modal */}
      <form onSubmit={handleSubmit}>
        {[data].map((coin) => (
          <>
            {button ? (
              <div
                id="popup-modal"
                className="flex items-center justify-center h-screen fixed bottom-0 right-0 left-0 md:top-0 top-20"
              >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                  <div className="relative bg-white rounded-lg shadow">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      data-modal-toggle="popup-modal"
                      onClick={toggleButton}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                      </svg>
                    </button>
                    <div className="p-6 text-center">
                      <div className="flex text-xl font-semibold items-center justify-center">
                        Buy {coin[0].name}
                      </div>
                      <div className="box flex mt-2">
                        <div className="text-lg font-medium text-gray-700">
                          Quantity:{" "}
                        </div>
                        <button
                          type="button"
                          className="flex border-2 items-center justify-center w-8 rounded ml-2 text-gray-500 bg-white hover:text-gray-900 hover:border-gray-600"
                          onClick={decrement}
                          value={name}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                          </svg>
                        </button>
                        <button value={count} type="button" className="w-8">
                          {count}
                        </button>
                        <button
                          type="button"
                          className="flex border-2 items-center justify-center w-8 rounded text-gray-500 bg-white hover:text-gray-900 hover:border-gray-600"
                          onClick={increment}
                          value={price}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </button>
                      </div>
                      <div className="box flex-col">
                        <div className="flex">
                          <div className="text-lg font-medium text-gray-700">
                            Price:{" "}
                          </div>
                          <button
                            type="button"
                            className="text-lg font-medium ml-1"
                          >
                            {parseFloat(coin[0].priceUsd).toFixed(2)}
                          </button>
                        </div>
                        <div className="flex">
                          <div className="text-lg font-medium text-gray-700">
                            Cash:{" "}
                          </div>
                          <button
                            type="button"
                            className="text-lg font-medium ml-1"
                          >
                            {cash.toFixed(2)}
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="text-lg font-medium text-gray-700"
                          >
                            Total:{" "}
                          </button>
                          <div className="text-lg font-medium ml-1 mb-1">
                            {display.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      {success ? (
                        <div className="border-green-600 my-2 py-0.5 w-4/5  border-2 rounded-lg bg-green-100 inline-flex justify-center">
                          {success}
                        </div>
                      ) : null}
                      <button
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 mb-2"
                        onClick={toggleButton}
                      >
                        Cancel
                      </button>
                      {cash > display ? (
                        <button
                          type="submit"
                          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2"
                        >
                          <div> Buy {count} </div>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        ))}
      </form>
    </div>
  );
};

export default Buybutton;
