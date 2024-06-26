import mongoose from 'mongoose';

// Define schema for the book
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true }
});

// Create model from schema
export const Book = mongoose.model('Book', bookSchema);
