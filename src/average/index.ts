/**
 * 计算数组平均值
 * @returns
 */
const average = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length;

export default average;
