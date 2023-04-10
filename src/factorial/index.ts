/**
 *
 * @param n 需要计算阶乘的数字
 * @returns 若阶乘结果大于 Number.MAX_SAFE_INTEGER，则返回 bigint 数据类型
 */
function factorial(n: number) {
  let res: any = 1,
    i: any = 1;
  // 大于等于19的阶乘结果超出了 Number.MAX_SAFE_INTEGER，需要 bigint 数据类型存储数据
  if (n >= 19) {
    res = BigInt(1);
    i = BigInt(1);
  }

  while (i <= n) {
    res = res * i;
    i++;
  }
  return res;
}

export default factorial;
