//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron/Jumbotron.js";
import Results from "../../components/Results/Results.js";
import Footer from "../../components/Footer/Footer.js";
import BookCard from "../../components/BookCard/BookCard.js";
import API from "../../utils/API.js";

//==================================================
// Define Component "Saved"
//==================================================

class Saved extends Component {

    state= {
        savedBooks: [],
        btnName:"Delete"
    }

    componentDidMount () {
        API.getSavedBooks()
            .then(res => {
                console.log(res)
                if(!res) {
                    alert("no saved books at this time!")
                } else {
                    console.log(res)
                    this.setState({savedBooks: res})
                }
            })
    }

    handleBtn (id) {
        API.deleteBook(id)
            .then(res => {
                alert("Book deleted!")
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div>
                <JumboTron />
                    {this.state.savedBooks.length ? (
                    <div>
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
                ) : 
                    ( 
                        <div className="card m-4">
                            <h3>No saved books found</h3>   
                        </div>
                    )
                }   
                    
                <Footer />
            </div>
        )
    }
}

export default Saved;