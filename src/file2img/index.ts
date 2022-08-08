// 压缩前将file转换成img对象
function readImg(file: File) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = function (e: any) {
      img.src = e.target.result;
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(file);
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      reject(e);
    };
  });
}

export default readImg;
