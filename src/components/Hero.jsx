import React from 'react'
import crypto from '../assets/hero-img.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='container'>

        {/* {left-side} */}
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurreny with Your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type="email" placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

        {/* {right-side} */}
            <div className='right'>
              <div className='img-container'>
                <img src={crypto} alt="crypto-banner" />
              </div>
            </div>            
        </div>
    </div>
  )
}

export default Hero