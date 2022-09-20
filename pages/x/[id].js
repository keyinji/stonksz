
import CoinInfo from '../../components/CoinInfo'
import Chart from '../../components/Chart'
import Buybutton from '../../components/Buybutton'
import React, { useState, useEffect } from 'react'
import SymbolInfo, { id } from '../../components/SymbolInfo'
import Sellbutton from '../../components/Sellbutton'


const Coin = () => {


  return(
    <div>
      <SymbolInfo />
      <Chart />
      <CoinInfo />
      <div className="flex md:w-2/3 justify-between m-auto">
       <div class="w-1/2 mr-1"> 
        <Buybutton />
       </div> 
       <div class="w-1/2"> 
        <Sellbutton />
       </div> 
      </div>
    </div>
  )
}


export default Coin;
