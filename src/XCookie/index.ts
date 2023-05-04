interface option {
  path?: string;
  domain?: string;
  expires?: number | string | Date;
  maxAge?: number | string;
  secure?: boolean;
}
class XCookie {
  private initOption: { path: string };
  constructor() {
    this.initOption = { path: './' };
  }
  private checkEnviroment() {
    if (typeof document === 'undefined') {
      throw new Error(
        'Document object does not exist, please check enviroment.',
      );
    }
  }
  set(key: string, value: string, option: option = {}): string {
    this.checkEnviroment();

    option = Object.assign({}, this.initOption, option);
    let { path, domain, expires, maxAge } = option;
    const { secure } = option;
    key = encodeURIComponent(key.trim());
    value = encodeURIComponent(value.trim());
    let secureStr = '';

    path = `; path=${path}`;
    domain && (domain = `; domain=${domain}`);
    secure && (secureStr = '; secure');

    if (maxAge && +maxAge == maxAge) {
      maxAge = `; max-age=${maxAge}`;
    } else {
      if (maxAge) {
        console.warn('Invalid max-age.');
      }
      maxAge = '';
    }

    if (expires) {
      switch (expires.constructor) {
        case String:
          expires = '; expires=' + expires;
          break;
        case Number:
          if (expires === Infinity) {
            expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
          } else {
            expires =
              '; expires=' + new Date(Date.now() + (expires as number) * 864e5);
          }
          break;
        case Date:
          expires = '; expires=' + (expires as Date).toUTCString();
          break;
      }
    } else {
      expires = '';
    }

    return (document.cookie = `${key}=${value}${path}${domain}${expires}${maxAge}${secureStr}`);
  }
  get(key: string): string {
    this.checkEnviroment();

    if (!key) {
      return '';
    }

    const cookieStrArr = document.cookie ? document.cookie.split('; ') : [];
    for (const cookieStr of cookieStrArr) {
      const partCookie = cookieStr.split('=');
      const name = decodeURIComponent(partCookie[0]),
        value = decodeURIComponent(partCookie.slice(1).join('='));

      if (key === name) {
        return value;
      }
    }
    return '';
  }
  remove(key: string, option: option = {}) {
    this.set(
      key,
      '',
      Object.assign({}, option, {
        expires: -1,
      }),
    );
  }
  allCookies() {
    this.checkEnviroment();
    const cookiesObj: { [propName: string]: string } = {};
    const cookieStrArr = document.cookie ? document.cookie.split('; ') : [];
    for (const cookieStr of cookieStrArr) {
      const partCookie = cookieStr.split('=');
      const key = decodeURIComponent(partCookie[0]),
        value = decodeURIComponent(partCookie.slice(1).join('='));

      cookiesObj[key] = value;
    }
    return cookiesObj;
  }
}

export default new XCookie();
