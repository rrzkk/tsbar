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

    expect(res3.text).toBe('{}');

})
/*
it('should burn after read',async ()=>{
    const res = await request(app.app)
    .post('/api/trasfersecret2')
    .send({data:"burnmsg"})
    .set('Accept','application/json');

    const res2 = await request(app.app)
    .get(`/api/getsecret?guid=${res.body.guid}`);

    expect(res2.text).toBe(res.body.secret);

    const res3 = await request(app.app)
    .get(`/api/getsecret?guid=${res.body.guid}`);

    expect(res3.text).toBe('{}');
})*/



