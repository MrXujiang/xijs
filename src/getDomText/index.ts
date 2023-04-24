/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-13 20:31:22
 * @FilePath: \xijs\src\getDom\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import $ from '../getDom';
function getDomText(selector: string) {
  const doms = $(selector);
  //1.是undefined
  if (!doms) {
    return '';
  }
  //1.是nodeList
  if (Reflect.has(doms, 'length')) {
    let res = '';
    Array.from(doms as NodeListOf<Element>).forEach((item) => {
      res += item.textContent;
    });

    return res;
  }
  //3是element
  return (doms as Element).textContent;
}

export default getDomText;
