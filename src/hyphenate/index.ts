/**
 * 驼峰命名转横线命名
 * @param str
 * @returns
 */
function hyphenate(str: string, flag = '-') {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, `${flag}$1`).toLowerCase();
}
export default hyphenate;
