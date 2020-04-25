//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Results from "../../components/Results/Results.js";
import Footer from "../../components/Footer/Footer.js";

//==================================================
// Define Component "Saved"
//==================================================

class Saved extends Component {

    state= {

    }

    // componentDidMount () {

    // }

    render() {
        return (
            <div>
                <JumboTron />
                    <div>
                        Saved is working
                    </div>   
                    <Results />
                    <Footer />
            </div>
        )
    }
}

export default Saved;