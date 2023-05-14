import dateCalculate from '../index';
import timeSub from '../../timeSub';

describe('dateCalculate', () => {
  test('日期计算测试', () => {
    // 计算n天前或者n天后的时间
    let date = new Date('2020-01-01');
    expect(dateCalculate(date, -1, 'year')).toEqual('2019-01-01 08:00:00');

    let start = new Date('2020-01-01 08:00:08');
    let end = new Date('2020-01-01 09:00:08');
    expect(timeSub(start, end)).toEqual(3600000);
  });
});
