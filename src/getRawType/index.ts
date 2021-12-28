/**
 * 获取数据类型，返回结果为Number、String、Object、Array等
 * @param value
 * @returns
 */
function getRawType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
export default getRawType;
