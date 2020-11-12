const path = require('path');
const colors = require('colors');
const app = require('express')();
const dotenv = require('dotenv');
const morgan = require('morgan');
const server = require('http').createServer(app);

//initiate array prototype "load" => loads the routes predefined inside of array;
const router = require('./configuration/server-start/loadRoutes.js');

//initiate configurations
dotenv.config();
app.use(morgan('dev'));
colors.enable();

//Use predefined function => initiate routes
router(
    app, 
    [
        {path: path.join(__dirname, 'router')}
    ]
)


//Startup Server
server.listen(process.env.PORT, (err) => {
    console.log(`Opened HTTP-Server on port ${process.env.PORT}`.cyan);
});

