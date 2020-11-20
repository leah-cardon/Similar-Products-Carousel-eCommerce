const server = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

it('async test', async done => {
  // async tests here
  done();
});