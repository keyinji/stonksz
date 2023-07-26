import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Gainers from "../../components/Gainers";
import Losers from "../../components/Losers";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      router.push("/login");
    }
  });
  const [data, setData] = useState(null);

  const url = "https://api.coincap.io/v2/assets?limit=100";

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
    <div className="flex flex-col">
      <div className="md:flex md:w-2/3 mx-auto md:m-2 md:h-44 mb-5">
        <div className="w-full md:w-1/2 md:mr-1">
          <Gainers />
        </div>
        <div className="w-full md:w-1/2 md:ml-1">
          <Losers />
        </div>
      </div>
      <div className="md:w-2/3 mx-auto">
        <table className="table">
          <thead className="leading-8">
            <tr className="">
              <th>Coin</th>
              <th>Price</th>
              <th>24H Change</th>
              <th className="hidden md:table-cell">24H Volume</th>
              <th className="hidden md:table-cell">Market cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
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
                    <div className="xs:px-2 md:px-4">
                      <b>{coin.name}</b>
                    </div>
                    <div className="hidden md:table-cell">
                      {coin.symbol.toUpperCase()}
                    </div>
                  </td>
                  <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
                  <td
                    className={
                      coin.changePercent24Hr > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {formatPercent(coin.changePercent24Hr)}
                  </td>
                  <td className="hidden md:table-cell">
                    {numFormatter(coin.volumeUsd24Hr)}
                  </td>
                  <td className="hidden md:table-cell">
                    {numFormatter(coin.marketCapUsd)}
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
