import minBy from '../index';

describe('minBy', () => {
  test('对象数组最小值', () => {
    const NumberArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const StringArr = [{ id: 'A' }, { id: 'a' }, { id: 'b' }];
    const ChartArr = [{ id: '我' }, { id: '你' }, { id: '他' }];
    const StringNumberarr = [{ id: '我' }, { id: 2 }, { id: '1' }];
    const NumberMin = minBy(NumberArr, 'id');
    const StringMin = minBy(StringArr, 'id');
    const ChartMin = minBy(ChartArr, 'id');
    const StringNumberMin = minBy(StringNumberarr, 'id');
    expect({ id: 1 }).toEqual(NumberMin);
    expect({ id: 'A' }).toEqual(StringMin);
    expect({ id: '他' }).toEqual(ChartMin);
    expect({ id: '1' }).toEqual(StringNumberMin);
  });
});
