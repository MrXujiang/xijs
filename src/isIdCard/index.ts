/**
 *
 * @param idCard
 * @returns
 */
// 身份证校验
const isIdCard = (idCard: string): boolean => {
  // areaCode:地区码  checkCode：末尾校验码
  const areaCode = [
    11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44,
    45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91,
  ];
  const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  // 15位身份证号码
  if (idCard.length === 15) {
    // 判断地区码
    const idCardAreaCode = parseInt(idCard.substr(0, 2));
    if (areaCode.indexOf(idCardAreaCode) === -1) {
      return false;
    }
    // 判断时间
    const borthYear = parseInt(idCard.substr(6, 2)) + 1900;
    const isRunNian =
      borthYear % 400 === 0 || (borthYear % 100 !== 0 && borthYear % 4 === 0);
    let regStr =
      /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
    if (isRunNian) {
      regStr =
        /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
    }
    if (!idCard.match(regStr)) {
      return false;
    }
    return true;
    // 18位身份证号码
  } else if (idCard.length === 18) {
    const idCardAreaCode = parseInt(idCard.substr(0, 2));
    if (areaCode.indexOf(idCardAreaCode) === -1) {
      return false;
    }
    const borthYear = parseInt(idCard.substr(6, 4));
    const isRunNian =
      borthYear % 400 === 0 || (borthYear % 100 !== 0 && borthYear % 4 === 0);
    let regStr =
      /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
    if (isRunNian) {
      regStr =
        /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
    }
    if (!idCard.match(regStr)) {
      return false;
    }
    // 判断最后一位
    const sumIdCard =
      (parseInt(idCard.substr(0, 1)) + parseInt(idCard.substr(10, 1))) * 7 +
      (parseInt(idCard.substr(1, 1)) + parseInt(idCard.substr(11, 1))) * 9 +
      (parseInt(idCard.substr(2, 1)) + parseInt(idCard.substr(12, 1))) * 10 +
      (parseInt(idCard.substr(3, 1)) + parseInt(idCard.substr(13, 1))) * 5 +
      (parseInt(idCard.substr(4, 1)) + parseInt(idCard.substr(14, 1))) * 8 +
      (parseInt(idCard.substr(5, 1)) + parseInt(idCard.substr(15, 1))) * 4 +
      (parseInt(idCard.substr(6, 1)) + parseInt(idCard.substr(16, 1))) * 2 +
      parseInt(idCard.substr(7, 1)) * 1 +
      parseInt(idCard.substr(8, 1)) * 6 +
      parseInt(idCard.substr(9, 1)) * 3;
    const modNum = checkCode[sumIdCard % 11];
    if (modNum !== idCard.substr(17, 1).toUpperCase()) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

export default isIdCard;
