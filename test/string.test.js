import {
  base64,
  camelize,
  charCount,
  formatNumber,
  formatPercent,
  hyphenate,
  hyCompact,
  randomStr,
  repeat,
  uuid,
  completeIp,
  getRepeatCharacter
} from '../src/index';

describe('字符串操作相关测试', () => {
  test('base64 编码和解码', () => {
    const normalStr = 'base64 编码和解码';
    const encodeStr = base64.encode(normalStr);
    const decodeStr = base64.decode(encodeStr);
    expect(decodeStr).toBe(normalStr);
  });

  test('横线转驼峰命名', () => {
    const initStr = 'ab-cd-ef-123--';
    const transformStr = camelize(initStr);
    const expectStr = 'abCdEf123--';
    expect(transformStr).toBe(expectStr);
  });

  test('获取字符串中指定字符的个数', () => {
    const s = 'abc-def-h5-dooring';
    expect(charCount(s, '-')).toBe(3);
    expect(charCount(s, '!')).toBe(0);
  });

  test('数值千分位格式化', () => {
    const num = 123456.789;
    const formatNum = formatNumber(num);
    expect(formatNum).toBe(num.toLocaleString());
  });

  test('数值转换为百分数表示', () => {
    const num1 = 0.456789,
      num2 = 3,
      num3 = 10.234;
    const percentNum1 = formatPercent(num1, 1);
    const percentNum2 = formatPercent(num2, 2);
    const percentNum3 = formatPercent(num3, 3);
    expect(percentNum1).toBe('45.7%');
    expect(percentNum2).toBe('300%');
    expect(percentNum3).toBe('1023.400%');
  });

  test('驼峰命名转横线命名', () => {
    const s = 'AaBb1Cc2Dd_Ee.Ff';
    expect(hyphenate(s)).toBe('aa-bb1-cc2-dd_-ee.ff');
    expect(hyphenate(s, '_')).toBe('aa_bb1_cc2_dd__ee.ff');
  });

  test('紧凑型驼峰命名转横线命名', () => {
    const s = 'AABBCcDd';
    expect(hyCompact(s)).toBe('aa-bb-cc-dd');
    expect(hyCompact(s, '+')).toBe('aa+bb+cc+dd');
  });

  test('生成随机字符串', () => {
    const len = 6;
    expect(randomStr(len).length).toBe(len);
  });

  test('生成一个重复的字符串，有 n 个 str 组成', () => {
    const str = 'xijs';
    expect(repeat(str, 5)).toBe('xijsxijsxijsxijsxijs');
  });

  test('生成唯一 id', () => {
    // Why uuid is undefined?
    console.log('uuid function ---> ', uuid);
  });

  test('ip 补全', () => {
    expect(completeIp('127.0.0.1')).toBe('127.000.000.001');
  });

  test('计算字符串中重复字符以及重复字符的次数', () => {
    expect(getRepeatCharacter('bigBbbi')).toMatchObject({b: 3, i: 2, g: 1, B: 1});
  });
});
