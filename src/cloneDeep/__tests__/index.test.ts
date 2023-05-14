import cloneDeep from '../index';

describe('cloneDeep', () => {
  test('数据深拷贝', () => {
    const obj = {
      a: 0,
      b: '',
      c: true,
      d: undefined,
      e: null,
      f: { name: '我是一个对象', id: 1 },
      obj: { name: '我是一个对象', id: 1 },
      g: [0, 1, 2],
      h: function () {
        return '我是一个普通函数';
      },
      i: () => {
        return '我是一个箭头函数';
      },
      j: new Date(0),
      k: new RegExp('/我是一个正则/ig'),
      [Symbol('l')]: 1,
      o: Symbol(123),
      m: new WeakMap([[{ a: 1 }, 2]]),
      n: new WeakSet([{ name: 'John' }, { name: 'asfdasd' }]),
      p: new Map([
        ['Michael', 95],
        ['Bob', 75],
        ['Tracy', 85],
      ]),
      q: new Set([{ Michael: 95 }, { Bob: 'Tracy' }]),
      z: BigInt(19616811),
    };
    const copyObj = cloneDeep(obj);
    expect(obj).toEqual(copyObj);
    copyObj.f.aa = 3;
    expect(obj).not.toEqual(copyObj);
  });
});
