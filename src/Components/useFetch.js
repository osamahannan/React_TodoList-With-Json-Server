import {useState,useEffect} from 'react';

const useFetch = (url) =>{

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [response, setresponse] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok)
            throw Error('Could not fetch the data for that resource!');

            return res.json();
        })
        .then(data => {
            setdata(data);
            setloading(false);
            setresponse(null);
        })
        .catch(e => {
            setloading(false);
            setresponse(e.message);
        })
    },[url])
    return {data, loading, response};
}

export default useFetch;