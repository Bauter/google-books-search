//===================================================
// Import requires files
//===================================================

import axios from "axios";

// Define API functions inside exported module.

export default {
    // Get books by search term from google
    getBooksFromGoogle: function(searchTerm) {
        // Define the api key and apiURL
        const key=process.env.GOOGLE_BOOKS_API
        const apiURL = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&=" + key + ""

        return axios.get(apiURL)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Gets the saved books
    getSavedBooks: function() {
        return axios.get("/api/books")
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Deletes the book with the given id
    deleteBook: function(id)  {
        return axios.delete("/api/books/" + id)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
            .then(res => res.data)
            .catch(err => console.log(err))
    }
};


