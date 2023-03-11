const e = require('express');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
/**
 * @param {string} destination
 * @param {object} content
 * @returns {void} nothing
 */

const writeFileAsync = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.error(err) : console.log('Success!')
    );
/**
 * @param {string} destination
 * @returns {object} content
 * @returns {void} nothing
 */

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeFileAsync(file, parsedData);
        }
    });
};

module.exports = { readFileAsync, writeFileAsync, readAndAppend };



