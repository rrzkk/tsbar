const express = require( "express" );
const path = require("path")
const app = express();

const port = 3001 // default port to listen

// define a route handler for the default home page
app.use(express.static(path.resolve(__dirname, '../build')));

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );