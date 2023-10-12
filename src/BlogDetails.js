import React from "react";
import {useHistory, useParams} from 'react-router-dom';
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {id} = useParams();

    //selectByID
    const {data:blog,isPending,error} = useFetch(`http://localhost:4000/api/blogs/${id}`)
    console.log(blog);


    //redirect
    const history = useHistory();

    //deleteById
    const handleDelete = ()=>{
        fetch(`http://localhost:4000/api/blogs/${blog.theBlogSelected._id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ...</div> }
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.theBlogSelected.title}</h2>
                    <p>Written by {blog.theBlogSelected.author}</p>
                    <div>{blog.theBlogSelected.body}</div>

                    <button onClick={handleDelete} >Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;

