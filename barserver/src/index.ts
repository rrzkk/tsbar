import express from "express";
import path from 'path';
 const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.post("/api/postsecret",(req,res)=>{
    const secret=req.body.data;
    res.send("secret");
})

// start the Express server
app.listen( port, () => {
   // console.log( `server started at http://localhost:${ port }` );
} );