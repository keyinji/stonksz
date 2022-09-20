import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

const SymbolInfo = () => {

  const [coin, setCoin] = useState(null)

  const url  = `https://api.coingecko.com/api/v3/coins/bitcoin`

  useEffect(() => {
      axios.get(url).then((response) => {
          setCoin(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  if (!coin) return null

  return (
    <div>
          <div className="flex m-auto md:w-2/3 h-24 items-center">
          <div className="flex px-2">
            <div className="">  
              <img className="w-16 h-16 md:w-20 md:h-20"src={coin.image.large} alt="crypto"  />
            </div>
            <div className="flex-col px-2">
              <div className="text-2xl md:text-4xl font-semibold uppercase">
                {coin.name}
              </div>
              <div className="uppercase text-lg md:text-2xl text-gray-500">
                {coin.symbol}
              </div>
            </div>
            </div>

          <div className="ml-auto text-right">
          <div className="flex-col">
            <div className="text-2xl md:text-4xl font-normal mr-2">
              ${coin.market_data.current_price.usd.toFixed(2)}
            </div>
          <div className="flex mr-2">
            <span
                  className={coin.market_data.price_change_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                <div className="text-lg md:text-2xl">
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </div>
            </span>
            <span
                  className={coin.market_data.price_change_percentage_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                <div className="text-lg md:text-2xl">
                (${coin.market_data.price_change_24h.toFixed(2)})
                </div>
            </span>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default SymbolInfo