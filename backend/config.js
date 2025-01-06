// config/config.js

// Export a constant 'PORT' that defines the port number the server will run on
// In this case, the server will listen on port 5555
export const PORT = 5555;

// Export a constant 'MONGODB_URL' that holds the URL for connecting to the MongoDB database
// The URL specifies the MongoDB protocol, the local host, and the specific database ('mydatabase')
// It will connect to MongoDB running locally at port 27017 (default MongoDB port)
export const MONGODB_URL = 'mongodb://localhost:27017/mydatabase'; //mydatabase is database name 