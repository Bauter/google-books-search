//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";

//==================================================
// Define Component "Form"
//==================================================

function Form(props) {
    return (
        <div className="card m-4">

            <div className="card-title m-2">
                <h4>Search for a book!</h4>
            </div>   

            <div className="card-body">
                <div className="form">
                    <input type="text" onChange={props.handleInputChange} name="search" className="form-group" placeholder="Search for a book!" required />
                    <button className="btn btn-primary form-group" onClick={props.handleFormSubmit}>Search</button>
                </div>
            </div>
             
        </div>
    );
}

export default Form;

// make a class or keep as a defined component??? proably go with props since its tied into the search Component