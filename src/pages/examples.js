import React from 'react'
import Layout from '../components/Layout'
import Header from '../examples/header'
import HeaderStatic from '../examples/HeaderStatic'



const examples = ({data}) => {
  const {site:{info:{author}}} = data

  return (
    <Layout>
      <h1>Hello from Examples</h1>
       <Header/>
       <HeaderStatic/>
  <h5>author: {author}</h5>
    </Layout>
   
  )
}
export const data = graphql
`
query MyQuery {
  site {
    info:siteMetadata {
       person {
        age
        name
      }
      author
      data
      description
      title
    }
  }
}
`
export default examples
