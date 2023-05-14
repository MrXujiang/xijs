import maxBy from '../index';

describe('maxBy', () => {
  test('对象数组最大值', () => {
    const NumberArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const StringArr = [{ id: 'A' }, { id: 'a' }, { id: 'b' }];
    const ChartArr = [{ id: '我' }, { id: '你' }, { id: '他' }];
    const StringNumberarr = [{ id: '我' }, { id: 2 }, { id: '1' }];
    const NumberMin = maxBy(NumberArr, (arr) => {
      return arr.id;
    });
    const StringMin = maxBy(StringArr, (arr) => {
      return arr.id;
    });
    const ChartMin = maxBy(ChartArr, (arr) => {
      return arr.id;
    });
    const StringNumberMin = maxBy(StringNumberarr, (arr) => {
      return arr.id;
    });
    expect({ id: 3 }).toEqual(NumberMin);
    expect({ id: 'b' }).toEqual(StringMin);
    expect({ id: '我' }).toEqual(ChartMin);
    expect({ id: '我' }).toEqual(StringNumberMin);
  });
});
