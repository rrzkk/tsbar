import request from "supertest";
import app from '../src/';


// const request = require('supertest')('http://localhost:8080');


it('should get hello', async () => {
    const res = await request(app.app).get('/');
    expect(res.text).toBe('Hello world!');
});

it('should return',async ()=>{
    const res= await request(app.app)
    .post('/api/postsecret')
    .send({ data: "secrettest" })
    .set('Accept','application/json');

   expect(res.text).toBe("secrettest")
});

it('should return guid', async ()=>{
    const res =await request(app.app)
    .post('/api/trasfertoguid')
    .send({data:"secrettext"})
    .set('Accept','application/json');

    expect(res.text.length).toBe(36);
})
it('should return guid', async ()=>{
    const res =await request(app.app)
    .post('/api/trasfersecret')
    .send({data:"secrettext"})
    .set('Accept','application/json');

    expect(res.body.guid.length).toBe(36);
    expect(res.body.secret).toBe("secrettext");
})


