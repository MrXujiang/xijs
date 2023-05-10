const arrayRepeat = <T>(data: Array<T>): object => {
  let res = {} as any;
  data.forEach((ele) => {
    const count = res[ele];
    if (count === undefined || count === null) {
      res[ele] = 1;
    } else {
      res[ele] = count + 1;
    }
  });
  return res;
};

export default arrayRepeat;
