const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/:id', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        let dbData = JSON.parse(data);
        letfilteredData = dbData.filter((note) => note.note_id !== req.params.id);
    });
writeToFile('./db/db.json', filteredData);
res.json(`Note ${req.params.id} has been deleted`);
});

module.exports = notes;




