import { useAxios } from "use-axios-client"

import { Link } from "react-router-dom"

const baseUrl = `http://localhost/Formative/wp-json/wp/v2/`

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

            <Link className="whatWeDo_item" key={index} style={{ backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})` }}>
                {/* <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} /> */}
                <p>{post.title.rendered}</p>
                {/* <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div> */}
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