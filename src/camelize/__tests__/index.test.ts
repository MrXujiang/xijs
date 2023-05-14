import camelize from '../index';

describe('camelize', () => {
  test('横线转驼峰命名', () => {
    const initStr = 'ab-cd-ef-123--';
    const transformStr = camelize(initStr);
    const expectStr = 'abCdEf123--';
    expect(transformStr).toBe(expectStr);
  });
});
