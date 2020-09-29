import app from '../src/';
import request from 'supertest';

it('should get hello', async () => {
    const res = await request(app.app).get('/');
    expect(res.text).toBe("Hello world!")
});

it('should return',async () =>{
    await request(app.app)
        .post('/api/postsecret')
        .send({ content: 'secrettest' })
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.body.content).toBe("secrettest");
        });
});
