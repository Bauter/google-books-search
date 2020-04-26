//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";

//==================================================
// Define Component "Jumbotron"
//==================================================

function Jumbotron(props) {
    return (
        <div className="jumbotron m-4">

            <h1 className="text-center mb-4">{props.title}</h1>
            <h3 className="text-center">{props.pageDescription}</h3>
            <h6 className="text-center">{props.message}</h6>
                
        </div>
    );
}

export default Jumbotron;

//Search Google Books for books to save to your data base