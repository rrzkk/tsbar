import express from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const port = 8080; // default port to listen

// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.post("/api/postsecret", (req, res) => {
    res.send(req.body);
});

// start the Express server
const server = app.listen( port, () => {
   // console.log( `server started at http://localhost:${ port }` );
});

export default { app, server };