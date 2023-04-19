import {formatDate} from "../index";

/**
 * 对日期进行计算，比如计算前一天，前一个月，后一天，后一个月等等
 * @param dateStr: 需要计算的日期字符串或者 Date
 * @param num：需要加上或者减去的天数（小时，月，年，分钟，秒等）
 * @param flag：对 年月日时分秒 那个进行计算
 * @param format：对 计算后的日期进行格式化的格式，默认使用 YY-MM-DD hh:mm:ss。比如：2020-01-02 08:00:00
 */
const dateCalculate = (dateStr: string | Date, num: number, flag: string, format?: string): string => {
  let date = new Date(dateStr)
  switch (flag) {
    case 'year':
      date.setFullYear(date.getFullYear() + num);
      break
    case 'month':
      date.setMonth(date.getMonth() + num);
      break
    case 'day':
      date.setDate(date.getDate() + num);
      break
    case 'hour':
      date.setHours(date.getHours() + num);
      break
    case 'minute':
      date.setMinutes(date.getMinutes() + num);
      break
    case 'second':
      date.setSeconds(date.getSeconds() + num);
      break
    case 'milliseconds':
      date.setMilliseconds(date.getMilliseconds() + num);
      break
    default:
      throw new Error("时间计算有误，不支持 年月日时分秒毫秒 以外的计算")
  }
  return formatDate(date.getTime(), format)
}

export default dateCalculate;
