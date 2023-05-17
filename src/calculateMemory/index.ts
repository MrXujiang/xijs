export default function calculateMemory(
  value: unknown,
  unit: 'B' | 'KB' | 'MB' = 'B',
): string {
  let bytes = 0;
  function sizeOf(obj: any) {
    if (obj !== null && obj !== undefined) {
      switch (typeof obj) {
        case 'number':
          bytes += 8;
          break;
        case 'string':
          bytes += obj.length * 2;
          break;
        case 'boolean':
          bytes += 4;
          break;
        case 'object':
          if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
              sizeOf(obj[i]);
            }
          } else if (obj !== null) {
            for (let key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                sizeOf(obj[key]);
              }
            }
          }
          break;
        case 'function':
          bytes += obj.toString().length;
          break;
      }
    }
    return bytes;
  }
  const bytesCount = sizeOf(value);
  switch (unit.toUpperCase()) {
    case 'B':
      return `${bytesCount} B`;
    case 'KB':
      return `${(bytesCount / 1024).toFixed(2)} KB`;
    case 'MB':
      return `${(bytesCount / (1024 * 1024)).toFixed(2)} MB`;
    default:
      return `${bytesCount} B`;
  }
}
