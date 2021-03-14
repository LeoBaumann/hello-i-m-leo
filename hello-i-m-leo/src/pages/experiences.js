import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data}) => {
    return (
        <div>
            <Layout>
                <div class="experiences">
                    {data.allMysqlExperiencesPro.edges.map(({ node }, index) =>
                        <div class="experience" key={index}>
                            <p class="experience__job">{node.job}</p>
                            <p><a href={node.url} class="experience__company">{node.company}</a></p>
                            <p class="experience__city">{node.city}</p>
                            <p class="experience__other">{node.other}</p>
                            <p class="experience__years">{node.years}</p>
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
        allMysqlExperiencesPro {
            edges {
                node {
                    id
                    company
                    url
                    city
                    job
                    other
                    years
                }
            }
        }
    }
`