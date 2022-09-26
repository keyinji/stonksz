import Link from "next/link";

export default function Home(props) {
  const data = props.result;

  const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);

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
              <Link href="/x/[id]" as={`/x/${coin.id}`}>
                <tr
                  key={coin.id}
                  className="leading-7 hover:bg-gray-100 cursor-pointer"
                >
                  <td className="flex">
                    <img
                      src={coin.image}
                      style={{ width: 25, height: 25, marginRight: 10 }}
                    />
                    <div className="px-4">
                      <b>{coin.name}</b>
                    </div>
                    <div className="hidden md:table-cell">
                      {coin.symbol.toUpperCase()}
                    </div>
                  </td>
                  <td>${coin.current_price.toFixed(2)}</td>
                  <td
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {formatPercent(coin.price_change_percentage_24h)}
                  </td>
                  <td className="hidden md:table-cell">
                    {numFormatter(coin.total_volume)}
                  </td>
                  <td className="hidden md:table-cell">
                    {numFormatter(coin.market_cap)}
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

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
  );

  const result = await res.json();

  return {
    props: {
      result,
    },
  };
};
