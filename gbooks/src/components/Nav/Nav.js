//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

//==================================================
// Define Component "Nav"
//==================================================

function Nav() {
    return (
        <nav className="navbar sticky-top m-2">
            <div className="col-2 gbooks">
                <h3>G-books</h3>
            </div>
            <div className="col-10">
            <ul className="nav float-right">
                <li className="nav-item">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved Books
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;