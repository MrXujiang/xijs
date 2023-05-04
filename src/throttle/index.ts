/**
 *
 * @param fn
 * @param delay
 * @returns
 */
function throttle(fn: (...args: any[]) => void, delay: number) {
  let flag = true;
  return (...args: any[]) => {
    if (flag) {
      flag = false;
      fn(...args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

export default throttle;
