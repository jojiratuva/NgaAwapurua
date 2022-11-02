import React from 'react'
import carrots from '../../src/media/carrots.png'

const Donate = () => {
    return (
        <div className='donate_container'>
            <div className='donate_a'>
                <div className='donate_a_header'><p>Donations</p></div>
                <div className='donate_a_image' style={{ backgroundImage: `url(${carrots})` }}></div>
            </div>
            <div className='donate_b'>

                <div className='donate_b_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    <p><b>https://www.paypal.com/nz/home</b></p>
                </div>
                <div className='donate_b_payment'>
                    <label>Donar Name</label>
                    <input type="text" placeholder="DONAR NAME"></input>
                    <label>Donation Amount</label>
                    <input type="text" placeholder=" DONATION AMOUNT"></input>
                    <div className='donate_b_payment_card'>
                        <div className='payment_details_a'>
                            <p>Card Number</p>
                            <div className='card_details_a'>
                                <input type="text" placeholder="****"></input>
                                <input type="text" placeholder="****"></input>
                                <input type="text" placeholder="****"></input>
                                <input type="text" placeholder="****"></input>
                            </div>
                        </div>
                        <div className='card_details_b'>
                            <input id='name' type="text" placeholder='NAME ON CARD'></input>
                            <input id='expiry' type="text" placeholder='EXPIRY'></input>
                            <input id='cvs' type="text" placeholder='CVS'></input>
                        </div>
                        <div className='donate_button'>
                            <button>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate