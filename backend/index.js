import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from './models/bookModel.js';
import cors from 'cors';

const app = express();
app.use(express.json());

// Use cors middleware
app.use(cors({
    origin: 'http://localhost:5173',  // Update the origin to match your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome To MERN Stack Tutorial');
});

// Route for save new book
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all the required fields: title, author, publishYear'
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all books
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get a book by ID
app.get('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        if (!book) {
            return response.status(404).send({ message: 'Book not found' });
        }
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for update
app.put('/books/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all the required fields: title, author, publishYear'
            });
        }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body, { new: true });
        if (!result) {
            return response.status(404).json({ message: 'book not found' });
        }
        return response.status(200).send({ message: 'Booking update successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a book
app.delete('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Connect to MongoDB and start the server
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
