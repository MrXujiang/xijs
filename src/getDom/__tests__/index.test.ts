import $ from '../index';

function renderHtml() {
  const div = document.createElement('div');
  div.setAttribute('id', 'domId');
  div.innerHTML =
    "this id domId<h1>Hello World</h1><div id='oneId' class='oneClass twoClass'>this id div one</div><div id='twoId' class='twoClass'>this id div two</div>";

  document.body.appendChild(div);
}

describe('浏览器相关测试', () => {
  renderHtml();
  test('获取dom,通过id,class等:', () => {
    expect($('#oneId').getAttribute('id')).toBe('oneId');
    expect($('.oneClass').getAttribute('id')).toBe('oneId');

    expect($('.twoClass').length).toBe(2);
    expect($('div').length).toBe(3);
  });
});
