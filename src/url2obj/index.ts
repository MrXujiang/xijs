import { parse } from 'qs';

function url2obj(params = '?a=1&b=2&c=3') {
  if (params.indexOf('?') > -1) {
    params = params.slice(1);
  }
  return parse(params);
}

export default url2obj;
