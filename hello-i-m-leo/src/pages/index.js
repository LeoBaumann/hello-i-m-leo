import * as React from "react"

import Layout from "../components/layout"

import Typed from  'react-typed'

import Image from "../components/image"

const IndexPage = ({data}) => {
  return (
    <div>
        <Layout>
            <div className="home">
                <div className="home__container">
                    <div className="w-25">
                        <Image filename="pdp.jpg"/>
                    </div>
                    <div className="texts">
                        <div className="name">
                            <p>Léo Baumann</p>
                        </div>
                        <div className="typed">
                            <Typed
                                strings={['Etudiant en informatique <br> à Strasbourg <br> 19 ans']}
                                typeSpeed={50}
                                backSpeed={50}
                                backDelay={1000}
                                loop={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="home__others">
                    <div className="other__github">
                        <div className="w-25">
                            <Image filename="GitHub-Mark-120px-plus.png"/>
                        </div>
                        <div className="my__github">
                            <p><a href="https://github.com/LeoBaumann" className="github__text">Mon GitHub</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default IndexPage
