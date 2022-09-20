import React from 'react'
import { useAppContext } from '../../context/state';


const index = () => {
  const {portfolio, setPortfolio} = useAppContext();
  return (
    <div>
        <div>{portfolio}</div>
    </div>
  )
}

export default index