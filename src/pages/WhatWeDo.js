import { useAxios } from "use-axios-client"

import { Link } from "react-router-dom"

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const WhatWeDoItems = () => {

    const endpoint = `${baseUrl}posts?_embed`
    const { data: whatWeDoPosts, error, loading } = useAxios({
        url: endpoint
    })
    console.log(endpoint);
    if (loading) return (
        <p>Loading...</p>
    )
    if (!whatWeDoPosts) return "No posts found"
    if (error) return "Error"
    console.log(whatWeDoPosts);

    const showWhatWeDoPosts = whatWeDoPosts.map((post, index) => {
        return (

            <Link to={`/whatwedo/${post.id}`} className="whatWeDo_item" key={index} style={{ backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})` }}>

                <p>{post.title.rendered}</p>

            </Link >

        )
    })
    return showWhatWeDoPosts
}

const WhatWeDoHeader = () => {
    return (
        <div className="whatWeDo_header">
            <h1>What We Do</h1>

        </div>
    )
}

const WhatWeDo = () => {
    return (
        <div className="whatWeDo_container">
            <WhatWeDoHeader />
            <div className="whatWeDo">

                <WhatWeDoItems />
            </div>
        </div >
    )
}

export default WhatWeDo