/**
 * 计算指定字符在字符串中出现的次数
 */
const designateRepeat = (data: string, ch: string): number => {
  return [...data].filter((item) => item === ch).length;
};
export default designateRepeat;
