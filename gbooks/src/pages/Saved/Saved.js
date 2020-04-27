//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Footer from "../../components/Footer/Footer.js";
import BookCard from "../../components/BookCard/BookCard.js";
import API from "../../utils/API.js";
import "./style.css";

//==================================================
// Define Component "Saved"
//==================================================

class Saved extends Component {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // State
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    state= {
        savedBooks: [],
        btnName:"Delete",
        title: "G-Books",
        description: "",
        headerMessage: ""
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Component methods
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Get books from dataBase and setState: savedBooks , or display alt "description".
    componentDidMount () {
        // Use API function "getSavedBooks" to return saved books from DB.
        API.getSavedBooks()
            .then(res => {
                console.log(res)
                if(!res) {
                    // If no response, display the appropriate description by changing state.
                    this.setState({ description: "Once you save some books, they will appear here" })
                } else {
                    console.log(res)
                    // If response, setState.
                    this.setState({ savedBooks: res, description: "Here are your saved books!", headerMessage: "Click 'View' to view on 'Google-Books' and 'Delete' to remove a saved book!" })
                }
            })
    }

    // Handle button event

    handleBtn (id) {
        // Use API function "deleteBook" to delete book from DB.
        API.deleteBook(id)
            .then(res => {
                // Inform the user ther book has been deleted.
                alert("Book deleted!");
                // Call "componentDidMount" to refresh savedBooks displayed after delete.
                this.componentDidMount()
            })
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Render (Use ternary operator to determine what will display in "container" div)
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    render() {
        return (
            <div>
                <JumboTron
                    title={this.state.title}
                    pageDescription={this.state.description}
                    message={this.state.headerMessage}                
                />
                
                    
                        {this.state.savedBooks.length ? (

                        <div className="card justify-content-center results border border-success m-4">
                            {this.state.savedBooks.map(book => 
                            ( 
                                
                                <BookCard
                                    image={book.image}
                                    title={book.title}
                                    author={book.author}
                                    summary={book.description}
                                    handleBtn={() => {this.handleBtn(book._id)}}
                                    link={book.link}
                                    id={book._id}
                                    btnName={this.state.btnName}
                                />
                            ))}
                        </div>
                    ) 
                    : 
                    ( 
                        <div className="card justify-content-center noResults border border-danger m-4" style={{width: "100%"}}>
                            <h3 className="text-center">No saved books found</h3>   
                        </div>
                    )}  
                
                 
                <Footer />
            </div>
        )
    }
}

export default Saved;