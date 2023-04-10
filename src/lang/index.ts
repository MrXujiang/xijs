const lang = {
  /**
   *
   * @param str
   * @returns
   */
  isCn(str: string): boolean {
    const chineseRegex = /^[\u4e00-\u9fa5]+$/;
    return chineseRegex.test(str);
  },
  /**
   *
   * @param str
   * @returns
   */
  isEn(str: string): boolean {
    const englishRegex = /^[A-Za-z]+$/;
    return englishRegex.test(str);
  },
};

export default lang;
