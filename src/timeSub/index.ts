/**
 * 计算两个时间的差
 * @param start：开始时间
 * @param end：结束时间
 */
const timeSub = (start: string | Date, end: string | Date): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const date = endDate.getTime() - startDate.getTime();
  const misSecond = Math.floor(date);
  return misSecond;
};

export default timeSub;
