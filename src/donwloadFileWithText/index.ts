/**
 *
 * @param text 下载文本
 * @param fileName 文件名
 */
function downloadFileWithText(
  text: string,
  fileName: string = text.slice(0, 5),
) {
  const eleLink: HTMLAnchorElement = document.createElement('a');
  eleLink.download = fileName;
  const blob: Blob = new Blob([text]);
  const blobUrl: string = URL.createObjectURL(blob);
  eleLink.href = blobUrl;
  eleLink.click();
  eleLink.remove();
  URL.revokeObjectURL(blobUrl);
}
export default downloadFileWithText;
