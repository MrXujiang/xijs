import formatDate from '../index';

describe('formatDate', () => {
  test('时间格式化', () => {
    const timeStamp = new Date(2023, 3, 5, 20, 30, 59).getTime(),
      format = formatDate(timeStamp, '今天是YY年MM月DD日 hh时mm分ss秒'),
      expectFormat = '今天是2023年04月05日 20时30分59秒';

    expect(format).toBe(expectFormat);
  });
});
