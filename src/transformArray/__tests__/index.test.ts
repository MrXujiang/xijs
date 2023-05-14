import transformArray from '../index';

describe('transformArray', () => {
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
});
