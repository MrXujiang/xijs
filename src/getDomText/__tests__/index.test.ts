/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:17:52
 * @LastEditors: lhl
 * @LastEditTime: 2023-05-08 18:11:53
 * @FilePath: \xijs\test\browser.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import getDomText from '../index';

function renderHtml() {
  const div = document.createElement('div');
  div.setAttribute('id', 'domId');
  div.innerHTML =
    "this id domId<h1>Hello World</h1><div id='oneId' class='oneClass twoClass'>this id div one</div><div id='twoId' class='twoClass'>this id div two</div>";

  document.body.appendChild(div);
}

describe('getDomText', () => {
  renderHtml();

  test('获取元素的文本内容:', () => {
    expect(getDomText('#oneId')).toBe('this id div one');
    expect(getDomText('.twoClass')).toBe('this id div onethis id div two');
    expect(getDomText('#domId')).toBe(
      'this id domIdHello Worldthis id div onethis id div two',
    );
  });
});
