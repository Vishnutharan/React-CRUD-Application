// Import the necessary modules
import express from 'express';                      // Express is used to create the web server
import mongoose from 'mongoose';                    // Mongoose is used for MongoDB interaction
import cors from 'cors';                            // CORS middleware to handle cross-origin requests
import { PORT, MONGODB_URL } from './config.js';    // Import configuration constants (PORT and MongoDB URL)
import { Book } from './models/bookModel.js';       // Import the Book model

// Initialize an Express application
const app = express();

// Middleware to parse incoming JSON data in the request body
app.use(express.json());

// Use CORS middleware to allow cross-origin requests from the frontend
app.use(cors({
    origin: 'http://localhost:5173',            // Allow requests from this frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type']            // Only allow headers like 'Content-Type'
}));

// Root route - This is a simple GET route that returns a welcome message
app.get('/', (req, res) => {
    res.status(200).send('Welcome To MERN Stack Tutorial');  // Respond with a message when accessing the root URL
});

// Route to save a new book in the database
app.post('/books', async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { title, author, publishYear } = req.body;

        // Validate that all required fields are present
        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Please provide all required fields: title, author, publishYear'
            });
        }

        // Create a new book object
        const newBook = { title, author, publishYear };
        // Save the book to the database
        const book = await Book.create(newBook);

        // Respond with the newly created book
        return res.status(201).send(book);
    } catch (error) {
        console.error(error.message);  // Log any errors that occur
        res.status(500).send({ message: error.message });  // Send a 500 response in case of a server error
    }
});

// Route to get all books from the database
app.get('/books', async (req, res) => {
    try {
        // Fetch all books using Mongoose's find() method
        const books = await Book.find({});
        
        // Respond with the total count and the data of all books
        res.status(200).json({
            count: books.length,   // Count the number of books returned
            data: books            // Send the book data in the response
        });
    } catch (error) {
        console.error(error.message);                      // Log any errors that occur
        res.status(500).send({ message: error.message });  // Send a 500 response in case of a server error
    }
});

// Route to get a single book by its ID
app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;             // Extract the 'id' parameter from the request URL
        const book = await Book.findById(id);  // Use Mongoose's findById() to get the book by ID

        if (!book) {
            return res.status(404).send({ message: 'Book not found' });  // Send 404 if no book found
        }

        // Respond with the found book
        res.status(200).json(book);
    } catch (error) {
        console.error(error.message);                      // Log any errors that occur
        res.status(500).send({ message: error.message });  // Send a 500 response in case of a server error
    }
});

// Route to update an existing book
app.put('/books/:id', async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { title, author, publishYear } = req.body;

        // Validate that all required fields are provided
        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Please provide all required fields: title, author, publishYear'
            });
        }

        const { id } = req.params;  // Extract the 'id' parameter from the request URL
        // Use Mongoose's findByIdAndUpdate() to update the book by ID
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });

        if (!updatedBook) {
            return res.status(404).send({ message: 'Book not found' });  // Send 404 if the book is not found
        }

        // Respond with the updated book and a success message
        res.status(200).send({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        console.error(error.message);                      // Log any errors that occur
        res.status(500).send({ message: error.message });  // Send a 500 response in case of a server error
    }
});

// Route to delete a book by its ID
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Extract the 'id' parameter from the request URL
        // Use Mongoose's findByIdAndDelete() to delete the book by ID
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).send({ message: 'Book not found' });  // Send 404 if the book is not found
        }

        // Respond with a success message after deletion
        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message);                      // Log any errors that occur
        res.status(500).send({ message: error.message });  // Send a 500 response in case of a server error
    }
});

// Connect to MongoDB and start the server
mongoose.connect(MONGODB_URL)                      // Use Mongoose to connect to MongoDB using the connection string from config
    .then(() => {
        console.log('App connected to database');  // Log success when connected to MongoDB
        // Start the server and listen on the specified PORT
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);  // Log any errors that occur during MongoDB connection
    });
