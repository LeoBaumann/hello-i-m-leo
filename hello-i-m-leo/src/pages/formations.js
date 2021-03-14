import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

// markup
const IndexPage = ({data}) => {
  return (
    <div>
        <Layout>
          <div class="formations">
            {data.allMysqlFormations.edges.map(({ node }, index) =>
                <div class="formation" key={index}>
                    <p class="formation_name">{node.name}</p>
                    <p class="formation_school"><a href={node.url}>{node.school}</a></p>
                    <p class="formation_city">{node.city}</p>
                    <p class="formation_years">{node.years}</p>
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
        allMysqlFormations {
            edges {
                node {
                    id
                    name
                    school
                    url
                    city
                    years
                }
            }
        }
    }
`