/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-20 20:26:16
 * @FilePath: \xijs\src\getDom\index.ts
 * @Description:获取随机颜色'hsl'|'hsla'|'rgb'|'rgba'|16，默认是rgb格式。
 */
export default genRandomColor;
function genRandomColor(
  type: 'hsl' | 'hsla' | 'rgb' | 'rgba' | 16 | '16' | undefined,
) {
  const genColorObj = {
    hsl:
      'hsl(' +
      Math.round(Math.random() * 360) +
      ',' +
      Math.round(Math.random() * 100) +
      '%,' +
      Math.round(Math.random() * 100) +
      '%)',
    hsla:
      'hsla(' +
      Math.round(Math.random() * 360) +
      ',' +
      Math.round(Math.random() * 100) +
      '%,' +
      Math.round(Math.random() * 100) +
      '%,' +
      ((Math.random() * 10) / 10).toFixed(1) +
      ')',
    rgb:
      'rgb(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ')',
    rgba:
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      ((Math.random() * 10) / 10).toFixed(1) +
      ')',
    16: '#' + Math.random().toString(16).substr(2, 6),
  };
  if (!type) {
    return genColorObj['rgb'];
  }
  if (['hsl', 'hsla', 'rgb', 'rgba', '16', 16].includes(type)) {
    return genColorObj[type];
  }
}
