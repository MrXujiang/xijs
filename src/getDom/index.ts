/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-11 20:22:32
 * @FilePath: \xijs\src\getDom\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

function $(selector: string) {
  const nodes = document.querySelectorAll(selector);
  if (nodes.length === 0) {
    return undefined;
  }
  if (nodes.length === 1) {
    return nodes[0];
  }
  return nodes;
}

export default $;
