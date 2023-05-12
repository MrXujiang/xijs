import transformTree from '../index';

describe('transformTree', () => {
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
});
