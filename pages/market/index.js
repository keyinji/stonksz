
import Link from 'next/link'
import { getSession } from "next-auth/react"
import {useState, useEffect} from 'react'
import axios from "axios"

export default function Home(props) {

  const formatPercent = (number) => 
    `${new Number(number).toFixed(2)}%`

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US', 
      { 
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);
      
    function numFormatter(num) {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(3) + 'K';
        }else if(num >= 1000000 && num < 1000000000){
            return (num/1000000).toFixed(3) + 'M'; 
        }else if(num >= 1000000000){
            return (num/1000000000).toFixed(3) + 'B';
        }else if(num <= 999){
            return num;
        } 
    }

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
  
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
    if (!data) return null
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
            <Link href='/market/[id]' as={`/market/${coin.id}`}>
            <tr key={coin.id} className="leading-7 hover:bg-gray-100 cursor-pointer">  
              <td className="flex"> 
                <img 
                  src={coin.image} 
                  style={{width: 25, height: 25, marginRight: 10}} 
                />
                <div className="px-4"><b>{coin.name}</b></div>
                <div className="hidden md:table-cell">{coin.symbol.toUpperCase()}</div>
              </td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td> 
                <span
                  className={coin.price_change_percentage_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                {formatPercent(coin.price_change_percentage_24h)}
                </span>
              </td>
              <td className="hidden md:table-cell">{numFormatter(coin.total_volume)}</td>
              <td className="hidden md:table-cell">{numFormatter(coin.market_cap)}</td>
            </tr>
            </Link>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}


  export async function getServerSideProps(context) {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
  }

