/**
 * 生成指定个数的随机字符串
 * @param n
 * @param str
 * @returns
 */
function randomStr(
  n: number,
  str = 'abcdefghigklmnopqrstuvexyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-+%$',
) {
  let res = '';
  const len = str.length;
  for (let i = 0; i < n; i++) {
    res += str[Math.floor(Math.random() * len)];
  }
  return res;
}

export default randomStr;
