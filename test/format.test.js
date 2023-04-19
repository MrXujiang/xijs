import {
  cloneDeep,
  formatDate,
  getRawType,
  obj2url,
  transformTree,
  transformArray,
  url2obj,
  arrayToListNode,
  DateCalculate,
} from '../src/index';
describe('数据结构相关测试', () => {
  test('数据深拷贝', () => {
    const obj = {
      a: 1,
      b: '2',
      c: true,
      d: new Date(),
      e: [1, '2', true],
      f: {
        aa: 2,
        bb: {
          aaa: 3,
          bbb: [1, 2, 3],
        },
      },
      g: function () {
        return '对象里的普通函数';
      },
      h: () => {
        return '对象里的箭头函数';
      },
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
      function () {},
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
          }
        }
      }
    }
    let arr = [1, 2, 3, 4]
    expect(arrayToListNode(arr)).toEqual(result)

    let result1 = undefined
    let arr1 = []
    expect(arrayToListNode(arr1)).toEqual(result1)

    let arr2 = ['ok', 'next', 'post', 'type']
    let result2 = {
      data: 'ok',
      next: {
        data: 'next',
        next: {
          data: 'post',
          next: {
            data: 'type',
          }
        }
      }
    }
    expect(arrayToListNode(arr2)).toEqual(result2)

    let arr3 = [true, false]
    let result3 = {
      data: true,
      next: {
        data: false
      }
    }
    expect(arrayToListNode(arr3)).toEqual(result3)
  });

  test('日期计算测试', () => {
    // 计算n天前或者n天后的时间
    let date = new Date('2020-01-01')
    expect(DateCalculate.dateCalculate(date, -1, 'year')).toEqual('2019-01-01 08:00:00')


    let start = new Date('2020-01-01 08:00:08')
    let end = new Date('2020-01-01 09:00:08')
    expect(DateCalculate.timeSub(start, end)).toEqual(3600000)
  });
});
