import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Featured.css'
import Coin from './Coin'



function Featured() {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])



    if (!data) return null

  return (
    <div className='feature'>
        <div className='container'>

        {/* {left side} */}
            <div className='left'>
                <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'>See More Coins</button>
            </div>

            
        {/* {right side} */}

    <div className='right'>

    {data.map(data => (
    <Coin key={data.id} data ={data} />
    ))}
          
</div>



        </div>
    </div>
  )
}

export default Featured