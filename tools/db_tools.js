"use strict";

const mongoose = require('mongoose');
const config = require('../config.json');

exports.DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        mongoose.Promise = global.Promise;

        // database connect
        mongoose.connect('mongodb://' + config.db_config.host + ":" + config.db_config.port + "/" + config.db_config.name)
            .then(() => {
                console.log('mongo connection created');
                resolve();
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject();
            });
    });
};