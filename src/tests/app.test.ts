import app from '../app';

describe('test', () => {
  test('Should not to be null', async () => {
    expect(app).not.toBeNull();
  });
});
