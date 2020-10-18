import express from "express";
import bodyParser from 'body-parser';
import guid from './guid';
import jsonop from './jsonop';
import cors from 'cors';
import {Pool} from 'pg';


const app = express();
app.use(bodyParser.json());
const port = 8080; // default port to listen
const pool=new Pool({
    user:'postgres',
    host:'54.252.209.243',
    database:'postgres',
    password:'zhekun',
    port:5432
});

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

//get and post using database
app.get("/api/psgl/getsecret",(req,res)=>{
    const guid=req.query.guid.toString();
    pool.query('SELECT * FROM secrets WHERE guids=$1',[guid],(err,resp)=>{
        if(resp.rows.length!==0){
        res.send(resp.rows[0].secrets);
        pool.query('DELETE FROM secrets WHERE guids = $1', [guid], (error, results) => {
            if (error) {
              throw error
            }
          })
        }
        else res.send("The secret is already burnt!")
    })
})
app.post("/api/psgl/postsecret",(req,res)=>{
    const secret=req.body.data;
    const guidnum=guid.create_UUID();
   
    res.send(guidnum);
    pool.query('INSERT INTO secrets (secrets,guids) VALUES ($1,$2)',[secret,guidnum],(err,resp)=>{
        if(err){
            throw err;
        }
    })
})




// start the Express server
const server =app.listen( port, () => {
 
} );

export default {app,server};