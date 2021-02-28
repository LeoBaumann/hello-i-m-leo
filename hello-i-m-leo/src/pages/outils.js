import * as React from "react"
import { graphql } from "gatsby"

// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <div class="outils">
        {data.allMysqlFormations.edges.map(({ node }, index) => 
            <div class="outil" key={index}>
                <p class="outil_name">{node.name}</p>
                <p class="outil_url">{node.url}</p>
                <p class="outil_other">{node.other}</p>
            </div>
        )}
      </div>
    </main>
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
                    url
                    other
                }
            }
        }
    }
`