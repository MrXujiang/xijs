// 将rgba字符串对象转化为rgba对象

export interface RGBColor {
  a?: number;
  b: number;
  g: number;
  r: number;
}

export default function rgba2obj(rgba = '') {
  const reg = /rgba\((\d+),(\d+),(\d+),(\d?\.?\d+)\)/g;
  let rgbaObj: RGBColor = { r: 0, g: 0, b: 0, a: 0 };

  rgba.replace(reg, (_m, r, g, b, a) => {
    rgbaObj = { r: +r, g: +g, b: +b, a: +a };
    return rgba;
  });
  return rgbaObj;
}
