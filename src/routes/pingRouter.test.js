const request = require('supertest');

const app = require('../app');

jest.mock('../utils/encrypt');

describe('ping routes', () => {
  describe('GET /internal/ping', () => {
    it('should respond with pong', (done) => {
      request(app).get('/internal/ping').expect('Content-Type', /text/).expect(200, 'pong', done);
    });
  });
});
