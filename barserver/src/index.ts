import express from "express";
import bodyParser from 'body-parser';
import guid from './guid';
import jsonop from './jsonop';

import cors from 'cors';


const app = express();
app.use(bodyParser.json());
const port = 8080; // default port to listen

// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));
app.use(cors()) // Use this after the variable declaration
app.get( "/", ( req, res ) => {

    res.send( "Hello world!" );

} );

app.get("/api/test",(req,res)=>{

    res.send("test success");
})

// this method is used to post secret and store guid
app.post("/api/trasfersecret2",async (req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
    const jsonpair={
        secret,
        guid:guidnum
    };
    res.send(guidnum);
    const jsonfile=await jsonop.jsonreadall();
    jsonop.jsonwrite(jsonfile, jsonpair)
})
// this method is used to get secret by guid
app.get("/api/getsecret", async (req,res)=>{
    const guid=req.query.guid.toString();
    const result= await jsonop.jsonread(guid);

    res.send(result);
    jsonop.jsondelete(guid);
})




// start the Express server
const server =app.listen( port, () => {
 
} );

export default {app,server};