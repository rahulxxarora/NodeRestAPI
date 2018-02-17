"use strict";

const notes = require('./notes');

exports.assignRoutes = function (app) {
    app.post('/notes', notes.createNote);
}