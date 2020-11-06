import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"
import Image  from "gatsby-image"
import {Link} from "gatsby"

const ComponentName = ({ data }) => {
  const {allContentfulProduct:{nodes:products},
 } = data


  return <Layout>
    <section className={styles.page}>
      {products.map((producto) =>{
          return <article key={producto.id}>
              <Image fluid={producto.image.fluid} alt={producto.title}></Image>
      <h3>{producto.title}<span>${producto.price}</span></h3>
      <Link to= {`/porducts/${producto.slug}`}>more details</Link>
          </article>
      })}
    </section>
    </Layout>
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        info {
          info
        }
      }
    }
  }
`

export default ComponentName
