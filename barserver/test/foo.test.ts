
import express from "express";
const app=express();
var request = require('supertest')('http://localhost:8080');


it('should get hello', async () => {
    const res = await request.get('/');
    expect("Hello, World!")
});


it('should test that true === true', () => {
      expect(true).toBe(true)
});
