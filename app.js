"use strict";

const express = require('express');
const bodyparser = require('body-parser');

const db_tools = require('./tools/db_tools');

const app = express();


db_tools.DBConnectMongoose()
    .then(() => {
        const routes = require('./routes/routes');

        // configure app to use bodyParser()
        // this will let us get the data from a POST
        app.use(bodyparser.urlencoded({extended: true}));
        app.use(bodyparser.json({limit: '10mb'}));

        routes.assignRoutes(app);
        app.listen(3000);

        console.log('Server listening on port 3000');
    })
    .catch(err => {
        console.log('Error: ' + err)
    })