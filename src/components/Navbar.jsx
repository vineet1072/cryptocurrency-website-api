import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)


  return (
    <div className='navbar'>
        <div className='container'>
            
                <h1>De<span className='primary'>Fi</span></h1>
            
            
                <ul className={nav ? 'nav-menu active': 'nav-menu'}>
                    <li>
                    <a href='/'>Home</a>
                    </li>
                    <li>
                    <a href='/'>Featured</a>
                   
                    </li>
                    <li>
                    <a href='/'>Earn</a>
                   </li>
                    <li>
                    <a href='/'>Contact</a>
                    </li>
                </ul>
                
                <div className='btn-group'>
                <button className='btn'>Connect Wallet</button>
                </div>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<GiHamburgerMenu size={20} style={{color: '#333'}} />) : (<AiOutlineCloseCircle size={20} style={{color: '#333'}} />)}
                </div>

        </div>
      

    </div>
  )
}

export default Navbar