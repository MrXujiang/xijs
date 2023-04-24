// 判断是否是有效的数字
const judgeIsNumber = (value: any) =>
  typeof value === 'number' && !isNaN(value) && Math.abs(value) !== Infinity;

/**
 * 将值转换为百分数
 * @param value 任何值
 * @param precision 小数位
 */
function formatPercent(value: any, precision = 2): string {
  let result = '0';
  if (judgeIsNumber(value) && value !== 0) {
    result =
      value % 1 === 0 ? `${value * 100}` : (value * 100).toFixed(precision);
  }
  return `${result}%`;
}

export default formatPercent;
