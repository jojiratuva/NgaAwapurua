import React from 'react'
import background from "../../src/media/green_leaves.jpg"

const Landing = () => {
    return (
        <div className='home_Landing' style={{ backgroundImage: `url(${background})` }}>
            <div className='home_Landing_item_1'>
                <p><i>scroll for more</i></p>
            </div>
            <div className='home_Landing_item_2'></div>
            <div className='home_Landing_item_3'></div>
            <div className='home_Landing_item_4'>
                <div className='item_4_a'>
                    <p>Pirinoa, Aoteroa</p>

                </div>
                <div className='item_4_b'>
                    <h1>Nga awapūrua Farms</h1>

                </div>
                <div className='item_4_c'>
                    <p>Wairarapa indigenous farming practices connecting tangata to whenua</p>

                </div>
                <div className='item_4_d'>
                    <button>Donate</button>

                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <>
            <Landing />
        </>
    )
}

export default Home