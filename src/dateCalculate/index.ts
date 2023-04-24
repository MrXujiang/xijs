import { formatDate } from '../index';

type DateType =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'milliseconds';

const dateTypeMap = {
  year: (date: Date, num: number) => {
    return date.setFullYear(date.getFullYear() + num);
  },
  month: (date: Date, num: number) => {
    return date.setMonth(date.getMonth() + num);
  },
  day: (date: Date, num: number) => {
    return date.setDate(date.getDate() + num);
  },
  hour: (date: Date, num: number) => {
    return date.setHours(date.getHours() + num);
  },
  minute: (date: Date, num: number) => {
    return date.setMinutes(date.getMinutes() + num);
  },
  second: (date: Date, num: number) => {
    return date.setSeconds(date.getSeconds() + num);
  },
  milliseconds: (date: Date, num: number) => {
    return date.setMilliseconds(date.getMilliseconds() + num);
  },
};

/**
 * 对日期进行计算，比如计算前一天，前一个月，后一天，后一个月等等
 * @param dateStr: 需要计算的日期字符串或者 Date
 * @param num：需要加上或者减去的天数（小时，月，年，分钟，秒等）
 * @param flag：对 年月日时分秒 那个进行计算
 * @param format：对 计算后的日期进行格式化的格式，默认使用 YY-MM-DD hh:mm:ss。比如：2020-01-02 08:00:00
 */
const dateCalculate = (
  dateStr: string | Date,
  num: number,
  flag: DateType,
  format?: string,
): string => {
  if (dateTypeMap[flag]) {
    const date = new Date(dateStr);
    const result = dateTypeMap[flag](date, num);
    return formatDate(result, format);
  } else {
    throw Error('请输入正确的计算参数(仅支持 年、月、日、时、分、秒、毫秒)');
  }
};

export default dateCalculate;
