import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_list'>
                <div className='Footer_list_1'>

                    <ul>
                        <li><p>Resources</p></li>
                        <li><div className='Footer_list_line'></div></li>
                        <li><Link to="/">Treaty</Link></li>
                        <li><Link to="/">Te Reo Maori</Link></li>
                        <li><Link to="/">Ecological overreach</Link></li>
                    </ul>
                </div>
                <div className='Footer_list_2'>
                    <ul>
                        <li><p>Legal</p></li>
                        <li><div className='Footer_list_line'></div></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Donation uses</Link></li>
                    </ul>
                </div>
                <div className='Footer_list_3'>
                    <ul>
                        <li><p>Contact</p></li>
                        <li><div className='Footer_list_line'></div></li>
                        <li><Link to="/">Send us a Message</Link></li>
                        <li><Link to="/">Email Us</Link></li>
                        <li><Link to="/">give us a ring</Link></li>
                    </ul>
                </div>
                <div className='Footer_list_4'>
                    <ul>
                        <li><p>Location</p></li>
                        <li><div className='Footer_list_line'></div></li>
                        <li><Link to="/">Farm 1, Te Rata Road</Link></li>
                        <li><Link to="/">Pirinoa, Wairapa</Link></li>
                        <li><Link to="/">1150</Link></li>
                    </ul>
                </div>
            </div>
            <div className='Footer_socials'>
                <ul>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Facbook</Link></li>
                    <li><Link>Twitter</Link></li>
                    <li><Link>Tiktok</Link></li>
                </ul>
            </div>
            <div className='Footer_newsletter'>
                <input type="text" id='newsletter' placeholder='Sign up to our newsletter'></input>
                <button>Sign up</button>
            </div>
            <div className='Footer_bottom'>
                <p>© 2021 nga awapurua farms, all rights reserved.</p>
                <p>yoobee colleges</p>
                <p>Designed and built by Joji Ratuva</p>
            </div>
        </div>
    )
}

export default Footer