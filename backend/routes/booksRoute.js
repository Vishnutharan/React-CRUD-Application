// // Import the express module to create routers and handle HTTP requests
// import express from 'express';
// // Import the Book model from bookModel.js to interact with the database
// import { Book } from '../models/bookModel.js';

// // Create a new router object to define routes separately from the main app
// const router = express.Router();

// /*
//  * Route to save a new book
//  * Method: POST
//  * Endpoint: /books
//  */
// router.post('/books', async (req, res) => {
//     try {
//         // Extract title, author, and publishYear from the request body
//         const { title, author, publishYear } = req.body;
        
//         // Validate request body to ensure all required fields are present
//         if (!title || !author || !publishYear) {
//             return res.status(400).json({
//                 message: 'Please provide all required fields: title, author, publishYear'
//             });
//         }

//         // Create a new book document in the database
//         const book = await Book.create({ title, author, publishYear });
//         // Return the newly created book with a 201 (Created) status code
//         return res.status(201).json(book);
//     } catch (error) {
//         // Log any errors to the console for debugging
//         console.error(error.message);
//         // Return a 500 (Internal Server Error) status code with the error message
//         res.status(500).json({ message: error.message });
//     }
// });

// /*
//  * Route to get all books
//  * Method: GET
//  * Endpoint: /
//  */
// router.get('/', async (req, res) => {
//     try {
//         // Fetch all book documents from the database
//         const books = await Book.find({});
//         // Return the count and data of all books with a 200 (OK) status code
//         res.status(200).json({ count: books.length, data: books });
//     } catch (error) {
//         // Log any errors to the console for debugging
//         console.error(error.message);
//         // Return a 500 (Internal Server Error) status code with the error message
//         res.status(500).json({ message: error.message });
//     }
// });

// /*
//  * Route to get a book by its ID
//  * Method: GET
//  * Endpoint: /:id
//  */
// router.get('/:id', async (req, res) => {
//     try {
//         // Extract the book ID from the request parameters
//         const { id } = req.params;
//         // Find the book in the database by its ID
//         const book = await Book.findById(id);

//         // If the book is not found, return a 404 (Not Found) status code
//         if (!book) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         // Return the found book with a 200 (OK) status code
//         res.status(200).json(book);
//     } catch (error) {
//         // Log any errors to the console for debugging
//         console.error(error.message);
//         // Return a 500 (Internal Server Error) status code with the error message
//         res.status(500).json({ message: error.message });
//     }
// });

// /*
//  * Route to update an existing book
//  * Method: PUT
//  * Endpoint: /:id
//  */
// router.put('/:id', async (req, res) => {
//     try {
//         // Extract title, author, and publishYear from the request body
//         const { title, author, publishYear } = req.body;

//         // Validate request body to ensure all required fields are present
//         if (!title || !author || !publishYear) {
//             return res.status(400).json({
//                 message: 'Please provide all required fields: title, author, publishYear'
//             });
//         }

//         // Extract the book ID from the request parameters
//         const { id } = req.params;
//         // Find the book by ID and update it with new data
//         const updatedBook = await Book.findByIdAndUpdate(
//             id,
//             { title, author, publishYear },
//             { new: true } // Option to return the updated document
//         );

//         // If the book is not found, return a 404 (Not Found) status code
//         if (!updatedBook) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         // Return a success message and the updated book with a 200 (OK) status code
//         res.status(200).json({ message: 'Book updated successfully', updatedBook });
//     } catch (error) {
//         // Log any errors to the console for debugging
//         console.error(error.message);
//         // Return a 500 (Internal Server Error) status code with the error message
//         res.status(500).json({ message: error.message });
//     }
// });

// /*
//  * Route to delete a book by its ID
//  * Method: DELETE
//  * Endpoint: /:id
//  */
// router.delete('/:id', async (req, res) => {
//     try {
//         // Extract the book ID from the request parameters
//         const { id } = req.params;
//         // Find the book by ID and delete it from the database
//         const deletedBook = await Book.findByIdAndDelete(id);

//         // If the book is not found, return a 404 (Not Found) status code
//         if (!deletedBook) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         // Return a success message with a 200 (OK) status code
//         res.status(200).json({ message: 'Book deleted successfully' });
//     } catch (error) {
//         // Log any errors to the console for debugging
//         console.error(error.message);
//         // Return a 500 (Internal Server Error) status code with the error message
//         res.status(500).json({ message: error.message });
//     }
// });

// // Export the router so it can be used in other parts of the application
// export default router;
