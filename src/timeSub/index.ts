/**
 * 计算两个时间的差
 * @param start：开始时间
 * @param end：结束时间
 */
const timeSub = (start: string | Date, end: string | Date): number => {
  let startDate = new Date(start)
  let endDate = new Date(end)
  let date = endDate.getTime() - startDate.getTime()
  let misSecond = Math.floor(date);
  return misSecond
}

export default timeSub;
