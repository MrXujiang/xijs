import { isArray, isEmpty, isPhone, isEmail, isIdCard, lang, regex, phoneRegexp, carNumberRegexp} from '../src/index';

describe('常用判断函数相关测试', () => {
  test('判断数组类型', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test('判断空对象', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ name: 'jack' })).toBe(false);
    expect(isEmpty([])).toBe(false);
  });

  test('判断手机号格式', () => {
    expect(isPhone(13827462333)).toBe(true);
    expect(isPhone(1382746233)).toBe(false);
  });

  test('判断邮箱格式', () => {
    expect(isEmail('13827462333@163.com')).toBe(true);
    expect(isEmail('1382746233@')).toBe(false);
  });

  test('判断身份证格式', () => {
    // 18位身份证
    expect(isIdCard('142431199009093611')).toBe(true);
    // 15位身份证
    expect(isIdCard('130503670401001')).toBe(true);
    // 18位
    expect(isIdCard('14243119901909361M')).toBe(false);
    // 15位
    expect(isIdCard('130503671401001')).toBe(false);
  });

  test('判断中英文', () => {
    expect(lang.isEn('sadsad')).toBe(true);
    expect(lang.isCn('萨达')).toBe(true);
  });

  test('正则表达式判断', () => {
    expect(regex(phoneRegexp, '18396781187')).toBe(true);
    expect(regex(phoneRegexp, '1839678118')).toBe(false);
    expect(regex(carNumberRegexp, 'LHGTG2824K8024652')).toBe(true);
  });
});
