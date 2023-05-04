/**
 *
 * @param url 下载链接
 * @param fileName 文件名
 */
function downloadFileWithUrl(url: string, fileName = '') {
  if (!fileName) {
    const urlArr: string[] = url.split('/');
    fileName = urlArr[urlArr.length - 1];
  }
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'no-cors',
  })
    .then(async (res) => {
      return res.blob();
    })
    .then((data) => {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => {
        const eleLink: HTMLAnchorElement = document.createElement('a');
        eleLink.download = fileName;
        const blobUrl: string = reader.result as string;
        eleLink.href = blobUrl;
        eleLink.click();
        eleLink.remove();
      };
    });
}
export default downloadFileWithUrl;
