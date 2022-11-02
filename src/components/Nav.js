import React from 'react'

import { Link } from 'react-router-dom'

import { Instagram, Facebook, Twitter, Tiktok } from 'react-bootstrap-icons'

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='Nav_home'>
                <p><Link to="/">Nga Awapurua Farms</Link></p>
            </div>
            <div className='Nav_list'>
                <ul>
                    <li className='list_item'><Link to="/kaupapa" >Kaupapa</Link></li>
                    {/* <li className='Nav_list_line'></li> */}
                    <li className='list_item'><Link to="/whatwedo">What we do</Link></li>
                    {/* <li className='Nav_list_line'></li> */}
                    <li className='list_item'><Link to="/">Message us</Link></li>
                </ul>
            </div>
            <div className='Nav_socials'>
                <a href="/www.instagram.com">
                    <Instagram />

                </a>
                <a href="/https://www.instagram.com">
                    <Facebook />

                </a>
                <a href="/https://www.instagram.com">
                    <Twitter />

                </a>
                <a href="/https://www.instagram.com">
                    <Tiktok />

                </a>
            </div>
            <div className='Nav_donate'>
                <p><Link to={'/donate'}>Donate</Link></p>
            </div>
        </div>
    )
}

export default Nav