/**
 * 判断两个对象是否相等
 */
const isObjEqual = <T>(obj1: T, obj2: T): boolean => {
  /**
   * 判断类型是否相同
   */
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  /**
   * 如果是基本类型或者 null，直接判断值是否相等
   */
  if (!obj1 || !obj2 || typeof obj1 !== 'object') {
    return obj1 === obj2;
  }

  /**
   * 遍历 obj1 的所有属性
   */
  for (let key in obj1) {
    if (!isObjEqual(obj1[key], obj2[key])) {
      return false;
    }

    /**
     * 如果 obj2 没有 obj1 的这个属性
     */
    if (!Reflect.has(obj2, key)) {
      return false;
    }
  }

  /**
   * 遍历 obj2 的所有属性
   */
  for (let key in obj2) {
    /**
     * 如果 obj1 没有 obj2 的这个属性
     */
    if (!(key in obj1)) {
      return false;
    }
  }

  /**
   * 所有属性都相等，则两个对象相等
   */
  return true;
};

export default isObjEqual;
