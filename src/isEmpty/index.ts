/**
 *
 * @param obj
 * @returns
 */
const isEmpty = (obj: Record<string, any>) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

export default isEmpty;
