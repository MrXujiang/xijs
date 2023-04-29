const completeIp = (ip: string) => {
  try {
    const parts = ip.split('.');

    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i].padStart(3, '0');
    }

    return parts.join('.');
  } catch (error) {
    return '请传入正确的 ip 地址！';
  }
};

export default completeIp;
