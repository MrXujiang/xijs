import parser from '../index';

function compareObj(obj, otherObj) {
  for (const key in obj) {
    if (obj[key] === null) {
      return otherObj[key] === null;
    } else if (typeof key === 'object') {
      compareObj(obj[key], otherObj[key]);
    } else if (obj[key].toString() !== otherObj[key].toString()) {
      return false;
    }
  }
  return true;
}

describe('parser', () => {
  test('json 超级解析器', async () => {
    const obj = {
      a: 1,
      b: function () {},
      c: {
        c1: 'h5-dooring',
        c2: () => {},
        c3: {
          c: '3fvc',
          d: {
            dd: () => {},
            ee: /[a-z]/g,
          },
        },
      },
      d: /[0-9]/g,
      e: null,
    };

    const copyObj = parser.parse(parser.stringify(obj));
    expect(compareObj(obj, copyObj)).toBe(true);
  });
});
