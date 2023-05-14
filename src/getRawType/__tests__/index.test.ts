import getRawType from '../index';

describe('getRawType', () => {
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
});
