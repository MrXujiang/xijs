/**
 * 驼峰命名转横线命名
 * @param str
 * @returns
 */
function hyphenate(str: string) {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}
export default hyphenate;
