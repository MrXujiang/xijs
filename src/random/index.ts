/**
 * 返回区域内随机数
 * @param lower 下限
 * @param upper 上限
 * @returns
 */
function random(lower: number, upper: number) {
  lower = +lower || 0;
  upper = +upper || 0;
  return Math.random() * (upper - lower) + lower;
}

export default random;
