import React, { useEffect, useState } from 'react'

const Problem2 = ()=> {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(()=>{
        
        const fetchData = async()=>{
            try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            const result = await response.json();
            console.log(result)
            setData(result);
           }
           catch(error){
             setError(error.message)
            } finally{
              setLoading(false)
            }
        }

       fetchData();
    },[])
    if(error){
        return <p>Error: {error}</p>
    }
    if(loading){
        return <p>Loading...</p>
    }
  return (
    <div>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Problem2