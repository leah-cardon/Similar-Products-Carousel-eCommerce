const server = require('./index.js');
const supertest = require('supertest');
const request = supertest(server);

it('gets all similar products', async done => {
  // async tests here
  // change to '/api/products/:id/similar'
  const response = await request.get('/api/products/similar');
  expect(response.status).toBe(200);
  expect(response.body.length).toBe(100);
  done();
});