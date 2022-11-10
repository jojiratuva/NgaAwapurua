// import image 
import background from '../../src/media/fern.jpg'
import sheepImage from '../../src/media/sheep.png'
// -- activate this code --
// import { useAxios } from 'use-axios-client'
//=================================================
// const baseUrl = `http://localhost/`
//=================================================
// -- activate this code --
const KaupapaLanding = () => {
    return (
        <div className='kaupapa_Landing' style={{ backgroundImage: `url(${background})` }}>
            <div className='kaupapa_Landing_item_1'>
                <p>scroll for more</p>
            </div>
            <div className='kaupapa_Landing_item_2'></div>
            <div className='kaupapa_Landing_item_3'>
                <p>E te iwi whānui, nau mai ki tēnei whārangi hou! Welcome to our new page where we will share our stories of the land - past, present, and future. This is Ngā Awapūrua <br></br> - <br></br><span id='tagline'>The Joining of Two Streams.</span></p>
            </div>
            <div className='kaupapa_Landing_item_4'>
                <h1>Kaupapa</h1>
            </div>
            <div className='kaupapa_Landing_item_5'>
                <h1>Ngā awapūrua</h1>
            </div>

        </div>
    )
}



const KaupapaContent1 = () => {
    // -- activate this code --
    //=============================================
    // const endpoint = `${baseUrl}posts?_embed`
    // const { data: newsPosts, error, loading } = useAxios({
    //     url: endpoint
    // })

    // // check if the news posts have been returned
    // if (loading) return (
    //     <p>Loading...</p>
    // )
    // if (!newsPosts) return "No posts found"
    // if (error) return "Error"
    // console.log(newsPosts);
    //=================================================
    // -- activate this code --
    return (
        <div className='kaupapa_Content'>
            <div className='title'>
                <p>Nga Awapurua Kaupapa
                </p>
            </div>
            <div className='title_a'></div>

            <div className='image' style={{ backgroundImage: `url(${sheepImage})` }}></div>
            <div className='content'>
                <p> <b>Egestas congue quisque.</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Egestas congue quisque egestas diam in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Consectetur lorem donec massa sapien faucibus et. </p>
                <p>Posuere sollicitudin aliquam ultrices sagittis. Neque sodales ut etiam sit amet nisl purus. At elementum eu facilisis sed odio morbi quis commodo. Arcu risus quis varius quam quisque id. Id volutpat lacus laoreet non curabitur gravida arcu ac. Imperdiet massa tincidunt nunc pulvinar sapien.</p>
            </div>
        </div>
    )
}


const Kaupapa = () => {
    return (
        <>
            <KaupapaLanding />
            <KaupapaContent1 />

        </>
    )
}

export default Kaupapa