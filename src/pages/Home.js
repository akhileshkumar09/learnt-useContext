import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='container'>
    <div className='useEffect'>
    <Link className='link' to='/useEffect-problem-1'>Problem-1</Link>
    <Link className='link' to='/useEffect-problem-2'>Problem-2</Link>
    <Link className='link' to='/useEffect-problem-3'>Problem-3</Link>
    <Link className='link' to='/useEffect-problem-4'>Problem-4</Link>
    <Link className='link' to='/useEffect-problem-5'>Problem-5</Link>
    </div>   
    </div>
  )
}

export default Home