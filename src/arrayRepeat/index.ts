import isObjEqual from '../isObjEqual';

const objConst = '[object Object]';

/**
 * 计算数组中重复元素以及重复元素的次数
 * @param data
 */
const arrayRepeat = <T>(data: Array<T>): object => {
  let res: Record<any, any> = {};
  let flag = true;
  data.forEach((ele) => {
    const type = Object.prototype.toString.call(ele);
    let element = ele as any;
    if (type === '[object String]') {
      element = JSON.stringify(ele);
    } else if (type === objConst) {
      for (const key in res) {
        let resKey = JSON.parse(key);
        const resType = Object.prototype.toString.call(resKey);
        if (resType === objConst) {
          element = isObjEqual(ele, resKey) ? key : JSON.stringify(ele);
          flag = false;
        }
      }
      if (flag) {
        element = JSON.stringify(ele);
      }
    }
    const count = res[element];
    if (count === undefined || count === null) {
      res[element] = 1;
    } else {
      res[element] = count + 1;
    }
  });
  return res;
};

export default arrayRepeat;
