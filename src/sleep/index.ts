/**
 *
 * @param milliseconds
 * @returns
 */
const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), milliseconds >= 0 ? milliseconds : 0));

export default sleep;
