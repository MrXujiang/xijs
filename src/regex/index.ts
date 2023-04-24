/**
 *
 * @param Regexp: 需要校验的正则表达式
 * @param text：需要匹配的内容
 */
const regex = (regexp: IRegType, text: string): boolean => {
  if (regexpMap[regexp]) {
    return regexpMap[regexp](text);
  } else {
    throw Error('请输入正确的正则类型');
  }
};

// 正则表达式类型
type IRegType =
  | 'emailRegexp'
  | 'phoneRegexp'
  | 'fixPhone'
  | 'idRegexp'
  | 'ipv4Regexp'
  | 'chineseRegexp'
  | 'qqRegexp'
  | 'chinesePostcodeRegexp'
  | 'usPostcodeRegexp'
  | 'ukPostcodeRegexp'
  | 'carNumberRegexp'
  | 'accountRegexp'
  | 'rgbRegexp'
  | 'rgbaRegexp'
  | 'numberRegexp'
  | 'hslRegexp'
  | 'hslaRegexp';

/**
 * 正则表达式支持的列表
 */
const regexpMap = {
  // 邮箱 的正则表达式
  emailRegexp: (text: string): boolean => {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(text);
  },
  // 手机号码 的正则表达式
  phoneRegexp: (text: string): boolean => {
    return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
      text,
    );
  },
  // 国内电话号码 的正则表达式
  fixPhone: (text: string): boolean => {
    return /\d{3}-\d{8}|\d{4}-\d{7}/.test(text);
  },
  // 身份证号(15位、18位数字) 的正则表达式
  idRegexp: (text: string): boolean => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(text);
  },
  // IPv4 的正则表达式
  ipv4Regexp: (text: string): boolean => {
    return /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(
      text,
    );
  },
  // 是否包含中文 的正则表达式
  chineseRegexp: (text: string): boolean => {
    return /[\u4E00-\u9FA5]{2,4}$/.test(text);
  },
  // 匹配qq号（腾讯QQ号从10000开始） 的正则表达式
  qqRegexp: (text: string): boolean => {
    return /[1-9][0-9]{4,}/.test(text);
  },
  // 匹配中国邮政编码 的正则表达式
  chinesePostcodeRegexp: (text: string): boolean => {
    return /[1-9]\d{5}(?!d)/.test(text);
  },
  // 匹配英国邮政编码 的正则表达式
  usPostcodeRegexp: (text: string): boolean => {
    return /^\d{5}(-\d{4})?$/.test(text);
  },
  // 匹配美国邮政编码 的正则表达式
  ukPostcodeRegexp: (text: string): boolean => {
    return /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(text);
  },
  /**
   * 车架号 的正则表达式
   * 由大写字母和数字组成，长度17位；
   * 字母不会出现O、Q、I三个字母；
   * 第9位只能是【0-9】的数字和字母X;
   * 第13-17位只能是数字；
   */
  carNumberRegexp: (text: string): boolean => {
    return /^[A-HJ-NPR-Z\d]{8}[X\d][A-HJ-NPR-Z\d]{3}\d{5}$/.test(text);
  },
  // 帐号是否合法(字母开头，允许5-16位，允许字母数字下划线)： 正则表达式
  accountRegexp: (text: string): boolean => {
    return /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(text);
  },
  // rgb 颜色 正则表达式
  rgbRegexp: (text: string): boolean => {
    return /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(
      text,
    );
  },
  // rgba 颜色 正则表达式
  rgbaRegexp: (text: string): boolean => {
    return /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([01](\.\d+)?)\s*\)$/.test(
      text,
    );
  },
  // 十六进制颜色代码 正则表达式
  numberRegexp: (text: string): boolean => {
    return /^#(?:[0-9a-fa-f]{3}){1,2}$/.test(text);
  },
  // 匹配 hsl 值 正则表达式
  hslRegexp: (text: string): boolean => {
    return /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/.test(
      text,
    );
  },
  // 匹配 hsla 值 正则表达式
  hslaRegexp: (text: string): boolean => {
    return /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([01](\.\d+)?)\s*\)$/.test(
      text,
    );
  },
};

export default regex;
