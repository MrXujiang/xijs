import timeCutStr from '../index';
import formatDate from '../../formatDate';

describe('timeCutStr', () => {
  test('计算时间差', () => {
    // 计算与当前时间的时间差

    // 格式化的时间字符串
    expect(timeCutStr(formatDate(Date.now()))).toEqual('刚刚');
    // 时间戳字符串
    expect(timeCutStr(String(Date.now() - 1000))).toEqual('1秒前');
    // 时间戳
    expect(timeCutStr(Date.now() + 1000)).toEqual('1秒后');
  });
});
