import { repeat } from '../index';

const dataDesensitizationMap = {
  idCard: (data: string): string => {
    return data.replace(/(\d{2})\d{14}(\w{2})/, '$1' + repeat('*', 14) + '$2');
  },
  phone: (data: string): string => {
    return data.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  },
  bankCard: (data: string): string => {
    return data.replace(/(\d{4})\d{10}(\w{4})/, '$1' + repeat('*', 10) + '$2');
  },
  address: (data: string): string => {
    return data.replace(/(\S{2})\S*/, '$1' + repeat('*', data.length - 2));
  },
  custom: (data: string, begin: number, desensitization: number): string => {
    const end = data.length - begin - desensitization;
    const regexp = RegExp(
      `(\\d{` + begin + `})\\d{` + desensitization + `}(\\w{` + end + `})`,
    );
    return data.replace(regexp, '$1' + repeat('*', desensitization) + '$2');
  },
  fixPhone: (data: string): string => {
    return data.replace(/(\w{3}-)\w*/, '$1' + repeat('*', data.length - 4));
  },
  email: (data: string): string => {
    return data.replace(
      /(\w?)(\w+)(\w)(@\w+\.[a-z]+(\.[a-z]+)?)/,
      '$1****$3$4',
    );
  },
  username: (data: string): string => {
    return data.replace(/(\S)(\S*)/, '$1' + repeat('*', data.length - 1));
  },
};

type DataDesensitization =
  | 'idCard'
  | 'bankCard'
  | 'phone'
  | 'address'
  | 'custom'
  | 'fixPhone'
  | 'email'
  | 'username';
const dataDesensitization = (
  des: DataDesensitization,
  data: string,
  begin = 0,
  desensitization = 0,
) => {
  if (des === 'custom') {
    return dataDesensitizationMap['custom'](data, begin, desensitization);
  } else if (dataDesensitizationMap[des]) {
    return dataDesensitizationMap[des](data);
  } else {
    throw Error('请输入正确的脱敏类型');
  }
  return;
};

export default dataDesensitization;
