import { Link } from "gatsby"
import React from "react"

const ListLink = props => (
    <Link className="nav-link" activeClassName="nav-link active" to={props.to}>{props.children}</Link>
)

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ListLink to={"/"}><span role="img" aria-label="my_head">&#129489;</span></ListLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ListLink to={"/experiences"}>Experiences</ListLink>
                            <ListLink to="/formations">Formations</ListLink>
                            <ListLink to="/outils">Outils</ListLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header