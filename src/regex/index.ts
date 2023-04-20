/**
 *
 * @param Regexp: 需要校验的正则表达式
 * @param text：需要匹配的内容
 */
const regex = (regexp: RegExp, text: string): boolean => {
  return regexp.test(text)
}

export default regex;
