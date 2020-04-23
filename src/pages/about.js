import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
   return (
      <Layout>
         <h1>About Page in Gatsby</h1>
         <p>This is my bio</p>
         <p><Link to="/contact">Want to work with me?</Link></p>
      </Layout>
   )
}

export default AboutPage