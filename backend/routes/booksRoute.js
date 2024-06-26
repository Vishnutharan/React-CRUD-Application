import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route to save a new book
router.post('/books', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        
        // Validate request body
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please provide all required fields: title, author, publishYear' });
        }

        // Create a new book
        const book = await Book.create({ title, author, publishYear });
        return res.status(201).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ count: books.length, data: books });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route to get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route to update a book
router.put('/:id', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        // Validate request body
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please provide all required fields: title, author, publishYear' });
        }

        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default router;
