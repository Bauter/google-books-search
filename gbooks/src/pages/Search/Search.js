//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Form from "../../components/Form/Form.js";
import Results from "../../components/Results/Results.js";
import Footer from "../../components/Footer/Footer.js";

//==================================================
// Define Component "Search"
//==================================================

class Search extends Component {

    state= {
        books:[]
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Component methods
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // componentDidMount () {

    // }



    render() {
        return (
            <div>
                <JumboTron />
                    <Form />
                        <div>
                            Search is working
                        </div>  
                    <Results /> 
                    <Footer />
              
            </div>
        )
    }
}

export default Search;