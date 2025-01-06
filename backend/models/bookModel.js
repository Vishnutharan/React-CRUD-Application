// Import the mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Define a schema for the 'Book' collection in MongoDB
// This will define the structure and validation for the documents in the collection
const bookSchema = new mongoose.Schema({
    // 'title' field is of type String and it is required (mandatory)
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true }
});

// Create and export a model using the defined schema
// The 'Book' model represents the 'books' collection in MongoDB
// It provides the ability to interact with this collection (CRUD operations)
export const Book = mongoose.model('Book', bookSchema);