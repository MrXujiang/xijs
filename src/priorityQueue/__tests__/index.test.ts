import PriorityQueue from '../index';

describe('PriorityQueue', () => {
  test('默认调用', () => {
    const pq = new PriorityQueue();

    pq.enqueue(5);
    pq.enqueue(3);
    pq.enqueue(8);

    expect(pq.dequeue()).toBe(3);
    expect(pq.dequeue()).toBe(5);
    expect(pq.dequeue()).toBe(8);
  });

  test('获取头部元素和元素个数', () => {
    const pq = new PriorityQueue();

    pq.enqueue(5);
    pq.enqueue(3);
    pq.enqueue(8);

    expect(pq.getHead()).toBe(3);
    expect(pq.size).toBe(3);
  });

  // test('自定义比较函数', () => {
  //   const customCompare = (a: number, b: number) => {
  //     return b - a;
  //   };

  //   const pq = new PriorityQueue(customCompare);

  //   pq.enqueue(5);
  //   pq.enqueue(3);
  //   pq.enqueue(8);

  //   expect(pq.dequeue()).toBe(8);
  //   expect(pq.dequeue()).toBe(5);
  //   expect(pq.dequeue()).toBe(3);
  // });
});
