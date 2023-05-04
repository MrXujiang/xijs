import isArray from '../isArray';
/**
 * 对象数组、普通数组快速排序
 * @param arr
 * @param arrKey
 * @returns
 */
function quickSort(
  arr: (object | string | number)[],
  key?: string,
): (object | string | number)[] {
  if (isArray(arr)) {
    const result: any[] = arr;
    if (result.length <= 1) {
      return result;
    }
    const pivotIndex = Math.floor(result.length / 2);
    const pivot = result[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < result.length; i++) {
      if (i === pivotIndex) {
        continue;
      }

      if ((key ? result[i][key] : result[i]) <= (key ? pivot[key] : pivot)) {
        left.push(result[i]);
      } else {
        right.push(result[i]);
      }
    }
    const resultArr = [
      ...quickSort(left, key),
      pivot,
      ...quickSort(right, key),
    ];
    return resultArr;
  } else throw Error('数据格式错误');
}
export default quickSort;
