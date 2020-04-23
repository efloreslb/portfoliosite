import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../components/layout'

const IndexPage = () => {
   return (
      <Layout>
         <h1>Welcome.</h1>
         <h3>I'm Edgar, a full-stack developer and graphic designer living in Los Angeles.</h3>

         <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
   )
}

export default IndexPage