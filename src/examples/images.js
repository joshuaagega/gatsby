import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from "../images/one.jpg"
import Image from "gatsby-image"

const getImages = graphql`
{
  file(relativePath: {eq: "one.jpg"}) {
    childImageSharp {
      fixed(width: 200,grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "two.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`
const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
     <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%"/>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        
      </article>
      <article className="single-image">
        <h3>Fluid Image/Svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}/>
      </article>
    </section>
  )
}

export default Images
