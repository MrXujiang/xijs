/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-14 19:23:45
 * @FilePath: \xijs\src\getDom\index.ts
 * @Description: 获取dom节点相对于screen定位。
 */

function getDomScreenXY(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    const { top, left } = element.getBoundingClientRect();

    return [left, top];
  }
  return undefined;
}

export default getDomScreenXY;
