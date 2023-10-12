// import { useState,useEffect } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs,isPending,error} = useFetch('http://localhost:4000/api/blogs/');


    return ( 
        <div className="home" > 
            { error && <div>{error}</div>}
            { isPending && <div>Loading ...</div>}
            { blogs && <BlogList blogs={blogs}/> }
        </div>
    );

}

export default Home;

