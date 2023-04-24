type Timeout = ReturnType<typeof setTimeout> | null;

/**
 *
 * @param fn 回调函数
 * @param wait 延迟时间
 * @returns
 */
function debounce(fn: (...args: any[]) => void, wait = 300) {
  let timer: Timeout = null;

  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

export default debounce;
