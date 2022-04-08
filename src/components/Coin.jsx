import React from 'react'
import {BsArrowUpRight , BsArrowDownRight} from 'react-icons/bs'

function Coin(props) {
  return (
    <div>
          <div className='card'>
            <div className='top'>
                <img src={props.data.image} alt='/' />          
            </div>

            <div>
                <h5>{props.data.name}</h5>
                <p>₹{props.data.current_price.toLocaleString()}</p>
            </div>

            {props.data.price_change_percentage_24h < 0 ? (
            <span className='red'>
            <BsArrowDownRight className='icon' />
            {props.data.price_change_percentage_24h.toFixed(2)}%
            </span>): (
                <span className='green'>
                <BsArrowUpRight className='icon' />
                 {props.data.price_change_percentage_24h.toFixed(2)}%
                </span>
            )}

            
        </div>
    </div>
  )
}

export default Coin