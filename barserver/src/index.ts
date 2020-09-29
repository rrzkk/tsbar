import express from "express";
import bodyParser from 'body-parser';
import guid from './guid';

const app = express();
app.use(bodyParser.json());
const port = 8080; // default port to listen

// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));

app.get( "/", ( req, res ) => {

    res.send( "Hello world!" );

} );

app.get("/api/test",(req,res)=>{

    res.send("test success");
})

app.post("/api/postsecret",(req,res)=>{
    const secret=req.body.data;
    res.send(secret);
})

app.post("/api/trasfertoguid",(req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    res.send(guidnum);
})
app.post("/api/trasfersecret",(req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    res.send({
        secret:secret,
        guid:guidnum
    });
})


// start the Express server
const server =app.listen( port, () => {
   // console.log( `server started at http://localhost:${ port }` );
} );

export default {app,server};