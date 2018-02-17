"use strict";

const notesDomain = require('../domain/notes');

exports.createNote = function (req, res, next) {
    let noteData = req.body;
    console.log(noteData);
    notesDomain.createNote(noteData)
        .then(note => {
            res.send(note)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}