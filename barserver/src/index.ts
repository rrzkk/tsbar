import express from "express";
import bodyParser from 'body-parser';
import guid from './guid';
import jsonop from './jsonop'

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
//Can be delete later
app.post("/api/postsecret",(req,res)=>{
    const secret=req.body.data;
    res.send(secret);
})
//Can be delete later
app.post("/api/trasfertoguid",(req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    res.send(guidnum);
})
//Can be delete later
app.post("/api/trasfersecret",(req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    res.send({
        secret:secret,
        guid:guidnum
    });
})

app.post("/api/trasfersecret2",async (req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    const jsonpair={
        secret:secret,
        guid:guidnum
    };
    res.send({
        secret:secret,
        guid:guidnum
    });
    const jsonfile=await jsonop.jsonreadall();
    jsonop.jsonwrite(jsonfile, jsonpair)
})  

app.get("/api/getsecret", (req,res)=>{
    const guid=req.query.guid;
    res.send(jsonop.jsonread(guid));
})




// start the Express server
const server =app.listen( port, () => {
   // console.log( `server started at http://localhost:${ port }` );
} );

export default {app,server};