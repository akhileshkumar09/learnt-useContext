import React, { useState } from 'react'
import HiddenComponent from './HiddenComponent';




function Problem4() {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = ()=>{
        setIsVisible(!isVisible);
    }
    return (
      <div>
        <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Hidden Component
      </button>
      {isVisible && <HiddenComponent/> }
      </div>
    )
  }


export default Problem4