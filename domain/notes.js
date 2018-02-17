"use strict";

const notesDB = require('../db/notes');

exports.createNote = function(noteData) {
    return new Promise(function(resolve, reject) {
        if (!noteData.title ||
            !noteData.body) {
            reject('Missing fields');
            return;
        }

        noteData.completeInfo = noteData.title + " -> " + noteData.body;

        notesDB.saveNote(noteData)
            .then(note => {
                resolve(note);
            })
            .catch(err => {
                reject(err);
            })
    });
};