/**
 *
 * @param obj
 * @returns
 */
const isEmpty = (obj: Object) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

export default isEmpty;
