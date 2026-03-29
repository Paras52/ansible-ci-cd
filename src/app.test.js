const request = require('supertest');
const app = require('../src/app');

describe('API Routes', () => {

  test('GET /api/health returns status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.message).toBe('Server is running');
  });

  test('GET /api/hello returns Hello World by default', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });

  test('GET /api/hello?name=Alice returns Hello Alice', async () => {
    const res = await request(app).get('/api/hello?name=Alice');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, Alice!');
  });

  test('GET /unknown returns 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Route not found');
  });

});
