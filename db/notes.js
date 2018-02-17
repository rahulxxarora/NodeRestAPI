"use strict";

const db_tools = require('../tools/db_tools');
const mongoose = require('mongoose');

// Create a Mongoose schema
const NoteSchema = new mongoose.Schema({
    title: String,
    body: String
});

// Register the schema
const Note = mongoose.model('note', NoteSchema);

exports.Note = Note;
exports.saveNote = function(noteData) {
    let note = new Note(noteData);
    return new Promise(function(resolve, reject) {
        note.save()
            .then(note => {
                console.log("Note saved!");
                resolve(note);
            })
            .catch(err => {
                console.log("Error saving note: " + err);
                reject(err);
            })
    })
}