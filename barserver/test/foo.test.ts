import express from "express";

const app=express();
var request = require('supertest')('http://localhost:8080');

describe('Post Endpoints', () => {
  it('should get hello', async () => {
    const res = await request.get('/');
    expect("Hello, World!")
  })
});

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  });