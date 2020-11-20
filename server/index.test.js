const server = require('./index.js');
const supertest = require('supertest');
const request = supertest(server);

it('async test', async done => {
  // async tests here
  done();
});