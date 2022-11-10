import React from 'react'
import { useAxios } from 'use-axios-client'
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeftCircleFill } from "react-bootstrap-icons"

import formateDate from './utilities/formatDate'


const baseUrl = process.env.REACT_APP_WP_API_BASEURL;


const WhatWeDoItems = () => {

    const navigate = useNavigate();
    const params = useParams();
    const endpoint = `${baseUrl}posts/${params.id}?_embed`
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

    const Lists = () => {
        const taxonomyEndpoint = whatWeDoPosts._links["wp:term"][2].href;

        //grab the taxonomies associated with this artist
        const { data: taxonomies, error, loading } = useAxios({
            url: taxonomyEndpoint
        })
        if (loading) return "Loading...";
        if (!taxonomies) return "No data...";
        if (taxonomies.length === 0) return "No results found!";
        if (error) return "Error!";

        const renderedTaxonomies = taxonomies.map((lists, index) => {
            return (
                <div className='genre' key={index}>
                    {lists.name}
                </div>
            )
        })
        return renderedTaxonomies
    }

    return (
        <div className='WhatWeDoItems_container'>
            <div className='WhatWeDoItems_image' style={{ backgroundImage: `url(${whatWeDoPosts._embedded['wp:featuredmedia'][0].source_url})` }}>
                <div className='button_back' onClick={() => { navigate(-1) }}>
                    <button><ArrowLeftCircleFill /></button>
                </div>
                <div className='genre-container'>
                    <Lists />
                </div>

            </div>
            <div className='WhatWeDoItems_header'>
                <h1>{whatWeDoPosts.title.rendered}</h1>

            </div>
            <div className='WhatWeDoItems_content'>
                <div className='date'>
                    <p>{formateDate(whatWeDoPosts.date)}</p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: whatWeDoPosts.content.rendered }} />
                <div className='author' >
                    <div className='line'></div>
                    <p> posted by {whatWeDoPosts._embedded['author'][0].name}</p>
                </div>
            </div>




        </div>
    )
}

export default WhatWeDoItems