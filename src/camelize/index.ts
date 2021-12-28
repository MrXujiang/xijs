/**
 * 横线转驼峰命名
 * @param str
 * @returns
 */
function camelize(str: string) {
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
}
export default camelize;
