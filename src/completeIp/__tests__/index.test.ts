import completeIp from '../index';

describe('completeIp', () => {
  test('ip 补全', () => {
    expect(completeIp('127.0.0.1')).toBe('127.000.000.001');
  });
});
