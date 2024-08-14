import React, { useEffect, useState } from 'react'

export default function Problem3() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener('resize', handleResize)}
    },[])
  return (
    <div>
        <p>Current Window Width is {width}px</p>
    </div>
  )
}
