const request = require('supertest');
const app = require('../app');

describe('POST /api/v1/:metric', () => {
  test('should return a statusCode of 400', async () => {
    const res = await request(app).post('/api/v1/sample');

    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({ status: 'fail' });
  });

  test('should return a statusCode of 400', async () => {
    const res = await request(app).post('/api/v1/sample').send({ value: '4' });

    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({ status: 'fail' });
  });

  test('should return a statusCode of 200', async () => {
    const res = await request(app).post('/api/v1/sample').send({ value: 4 });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({});
  });
});

describe('GET /api/v1/:metric/median', () => {
  test('should return the median if the request is successful', async () => {
    const res = await request(app).get('/api/v1/sample/median');

    if (res.status === 400 || res.status === 404) {
      expect(res.body).toMatchObject({ status: 'fail' });
      expect(res.body.median).toBeUndefined();
    } else {
      expect(res.status).toBe(200);
      expect(res.body.median).not.toBeUndefined();
      expect(res.body.median).toBe(expect.any(Number));
    }
  });
});

describe('DELETE /api/v1/:metric', () => {
  test('should return a statusCode of 204', async () => {
    const res = await request(app).delete('/api/v1/sample');

    if (res.status === 404) {
      expect(res.body).toMatchObject({ status: 'fail' });
    } else {
      expect(res.status).toBe(204);
      expect(res.body).toEqual({});
    }
  });
});
