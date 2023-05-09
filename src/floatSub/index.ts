export default function floatSub(num1: number, num2: number): number {
  if (!(isNumber(num1) || isNumber(num2))) {
    console.warn('Please pass in the number type');
    return NaN;
  }
  let r1, r2, m, n;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (error) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (error) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Number(((num1 * m - num2 * m) / m).toFixed(n));
}
function isNumber(num: unknown): boolean {
  return typeof num === 'number' && !isNaN(num);
}
