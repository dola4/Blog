import { useState,useEffect } from 'react'

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        //dans le cas ou on Cut le fetch
        const abortCont = new AbortController();

        fetch(url, {signal:abortCont.signal})
        .then(res =>{

            //envoyer une erreur manueal au catch (probleme url)
            if(!res.ok){
                throw Error('could not fetch the data for that ressource');
            }

            return res.json()
        })
        .then(data =>{
            setData(data);
            //Loading disparer
            setIsPending(false);
            //error disparer
            setError(null);
        })
        .catch(err=>{
            if(err.name !== 'AbortError'){
                setError(err.message);
                //Loading disparer
                setIsPending(false);
            }            
        })

        return ()=>abortCont.abort();
    },[url])

    return {
        data,
        isPending,
        error
    }
}

export default useFetch;
 
