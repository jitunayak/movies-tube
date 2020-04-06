import React from "react"
import { Link } from "react-router-dom"

function Header({ title }) {

    return (

        <div style={{ width: '100%', padding: '30px' }}>
            <Link style={{ fontWeight: "500", fontSize: '19pt' }} to="/">{title}</Link>
        </div>
    )
}

export default Header