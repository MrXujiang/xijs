/**
 * 计算传入的时间和当前时间的差值，比如计算几秒前、几分前、几秒后、几分后等等
 * @param timestamp 需要计算的时间戳
 */
const timeCutStr = (time: string | number): string => {
  let newTime = time;

  if (typeof newTime === 'string') {
    newTime = Number(newTime);

    if (isNaN(newTime)) {
      newTime = +new Date(time);
    }
  }

  if (isNaN(newTime)) return '请传入正确的时间格式';

  const now = Date.now();
  const diff = Math.abs(now - newTime);

  if (diff < 1000) {
    return '刚刚';
  }

  const units = {
    年: 1000 * 60 * 60 * 24 * 365,
    个月: 1000 * 60 * 60 * 24 * 30,
    天: 1000 * 60 * 60 * 24,
    小时: 1000 * 60 * 60,
    分钟: 1000 * 60,
    秒: 1000,
  };

  for (const unit in units) {
    const timeDiff = Math.floor(diff / units[unit as keyof typeof units]);

    if (timeDiff > 0) {
      return `${timeDiff}${unit}${now > newTime ? '前' : '后'}`;
    }
  }

  return '未知时间';
};

export default timeCutStr;
