type MAXBY = { [key: string]: any } | undefined;

function maxBy(array: MAXBY[] | null, key: string): MAXBY {
  let result: MAXBY = undefined;
  if (array == null) {
    return result;
  } else if (array.length === 0) {
    return result;
  }
  const iteratee = (value: MAXBY) => {
    return value ? value[key] : undefined;
  };
  let computed: any;
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

function getTag(value: any): string {
  const toString = Object.prototype.toString;
  if (value === null) {
    return '[object Null]';
  }
  if (value === undefined) {
    return '[object Undefined]';
  }
  return toString.call(value);
}

function isSymbol(value: any): boolean {
  const type = typeof value;
  return (
    type === 'symbol' ||
    (type === 'object' && value !== null && getTag(value) === '[object Symbol]')
  );
}

export default maxBy;
