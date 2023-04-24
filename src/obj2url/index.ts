/**
 * 对象转url参数
 * @param {*} data
 * @param {*} isPrefix
 */

export const obj2url = (data: any, isPrefix?: boolean) => {
  const prefix = isPrefix ? '?' : '';

  const _result = [];
  for (const key in data) {
    const value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue;
    }
    if (value.constructor === Array) {
      value.forEach((_value) => {
        _result.push(
          encodeURIComponent(key) + '[]=' + encodeURIComponent(_value),
        );
      });
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return _result.length ? prefix + _result.join('&') : '';
};

export default obj2url;
