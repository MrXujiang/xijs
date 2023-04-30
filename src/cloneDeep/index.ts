/**
 * 深拷贝
 * @returns
 */
function cloneDeep<T>(obj: any): T {
  if (obj === null) {
    return null as unknown as T;
  }
  if (obj instanceof Set) {
    return new Set([...obj]) as unknown as T;
  }
  if (obj instanceof Map) {
    return new Map([...obj]) as unknown as T;
  }
  if (obj instanceof WeakMap) {
    let weakMap = new WeakMap();
    weakMap = obj;
    return weakMap as unknown as T;
  }
  if (obj instanceof WeakSet) {
    let weakSet = new WeakSet();
    weakSet = obj;
    return weakSet as unknown as T;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj) as unknown as T;
  }
  if (typeof obj === 'undefined') {
    return undefined as unknown as T;
  }
  if (Array.isArray(obj)) {
    return obj.map(cloneDeep) as unknown as T;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  if (typeof obj !== 'object') {
    return obj;
  }
  const newObj: any = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = cloneDeep(value);
  }
  const symbolkeys = Object.getOwnPropertySymbols(obj);
  for (const key of symbolkeys) {
    newObj[key] = cloneDeep(obj[key]);
  }
  return newObj;
}

export default cloneDeep;
