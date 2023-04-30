function maxBy(array: object[] | null, iteratee: (value: object) => unknown) {
  let result;
  if (array == null) {
    return result;
  } else if (array != null && array.length === 0) {
    return result;
  }
  let computed;
  for (const value of array) {
    const current = iteratee(value);
    if (
      current != null &&
      (computed === undefined
        ? current === current && !isSymbol(current)
        : current > computed)
    ) {
      computed = current;
      result = value;
    }
  }
  return result;
}
function getTag(value: any) {
  const toString = Object.prototype.toString;
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
function isSymbol(value: any) {
  const type = typeof value;
  return (
    type == 'symbol' ||
    (type === 'object' && value != null && getTag(value) === '[object Symbol]')
  );
}
export default maxBy;
