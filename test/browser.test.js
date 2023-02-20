import { store } from '../src/index';

function delay(time) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

describe('浏览器相关测试', () => {
  test('支持设置过期时间的 localstorage', async () => {
    store.set('name', 'jack', Date.now() + 1000);
    expect(store.get('name')).toEqual({ status: 0, value: 'jack' });

    await delay(1000);
    expect(store.get('name')).toEqual({ status: 3, value: null });
  });
});
