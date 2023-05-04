/**
 * 将 FormData 转换成 JSON
 * @param data: 为 FormData
 */
const formDataToJson = (data: FormData): string => {
  const json = {} as any;
  // 将表单数据转换为 JSON
  data.forEach((val, key) => {
    json[key] = val;
  });
  return JSON.stringify(json);
};

export default formDataToJson;
