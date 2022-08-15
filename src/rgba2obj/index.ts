// 将rgba字符串对象转化为rgba对象

export interface RGBColor {
  a?: number;
  b: number;
  g: number;
  r: number;
}

export default function rgba2obj(rgba = '') {
  let reg = /rgba\((\d+),(\d+),(\d+),(\d+)\)/g;
  let rgbaObj: RGBColor = { r: 0, g: 0, b: 0, a: 0 };

  rgba.replace(reg, (_m, r, g, b, a) => {
    rgbaObj = { r, g, b, a };
    return rgba;
  });
  return rgbaObj;
}
