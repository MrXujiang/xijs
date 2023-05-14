import formDataToJson from '../index';

describe('formDataToJson', () => {
  test('表单数据转成JSON', () => {
    const data = new FormData();
    data.set('user', '1');
    data.set('age', 29);
    data.set('phone', '18329208292');
    expect(formDataToJson(data)).toEqual(
      '{"user":"1","age":"29","phone":"18329208292"}',
    );
    const data1 = new FormData();
    expect(formDataToJson(data1)).toEqual('{}');
  });
});
