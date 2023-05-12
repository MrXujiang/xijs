import minBy from '../index';

describe('minBy', () => {
  test('对象数组最小值', () => {
    const NumberArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const StringArr = [{ id: 'A' }, { id: 'a' }, { id: 'b' }];
    const ChartArr = [{ id: '我' }, { id: '你' }, { id: '他' }];
    const StringNumberarr = [{ id: '我' }, { id: 2 }, { id: '1' }];
    const NumberMin = minBy(NumberArr, (arr) => {
      return arr.id;
    });
    const StringMin = minBy(StringArr, (arr) => {
      return arr.id;
    });
    const ChartMin = minBy(ChartArr, (arr) => {
      return arr.id;
    });
    const StringNumberMin = minBy(StringNumberarr, (arr) => {
      return arr.id;
    });
    expect({ id: 1 }).toEqual(NumberMin);
    expect({ id: 'A' }).toEqual(StringMin);
    expect({ id: '他' }).toEqual(ChartMin);
    expect({ id: '1' }).toEqual(StringNumberMin);
  });
});
