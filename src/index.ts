export { default as parser } from './parser';
export { default as store } from './store';
export { default as uuid } from './uuid';
export { default as obj2url } from './obj2url';
export { default as isPc } from './isPc';
export { default as formatDate } from './formatDate';
export { default as url2obj } from './url2obj';
export { default as throttle } from './throttle';
export { default as debounce } from './debounce';
export { default as randomStr } from './randomStr';
export { default as charCount } from './charCount';
export { default as isEmpty } from './isEmpty';
export { default as isPhone } from './isPhone';
export { default as sleep } from './sleep';
export { default as redirect } from './redirect';
export { default as shuffle } from './shuffle';
export { default as getSelection } from './getSelection';
export { default as average } from './average';
export { default as camelize } from './camelize';
export { default as hyphenate } from './hyphenate';
export { default as getRawType } from './getRawType';
export { default as getRuntimeEnv } from './getRuntimeEnv';
export { default as repeat } from './repeat';
export { default as transformTree } from './transformTree';
export { default as random } from './random';
export { default as cloneDeep } from './cloneDeep';
export { default as base64 } from './base64';
export { default as hyCompact } from './hyCompact';
export { default as isArray } from './isArray';
export { default as file2img } from './file2img';
export { default as rgba2obj } from './rgba2obj';
export { default as hex2rgba } from './hex2rgba';
export { default as formatNumber } from './formatNumber';
export { default as formatPercent } from './formatPercent';
export { default as difference } from './difference';
export { default as coordinatesInCircle } from './coordinatesInCircle';
export { default as coordinatesInRect } from './coordinatesInRect';
export { default as judgePointInCircle } from './judgePointInCircle';
export { default as bubbleSort } from './bubbleSort';
export { default as quickSort } from './quickSort';

export { default as factorial } from './factorial';
export { default as fibonacci } from './fibonacci';
export { default as sum } from './sum';

export { default as isEmail } from './isEmail';
export { default as isIdCard } from './isIdCard';

export { default as linkListToArray } from './linkListToArray';

export { default as lang } from './lang';

export { default as transformArray } from './transformArray';
export { default as arrayToListNode } from './arrayToListNode';
export { default as $ } from './getDom';
export { default as getDomText } from './getDomText';
export { default as getDomPageXY } from './getDomPageXY';
export { default as getDomScreenXY } from './getDomScreenXY';
export { default as xss } from './xss';
export { default as dateCalculate } from './dateCalculate';
export { default as timeSub } from './timeSub';
export { default as genRandomColor } from './genRandomColor';
export { default as regex } from './regex';

// 邮箱 的正则表达式
export const emailRegexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
// 手机号码 的正则表达式
export const phoneRegexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
// 国内电话号码 的正则表达式
export const fixPhone = /\d{3}-\d{8}|\d{4}-\d{7}/
// 身份证号(15位、18位数字) 的正则表达式
export const idRegexp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
// IPv4 的正则表达式
export const ipv4Regexp = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/

// 是否包含中文 的正则表达式
export const chineseRegexp = /[\u4E00-\u9FA5]{2,4}$/
// 匹配qq号 的正则表达式  腾讯QQ号从10000开始
export const qqRegexp = /[1-9][0-9]{4,}/

// 匹配中国邮政编码 的正则表达式
export const chinesePostcodeRegexp = /[1-9]\d{5}(?!d)/

// 匹配英国邮政编码 的正则表达式
export const usPostcodeRegexp = /^\d{5}(-\d{4})?$/

// 匹配美国邮政编码 的正则表达式
export const ukPostcodeRegexp = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/

/**
 * 车架号 的正则表达式
 * 由大写字母和数字组成，长度17位；
 * 字母不会出现O、Q、I三个字母；
 * 第9位只能是【0-9】的数字和字母X;
 * 第13-17位只能是数字；
 */
export const carNumberRegexp = /^[A-HJ-NPR-Z\d]{8}[X\d][A-HJ-NPR-Z\d]{3}\d{5}$/

// 帐号是否合法(字母开头，允许5-16位，允许字母数字下划线)： 正则表达式
export const accountRegexp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/

// rgb 颜色 正则表达式
export const rgbRegexp = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
// rgba 颜色 正则表达式
export const rgbaRegexp = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([01](\.\d+)?)\s*\)$/
// 十六进制颜色代码 正则表达式
export const numberRegexp = /^#(?:[0-9a-fa-f]{3}){1,2}$/
// 匹配 hsl 值 正则表达式
export const hslRegexp = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/
// 匹配 hsla 值 正则表达式
export const hslaRegexp = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([01](\.\d+)?)\s*\)$/


