const express = require('express');
const path = require('path');
const api = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));