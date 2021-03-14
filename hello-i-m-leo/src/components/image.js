import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename)
            })
            if (!image) {
                return null
            }

            const imageFluid = image.node.childImageSharp.fluid
            if (props.filename === "pdp.JPG"){
                const StyledImage = styled(Img)`
        border-radius: 100px;
        box-shadow: 0 4px 15px grey;
        `
                return <StyledImage alt={props.alt} fluid={imageFluid} />
            }
            else if (props.filename !== "pdp.PNG" && "Background.gif" && "GitHub-Mark-120px-plus.png"){
                const StyledImage = styled(Img)`
        max-height: 80%;
        width: auto;
        `
                return <StyledImage alt={props.alt} fluid={imageFluid} />
            }
            else{
                return <Img alt={props.alt} fluid={imageFluid} />
            }
        }}
    />
)

export default Image