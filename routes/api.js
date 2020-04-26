//======================================================
// Dependencies
//======================================================

const express = require("express");
const router = express.Router();
const Book = require("../models/book.js")

//======================================================
// Routes
//======================================================

// Create Book
router.post("/books", (req, res) => {
    console.log("Hit the POST route")
    console.log(req.body.title)
    Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
        
})


// Find all saved books
router.get("/books", (req, res) => {
    console.log("hit the GET route")
    Book.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

// Delete saved book
router.delete("/books/:id", (req, res) => {
    console.log("Hit the DELETE route")
    Book.findOneAndDelete({"id": req.param.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router;