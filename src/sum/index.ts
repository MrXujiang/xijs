/**
 *
 * @param arr 求和数组
 * @returns 求和的结果
 */
function sum(arr: number[]): number {
  return arr.reduce((pre: number, cur: number) => pre + cur, 0);
}
export default sum;
