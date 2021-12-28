// @ts-nocheck
/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @returns
 */
function getRuntimeEnv() {
  let inBrowser = typeof window !== 'undefined';
  let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();

  //浏览器 UA 判断
  let UA = inBrowser && window.navigator.userAgent.toLowerCase();
  let isIE = UA && /msie|trident/.test(UA);
  let isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  let isEdge = UA && UA.indexOf('edge/') > 0;
  let isAndroid =
    (UA && UA.indexOf('android') > 0) || weexPlatform === 'android';
  let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios';
  let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  return {
    isWeex: inWeex,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
  };
}
export default getRuntimeEnv;
