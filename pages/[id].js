


const Coin = ({coin}) => {

  return(
    <div>
      <div>
          <div className="flex justify-center max-w-7xl">
            <img src={coin?.image?.large} alt="crypto" width={75} height={75} />
            <div className="flex-col px-2">
              <div className="text-4xl font-semibold uppercase">
                {coin.name}
              </div>
              <div className="uppercase text-2xl text-gray-500">
                {coin.symbol}
              </div>
            </div>
          <div className="flex-col">
            <div className="text-4xl font-normal">
              {coin.market_data.current_price.usd.toFixed(2)}
            </div>
          <div className="flex">
            <span
                  className={coin.market_data.price_change_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                <div className="text-2xl px-1">
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </div>
            </span>
            <span
                  className={coin.market_data.price_change_percentage_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                <div className="text-2xl">
                (${coin.market_data.price_change_24h.toFixed(2)})
                </div>
            </span>
          </div>
          </div>
          <div>
            
          </div>
        </div>
        <div>
        </div>
        <div></div>
      </div>
    </div>
  )
}


export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}
