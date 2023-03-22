import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Operations Specialist</title>
        <meta property="og:title" content="Product Operations Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
