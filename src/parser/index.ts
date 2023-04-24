interface IObject {
  [name: string]: any;
}

const parser = {
  FUNC_PREFIX: '__xfunc__',
  REG_PREFIX: '__xreg__',
  isArrOrObj: function (obj: any) {
    return this.isArr(obj) || this.isObj(obj);
  },
  isArr: function (obj: any) {
    return !!obj && Object.prototype.toString.call(obj) === '[object Array]';
  },
  isObj: function (obj: any) {
    return !!obj && Object.prototype.toString.call(obj) === '[object Object]';
  },
  isRegExp: function (obj: any) {
    return !!obj && Object.prototype.toString.call(obj) === '[object RegExp]';
  },
  isFunc: function (obj: any) {
    return typeof obj === 'function';
  },
  funcParse: function (obj: IObject | any[]) {
    let result: any;

    if (this.isArr(obj)) {
      result = [];
      result = obj.map((v: any) => {
        /** 如果是函数类型, 则转换为字符串 */
        if (this.isFunc(v)) {
          return `${this.FUNC_PREFIX}${v}`;
        }
        /** 如果类型为正则 */
        if (this.isRegExp(v)) {
          return `${this.REG_PREFIX}${v}`;
        }
        /** 如果是数组或者对象 */
        if (this.isArrOrObj(v)) {
          return this.funcParse(v);
        }
        /** 基本类型 */
        return v;
      });
    }

    if (this.isObj(obj)) {
      result = {};
      for (const key in obj) {
        const v = (obj as IObject)[key];
        if (this.isFunc(v)) {
          result[key] = `${this.FUNC_PREFIX}${v}`;
        } else if (this.isRegExp(v)) {
          /** 如果类型为正则 */
          result[key] = `${this.REG_PREFIX}${v}`;
        } else if (this.isArrOrObj(v)) {
          result[key] = this.funcParse(v);
        } else result[key] = v;
      }
    }

    return result;
  },
  parse: function (
    jsonStr: string,
    error?: (err: Error | unknown) => Record<string, any>,
  ) {
    try {
      return JSON.parse(jsonStr, (key, value) => {
        if (value && typeof value === 'string') {
          const _value =
            value.indexOf(this.FUNC_PREFIX) > -1
              ? new Function(`return ${value.replace(this.FUNC_PREFIX, '')}`)()
              : value.indexOf(this.REG_PREFIX) > -1
              ? new Function(`return ${value.replace(this.REG_PREFIX, '')}`)()
              : value;
          return _value;
        }
        return value;
      });
    } catch (err) {
      error && error(err);
    }
  },
  stringify: function (
    obj: any,
    replacer?: (key: string, value: any) => any,
    space?: number | string,
    error?: (err: Error | unknown) => Record<string, any>,
  ) {
    try {
      let _obj = obj;
      if (this.isRegExp(obj)) {
        /** 如果类型为正则 */
        _obj = `${this.REG_PREFIX}${obj}`;
      }
      if (this.isFunc(obj)) {
        _obj = `${this.FUNC_PREFIX}${obj}`;
      }
      if (this.isArrOrObj(obj)) {
        _obj = this.funcParse(obj);
      }
      return JSON.stringify(_obj, replacer, space);
    } catch (err) {
      error && error(err);
      return '';
    }
  },
  fastStringify: function (
    obj: any,
    space?: number | string,
    error?: (err: Error | unknown) => Record<string, any>,
  ) {
    try {
      return JSON.stringify(
        obj,
        (k, v) => {
          /** 如果类型为函数 */
          if (this.isFunc(v)) {
            return `${this.FUNC_PREFIX}${v}`;
          }
          /** 如果类型为正则 */
          if (this.isRegExp(v)) {
            return `${this.REG_PREFIX}${v}`;
          }
          return v;
        },
        space,
      );
    } catch (err) {
      error && error(err);
      return '';
    }
  },
  nativeStringify: JSON.stringify,
  nativeParse: JSON.parse,
};

export default parser;
