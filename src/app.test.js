const request = require('supertest');

const app = require('./app');

jest.mock('./utils/encrypt');

describe('Server', () => {
  it('should return 404 for unknown urls', (done) => {
    request(app)
      .get('/unknown')
      .set('Accept', 'application/json')
      .expect(404, done);
  });
});
