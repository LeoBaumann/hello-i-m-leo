import React from "react"

import Header from "./header"

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Header/>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with love by Leo Baumann
                </footer>
            </div>
        </>
    )
}

export default Layout