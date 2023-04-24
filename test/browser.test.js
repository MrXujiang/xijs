/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:17:52
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-13 21:45:51
 * @FilePath: \xijs\test\browser.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { store, sleep } from '../src/index';
import { $, getDomText } from '../src/index';

function renderHtml() {
  const div = document.createElement('div');
  div.setAttribute('id', 'domId');
  div.innerHTML =
    "this id domId<h1>Hello World</h1><div id='oneId' class='oneClass twoClass'>this id div one</div><div id='twoId' class='twoClass'>this id div two</div>";

  document.body.appendChild(div);
}

describe('浏览器相关测试', () => {
  test('支持设置过期时间的 localstorage', async () => {
    store.set('name', 'jack', Date.now() + 1000);
    expect(store.get('name')).toEqual({ status: 0, value: 'jack' });

    await sleep(1000);
    expect(store.get('name')).toEqual({ status: 3, value: null });
  });
  renderHtml();
  test('获取dom,通过id,class等:', () => {
    expect($('#oneId').getAttribute('id')).toBe('oneId');
    expect($('.oneClass').getAttribute('id')).toBe('oneId');

    expect($('.twoClass').length).toBe(2);
    expect($('div').length).toBe(3);
  });

  test('获取元素的文本内容:', () => {
    expect(getDomText('#oneId')).toBe('this id div one');
    expect(getDomText('.twoClass')).toBe('this id div onethis id div two');
    expect(getDomText('#domId')).toBe(
      'this id domIdHello Worldthis id div onethis id div two',
    );
  });
});
