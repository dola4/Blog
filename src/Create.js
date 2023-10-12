import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    //1-onChange : setTitle to track entrys
    //2-value : put the title 
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Elmehdi');

    //Loading Message
    const [isPending,setIsPending] = useState(false);

    //Redirect
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);

        const blog = {title,body,author};
        fetch('http://localhost:4000/api/blogs/' , {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then( ()=>{
            console.log('new blog added');
            setIsPending(false);

            //Redirect to
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add New BLog</h2>

            <form onSubmit={handleSubmit} >

                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value) }
                />

                <label>Blog Body:</label>
                <textarea
                    value = {body}
                    onChange={ (e)=> setBody(e.target.value) }
                    required
                ></textarea>  

                <label>Blog Author:</label>
                <select
                value={author}
                onChange={ (e)=> setAuthor(e.target.value)}
                >
                    <option value="Elmehdi">Elmehdi</option>
                    <option value="Matthieu">Matthieu</option>
                    <option value="Olivier">Olivier</option>
                    <option value="Arnaud">Arnaud</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding blog...</button>}

            </form>
        </div>
    );
}
 
export default Create;