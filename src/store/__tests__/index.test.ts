import store from '../index';
import sleep from '../../sleep';

describe('store', () => {
  test('支持设置过期时间的 localstorage', async () => {
    store.set('name', 'jack', Date.now() + 1000);
    expect(store.get('name')).toEqual({ status: 0, value: 'jack' });

    await sleep(1000);
    expect(store.get('name')).toEqual({ status: 3, value: null });
  });
});
