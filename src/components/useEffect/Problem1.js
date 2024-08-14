import React, { useEffect, useState } from 'react'

function Problem1() {
    const [counter, setCounter] =  useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounter(counter=>(counter+1))
        }, 1000)
        return ()=>clearInterval(interval);
    },[])
  return (
    <div>
        <h2>Counter : {counter}</h2>
    </div>
  )
}

export default Problem1