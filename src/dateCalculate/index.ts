import {formatDate} from "../index";

/**
 * 对日期进行计算，比如计算前一天，前一个月，后一天，后一个月等等
 * @param dateStr: 需要计算的日期字符串或者 Date
 * @param num：需要加上或者减去的天数（小时，月，年，分钟，秒等）
 * @param flag：对 年月日时分秒 那个进行计算
 * @param format：对 计算后的日期进行格式化的格式，默认使用 YY-MM-DD hh:mm:ss。比如：2020-01-02 08:00:00
 */
declare let duration: object;


class DateCalculate {
  static dateCalculate = (dateStr: string | Date, num: number, flag: string, format?: string): string => {
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
      default:
        throw new Error("时间计算错误")
    }
    return formatDate(date.getTime(), format)
  }

  /**
   * 计算两个时间的差
   * @param start：开始时间
   * @param end：结束时间
   */
  static timeSub = (start: string | Date, end: string | Date): number => {
    let startDate = new Date(start)
    let endDate = new Date(end)
    let date = endDate.getTime() - startDate.getTime()
    let misSecond = Math.floor(date);
    return misSecond
  }
}

export default DateCalculate;
