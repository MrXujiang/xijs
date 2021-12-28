/**
 * 获取选中的文本
 * @returns
 */
const getSelection = () => (window as any).getSelection().toString();

export default getSelection;
