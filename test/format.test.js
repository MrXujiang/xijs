import {
  cloneDeep,
  formatDate,
  getRawType,
  obj2url,
  transformTree,
  transformArray,
  url2obj,
  arrayToListNode,
  dateCalculate,
  timeSub,
  timeCutStr,
  formDataToJson,
  BinaryTree
} from '../src/index';
describe('数据结构相关测试', () => {
  test('数据深拷贝', () => {
    const obj = {
      a: 0,
      b: "",
      c: true,
      d: undefined,
      e: null,
      f: { name: "我是一个对象", id: 1 },
      obj: { name: '我是一个对象', id: 1 },
      g: [0, 1, 2],
      h: function () {
        return '我是一个普通函数'
      },
      i: () => {
        return '我是一个箭头函数'
      },
      j: new Date(0),
      k: new RegExp("/我是一个正则/ig"),
      [Symbol("l")]: 1,
      o: Symbol(123),
      m: new WeakMap([[{ a: 1 }, 2]]),
      n: new WeakSet([{ name: 'John' }, { name: 'asfdasd' }]),
      p: new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]),
      q: new Set([{ 'Michael': 95 }, { 'Bob': 'Tracy' }]),
      z: BigInt(19616811)
    };
    const copyObj = cloneDeep(obj);
    expect(obj).toEqual(copyObj);
    copyObj.f.aa = 3;
    expect(obj).not.toEqual(copyObj);
  });

  test('时间格式化', () => {
    const timeStamp = new Date(2023, 3, 5, 20, 30, 59).getTime(),
      format = formatDate(timeStamp, '今天是YY年MM月DD日 hh时mm分ss秒'),
      expectFormat = '今天是2023年04月05日 20时30分59秒';

    expect(format).toBe(expectFormat);
  });

  test('获取数据类型', () => {
    const data = [
      'dooring',
      1,
      true,
      Symbol(),
      [],
      {},
      undefined,
      null,
      function () { },
      new Date(),
    ];
    const expectType = [
      'String',
      'Number',
      'Boolean',
      'Symbol',
      'Array',
      'Object',
      'Undefined',
      'Null',
      'Function',
      'Date',
    ];
    data.forEach((d, index) => {
      expect(getRawType(d)).toBe(expectType[index]);
    });
  });

  test('将对象参数解析为 url 字符串', () => {
    const transformStr = obj2url({ a: 123, b: 'H5-Dooring' }),
      expectdStr = 'a=123&b=H5-Dooring';
    expect(transformStr).toBe(expectdStr);
  });

  test('将扁平数组转换成树结构', () => {
    const data = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
      },
      {
        id: '0-1',
        name: 'js',
        pid: '0',
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
      },
      {
        id: '0-2-1',
        name: 'css3',
        pid: '0-2',
      },
    ];
    const tree = transformTree(data);
    const expectTree = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
        children: [
          {
            id: '0-1',
            name: 'js',
            pid: '0',
            children: [],
          },
          {
            id: '0-2',
            name: 'css',
            pid: '0',
            children: [
              {
                id: '0-2-1',
                name: 'css3',
                pid: '0-2',
                children: [],
              },
            ],
          },
        ],
      },
    ];
    expect(tree).toEqual(expectTree);
  });

  test('将 url 字符串转换为对象', () => {
    const transformObj = url2obj('?name=h5-dooring&desc=h5-mark'),
      expectdObj = { name: 'h5-dooring', desc: 'h5-mark' };
    expect(transformObj).toEqual(expectdObj);
  });

  test('将树结构转换为扁平数组', () => {
    const tree = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
        children: [
          {
            id: '0-1',
            name: 'js',
            pid: '0',
            children: [],
          },
          {
            id: '0-2',
            name: 'css',
            pid: '0',
            children: [
              {
                id: '0-2-1',
                name: 'css3',
                pid: '0-2',
                children: [],
              },
            ],
          },
        ],
      },
    ];
    const expectArr = [
      {
        id: '0',
        name: '趣谈前端',
        pid: '',
      },
      {
        id: '0-1',
        name: 'js',
        pid: '0',
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
      },
      {
        id: '0-2-1',
        name: 'css3',
        pid: '0-2',
      },
    ];
    const arr = transformArray(tree);
    expect(arr).toEqual(expectArr);
  });

  test('数组转成链表', () => {
    let result = {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
          },
        },
      },
    };
    let arr = [1, 2, 3, 4];
    expect(arrayToListNode(arr)).toEqual(result);

    let result1 = undefined;
    let arr1 = [];
    expect(arrayToListNode(arr1)).toEqual(result1);

    let arr2 = ['ok', 'next', 'post', 'type'];
    let result2 = {
      data: 'ok',
      next: {
        data: 'next',
        next: {
          data: 'post',
          next: {
            data: 'type',
          },
        },
      },
    };
    expect(arrayToListNode(arr2)).toEqual(result2);

    let arr3 = [true, false];
    let result3 = {
      data: true,
      next: {
        data: false,
      },
    };
    expect(arrayToListNode(arr3)).toEqual(result3);
  });

  test('日期计算测试', () => {
    // 计算n天前或者n天后的时间
    let date = new Date('2020-01-01');
    expect(dateCalculate(date, -1, 'year')).toEqual('2019-01-01 08:00:00');

    let start = new Date('2020-01-01 08:00:08');
    let end = new Date('2020-01-01 09:00:08');
    expect(timeSub(start, end)).toEqual(3600000);
  });

  test('计算时间差', () => {
    // 计算与当前时间的时间差

    // 格式化的时间字符串
    expect(timeCutStr(formatDate(Date.now()))).toEqual('刚刚');
    // 时间戳字符串
    expect(timeCutStr(String(Date.now() - 1000))).toEqual('1秒前');
    // 时间戳
    expect(timeCutStr(Date.now() + 1000)).toEqual('1秒后');
  });

  test('表单数据转成JSON', () => {
    const data = new FormData();
    data.set('user', '1');
    data.set('age', 29);
    data.set('phone', '18329208292')
    expect(formDataToJson(data)).toEqual('{"user":"1","age":"29","phone":"18329208292"}');
    const data1 = new FormData();
    expect(formDataToJson(data1)).toEqual('{}');
  })

  test('二叉树', () => {
    const bt = new BinaryTree();
    expect(bt.insert(1)).toEqual();
    expect(bt.getRoot()).toEqual({"centerOrder": [], "count": 1, "data": 1, "left": undefined, "postOrder": [], "preOrder": [], "right": undefined});
    expect(bt.insert(2)).toEqual();
    expect(bt.insert(0)).toEqual();
    expect(bt.find(2)).toEqual({"centerOrder": [], "count": 0, "data": 2, "left": undefined, "postOrder": [], "preOrder": [], "right": undefined});
    expect(bt.getMinNode(bt.getRoot())).toEqual({"centerOrder": [], "count": 0, "data": 0, "left": undefined, "postOrder": [], "preOrder": [], "right": undefined});
    expect(bt.getMaxNode(bt.getRoot())).toEqual({"centerOrder": [], "count": 0, "data": 2, "left": undefined, "postOrder": [], "preOrder": [], "right": undefined});
    expect(bt.removeNode(2)).toEqual(undefined);
    bt.insert(2)
    bt.preOrderTraversal(bt.getRoot())
    bt.centerOrderTraversal(bt.getRoot())
    bt.postOrderTraversal(bt.getRoot())
    expect(bt.getRoot().preOrder).toEqual([0, 1, 2]);
    expect(bt.getRoot().centerOrder).toEqual([1, 0, 2]);
    expect(bt.getRoot().postOrder).toEqual([0, 2, 1]);
  })
});
