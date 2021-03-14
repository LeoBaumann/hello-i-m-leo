import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

// markup
const IndexPage = ({data}) => {
  return (
    <div>
        <Layout>
          <div class="outils">
            {data.allMysqlOutils.edges.map(({ node }, index) =>
                <div class="outil" key={index}>
                    <p class="outil_name">{node.name}</p>
                    <p class="outil_url">{node.url}</p>
                </div>
            )}
          </div>
        </Layout>
    </div>
  )
}

export default IndexPage


export const query = graphql`
    query {
        allMysqlOutils {
            edges {
                node {
                    id
                    name
                    other
                    url
                }
            }
        }
    }
`