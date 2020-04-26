//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Form from "../../components/Form/Form.js";
import Results from "../../components/Results/Results.js";
import Footer from "../../components/Footer/Footer.js";
import BookCard from "../../components/BookCard/BookCard.js";
import API from "../../utils/API.js";

//==================================================
// Define Component "Search"
//==================================================

class Search extends Component {

    state= {
        books:[],
        searchTerm: "",
        
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Component methods
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // componentDidMount () {

    // }

    getBooksFromGoogle = (searchTerm) => {
        // Run function from API.js to search google-books
        API.getBooksFromGoogle(searchTerm)
            .then(res => {
                console.log(res.items[0].volumeInfo.imageLinks.thumbnail)
                
                console.log(this.state.searchTerm)
                console.log(this.state.books)
    
                this.setState({ books: res.items })
                console.log("after setState")
                console.log(this.state.books)
            });
    }

    handleInputChange = event => {
        // Assign the search change in input to a variable.
        const formInput = event.target.value;
        // Set the this.state.searchTerm to value of formInput.
        this.setState({ searchTerm: formInput })

       ;
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // Call function "getBooksFromGoogle" with argument of "searchTerm" 
        this.getBooksFromGoogle(this.state.searchTerm)
    }

    handleSaveBtn(event) {
        event.preventDefault()
        // Run function from API.js
        API.saveBook()
            .then(res =>
             alert(`book: ${res} has been saved to DB`)   
            )
    }


    thumbnail
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Render
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    render() {
        return (
            <div>
                <JumboTron />
                    <Form 
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    
                        {this.state.books.length ? (
                        <div>
                            {this.state.books.map(book => 
                            ( 
                                
                                <BookCard
                                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150" }
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    summary={book.volumeInfo.description}
                                    handleSaveBtn={this.handleSaveBtn}
                                    link={book.selfLink}
                                    id={book.id}
                                />
                            ))}
                        </div>
                        ) : 
                            ( <h3>No results found. Try searching for a new book!</h3>)    
                        } 
                    <Footer />
              
            </div>
        )
    }
}

export default Search;