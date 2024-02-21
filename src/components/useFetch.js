import { useState, useEffect } from "react";
import axios from "axios";

const  UseFetch = (url) => {
    const [data, setBlogs] = useState(null);

    useEffect (() => {
        axios.get(url)
        .then(res => (setBlogs(res.data)))

        .catch(err => console.log(err))
    }, [url]);

    return {data};
}

export default UseFetch;