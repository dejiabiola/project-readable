import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Welcome to Home
      Link to <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home
