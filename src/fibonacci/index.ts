/**
 *
 * @param n
 * @returns 返回第n个斐波那契数
 */
function fibonacci(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let n2: number = 0,
    n1: number = 1,
    res: number = 0;

  for (let i: number = 2; i <= n; i++) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
  }
  return res;
}
export default fibonacci;
