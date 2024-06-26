import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGODB_URL } from './config.js';
import { Book } from './models/bookModel.js';

const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173',  // Update the origin to match your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome To MERN Stack Tutorial');
});

// Route to save a new book
app.post('/books', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Please provide all required fields: title, author, publishYear'
            });
        }

        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get a book by ID
app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }

        res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to update a book
app.put('/books/:id', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Please provide all required fields: title, author, publishYear'
            });
        }

        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });

        if (!updatedBook) {
            return res.status(404).send({ message: 'Book not found' });
        }

        res.status(200).send({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).send({ message: 'Book not found' });
        }

        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Connect to MongoDB and start the server
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
