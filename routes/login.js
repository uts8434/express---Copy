import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Create Express app
const app = express();
const port = 8080;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple login logic for demonstration (replace with actual authentication)
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
