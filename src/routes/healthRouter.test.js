const request = require('supertest');

const app = require('../app');

jest.mock('../utils/encrypt');

describe('health routes', () => {
  describe('GET /internal/health', () => {
    it('should respond with system status', (done) => {
      request(app)
        .get('/internal/health')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body.status).toEqual('RUNNING');

          return done();
        });
    });
  });
});
