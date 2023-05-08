import dataDesensitization from '../index';
describe('dataDesensitization', () => {
  test('数据脱敏', () => {
    expect(dataDesensitization('idCard', '610222188709080909')).toEqual(
      '61**************09',
    );
    expect(dataDesensitization('phone', '18396781187')).toEqual('183****1187');
    expect(dataDesensitization('custom', '18396781187', 1, 8)).toEqual(
      '1********87',
    );
    expect(dataDesensitization('address', '深证市龙岗区五和')).toEqual(
      '深证******',
    );
    expect(dataDesensitization('email', '1832291@qq.com')).toEqual(
      '1****1@qq.com',
    );
    expect(dataDesensitization('username', '小小西')).toEqual('小**');
    expect(dataDesensitization('fixPhone', '012-1823293')).toEqual(
      '012-*******',
    );
  });
});
