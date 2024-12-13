import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'ematix', // Replace with your MySQL username
    password: 'Ematix@2024', // Replace with your MySQL password
    database: 'ematix_solutions' // Replace with your database name
});

db.connect(err => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Example Route: Fetch Users

// Ensure this route is defined in your backend server.js
app.get('/api/data', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
  });
  

const port = 5000; // Change this to another port, e.g., 5001

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
