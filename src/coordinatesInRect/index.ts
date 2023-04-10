/**
 * @param startPos 左上顶点坐标
 * @param w 矩形的宽
 * @param h 矩形的高
 * @returns 返回矩形内的任意坐标
 */
function coordinatesInRect(
  startPos: [number, number],
  w: number,
  h: number,
): [number, number] {
  if (
    startPos &&
    Array.isArray(startPos) &&
    startPos.length === 2 &&
    typeof w === 'number' &&
    typeof h === 'number'
  ) {
    const [x0, y0]: [number, number] = startPos;
    // 生成大于等于 x0，小于等于 x0 + w 的 x 坐标
    const pointX: number = Math.floor(Math.random() * (w + 1)) + x0;
    // 生成大于等于 y0，小于等于 y0 + h 的 y 坐标
    const pointY: number = Math.floor(Math.random() * (h + 1)) + y0;

    return [pointX, pointY];
  } else {
    throw new Error('Please enter correct parameters.');
  }
}

export default coordinatesInRect;
