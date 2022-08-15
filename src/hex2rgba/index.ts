// 将hex字符串转化为rgba及其对象

function hex2rgba(ahex: string, alpha: number | string = 1) {
  const BASE = 16;
  const HEX_REGEX = /^#?[a-fA-F0-9]+$/;
  const HEX_SHORTHAND_LENGTH = 3;
  const HEX_LENGTH = 6;
  let hex: any = ahex;

  if (!HEX_REGEX.test(hex)) {
    throw Error('hex2rgba: 第一个参数为非法的hex字符串');
  }

  // 剔除#
  if (hex[0] === '#') {
    hex = hex.slice(1);
  }

  // 如果是hex简写，如#fff, 统一转换为#ffffff
  if (hex.length === HEX_SHORTHAND_LENGTH) {
    hex = hex.split('');
    hex.splice(2, 0, hex[2]);
    hex.splice(1, 0, hex[1]);
    hex.splice(0, 0, hex[0]);
    hex = hex.join('');
  }

  if (hex.length !== HEX_LENGTH) {
    throw Error('hex2rgba: 非法的hex长度');
  }

  // hex 转换为 rgb
  const values = [
    parseInt(hex.slice(0, 2), BASE),
    parseInt(hex.slice(2, 4), BASE),
    parseInt(hex.slice(4, 6), BASE),
  ];

  alpha = typeof alpha === 'number' ? alpha : parseFloat(alpha);
  if (alpha >= 0 && alpha <= 1) {
    values.push(alpha);
  } else {
    values.push(1);
  }

  return {
    v: 'rgba(' + values.join(',') + ')',
    o: {
      r: values[0],
      g: values[1],
      b: values[2],
      a: values[3],
    },
  };
}

export default hex2rgba;
