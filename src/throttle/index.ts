/**
 *
 * @param fn
 * @param delay
 * @returns
 */
function throttle(fn: () => void, delay: number) {
  let flag = true;
  return (...args: any) => {
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
