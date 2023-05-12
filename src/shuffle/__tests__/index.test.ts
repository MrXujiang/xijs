import shuffle from '../index';

describe('shuffle', () => {
  test('打乱数组', () => {
    const arr = [1, 3, 5, 7, 4, 3],
      arrStr = arr.toString();
    let shuffleCount = 0;
    for (let i = 0; i < 100; i++) {
      const shuffleArr = shuffle(arr.slice());
      if (shuffleArr.toString() !== arrStr) {
        shuffleCount++;
      }
    }
    const probability = shuffleCount / 100;
    expect(probability).toBeGreaterThanOrEqual(0.9);
  });
});
