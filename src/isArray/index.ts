/**
 *
 * @param any
 * @returns
 */
const isArray = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Array]';

export default isArray;
