"use strict";

const notesDomain = require('../domain/notes');

exports.createNote = function (req, res, next) {
    let noteData = req.body;
    notesDomain.createNote(noteData)
        .then(noteId => {
            res.send(noteId)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

exports.fetchNote = function (req, res, next) {
    let id = req.params.id;
    notesDomain.fetchNote(id)
        .then(note => {
            res.send(note)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}