import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Sellbutton = () => {
    const [button, setButton] = useState(false)
    const [count, setCount] = useState(1)
  
    const toggleButton = () =>{
        setButton(!button)
    }
  
    const [coin, setCoin] = useState(null)
  
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
  
    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
    if (!coin) return null
  
    const display = coin.market_data.current_price.usd * count
  
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
  
    function decrement() {
      if(count > 0){
      setCount(prevCount => prevCount - 1)
    }}
  

  return (
    <div>

        <button class="w-full text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center py-2.5 justify-center mr-1 mt-2" type="button" data-modal-toggle="defaultModal" onClick={toggleButton}>
            Sell
        </button>

           {/* Main Modal */}
        {button ? <div id="popup-modal" tabindex="-1" class="flex items-center justify-center h-screen fixed bottom-0 right-0 left-0">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" onClick={toggleButton}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="p-6 text-center">
                    <div class="flex text-xl font-semibold items-center justify-center">Sell {coin.name}</div>
                    <div class="box flex mt-2">
                        <div class="text-lg font-medium text-gray-700">Quantity: </div>
                        <button class="flex border-2 items-center justify-center w-8 rounded ml-2 text-gray-500 bg-white hover:text-gray-900 hover:border-gray-600" onClick={decrement}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
                        <div class="w-8">{count}</div>
                        <button class="flex border-2 items-center justify-center w-8 rounded text-gray-500 bg-white hover:text-gray-900 hover:border-gray-600" onClick={increment}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
                    </div>
                    <div class="box flex-col"> 
                      <div class="flex">
                        <div class="text-lg font-medium text-gray-700">Total: </div>
                        <div class="text-lg font-medium ml-1 mb-1">{(display).toFixed(2)}</div>
                      </div>  
                    </div>
                    <button class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={toggleButton}>
                        Cancel
                    </button>
                    <button class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2">
                        Sell {count}
                    </button>
                </div>
            </div>
        </div>
    </div> : null }
    
    </div>
  )
}

export default Sellbutton