import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
   const data = useStaticQuery(graphql`
      query {
         allMarkdownRemark {
         edges {
            node {
                  frontmatter {
                     title
                     date
                  } 
               html
               excerpt
            }
         }
         }
      }
   `)

   console.log(data.allMarkdownRemark.edges[0])

   return (
      <Layout>
         <h1>Blog Page in Gatsby</h1>
         <p>Posts will show up here later on</p>

         {data.allMarkdownRemark.edges.map = post => {
            <ol>
               {post.frontmatter.title}
            </ol>
         }}
      
      </Layout>
   )
}

export default BlogPage