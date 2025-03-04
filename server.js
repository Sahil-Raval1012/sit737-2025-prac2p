const express = require('express');// defining express
const path = require('path');// this defines the path so that it can handle the use of the files with it such as index.html.
const app = express(); // initialising the server using the framework of express
const PORT = 3000; // initializing the port number

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));//creating the path and joining the files
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);// creating the port as 3000, as initialized above and displaying the output in the terminal
});
