import React, { useEffect, useState } from 'react'
// To prevent from fetching again and again
const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            let res = await fetch(url)
            let response = await res.json()
            setData(response)
        }
        getData()
    }, [])
    // Just return state 
    return [data]
}

export default useFetch