/**
 *
 * @param milliseconds
 * @returns
 */
const sleep = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export default sleep;
