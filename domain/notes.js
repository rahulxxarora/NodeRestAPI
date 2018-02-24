"use strict";

const notesDB = require('../db/notes');

exports.createNote = function(noteData) {
    return new Promise(function(resolve, reject) {
        if (!noteData.title ||
            !noteData.body) {
            reject('Missing fields');
            return;
        }
        
        notesDB.saveNote(noteData)
            .then(noteId => {
                resolve(noteId);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.fetchNote = function(id) {
    return new Promise(function(resolve, reject) {
        notesDB.fetchNote(id)
            .then(note => {
                resolve(note);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.deleteNote = function(id) {
    return new Promise(function(resolve, reject) {
        notesDB.deleteNote(id)
            .then(note => {
                resolve(note);
            })
            .catch(err => {
                reject(err);
            })
    });
};