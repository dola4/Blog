import { useEffect } from "react";
import { useState } from "react";

const Training = () => {

    const [title,setTitle] = useState("");

    return(
        <div>
            <label>title</label>
            <input
            value={title}
            onChange={ (e)=> setTitle(e.target.value) }
            />
        </div>
    );
}
 
export default Training;