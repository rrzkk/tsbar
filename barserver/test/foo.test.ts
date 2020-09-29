
import express from "express";
import { isMainThread } from "worker_threads";
import axios, { AxiosResponse} from 'axios';



const app=express();
var request = require('supertest')('http://localhost:8080');


it('should get hello', async () => {
    const res = await request.get('/');
    expect("Hello, World!")
});


it('should test that true === true', () => {
      expect(true).toBe(true)
});

it('should return',async ()=>{
    const res= await request
    .post('/api/postsecret')
    .send({ data: JSON.stringify("secrettest") })
    .set('Accept','application/json')
   
    expect(res).toBe("secrettest");
});

