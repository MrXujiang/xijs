/**
 *
 * @param arr
 * @returns
 */
const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

export default shuffle;
