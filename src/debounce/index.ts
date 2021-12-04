/**
 *
 * @param fn
 * @param wait
 * @returns
 */
function debounce(fn: Function, wait: number) {
  let timer: any = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}

export default debounce;
