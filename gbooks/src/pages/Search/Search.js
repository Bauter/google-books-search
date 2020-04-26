//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Form from "../../components/Form/Form.js";
import Results from "../../components/Results/Results.js"; // remove this
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
        btnName: "Save"
        
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

    handleBtn = (id) => {
        
        console.log(id)
        let bookInfo = this.state.books.filter(book => book.id === id)
        // Run function from API.js
        console.log (bookInfo[0])
        console.log(bookInfo[0].volumeInfo.authors[0])

        let bookObject = {
            title: bookInfo[0].volumeInfo.title,
            author: bookInfo[0].volumeInfo.authors[0],
            description: bookInfo[0].volumeInfo.description,
            image: bookInfo[0].volumeInfo.imageLinks ?  bookInfo[0].volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150",
            link: bookInfo[0].volumeInfo.previewLink
        }
        API.saveBook(bookObject)
            .then(res =>
             alert(`book: ${res.data} has been saved to DB`)   
            )
    }


    
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
                                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150" }
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    summary={book.volumeInfo.description}
                                    handleBtn={() => {this.handleBtn(book.id)}}
                                    link={book.volumeInfo.previewLink}
                                    id={book.id}
                                    btnName={this.state.btnName}
                                />
                            ))}
                        </div>
                        ) : 
                            (
                                <div className="card m-4">
                                    <h3>No results found. Try searching for a new book!</h3>
                                </div>
                            )    
                        } 
                    <Footer />
              
            </div>
        )
    }
}

export default Search;