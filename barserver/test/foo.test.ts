import request from "supertest";
import app from '../src/';



// const request = require('supertest')('http://localhost:8080');


it('should get hello', async () => {
    const res = await request(app.app).get('/');
    expect(res.text).toBe('Hello world!');
});


it('should store secret',async()=>{
    const res = await request(app.app)
    .post('/api/trasfersecret2')
    .send({data:"secrettext"})
    .set('Accept','application/json');

    expect(res.text.length).toBe(36);

    const res2 = await request(app.app)
    .get(`/api/getsecret?guid=${res.text}`);

    expect(res2.text).toBe("secrettext");

    const res3 = await request(app.app)
    .get(`/api/getsecret?guid=${res.text}`);

    expect(res3.text).toBe('The secret is already burnt!');

})





