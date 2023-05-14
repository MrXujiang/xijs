import base64 from '../index';

describe('base64', () => {
  test('base64 编码和解码', () => {
    const normalStr = 'base64 编码和解码';
    const encodeStr = base64.encode(normalStr);
    const decodeStr = base64.decode(encodeStr);
    expect(decodeStr).toBe(normalStr);
  });
});
