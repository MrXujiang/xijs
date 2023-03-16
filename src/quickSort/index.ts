import isArray from '../isArray';
/**
 * 对象数组、普通数组快速排序
 * @param arr 
 * @param arrKey 
 * @param orderby 
 * @returns 
 */
function quickSort(arr: (object | string | number) [],arrKey:string,orderby: 'asc' | 'desc' = 'asc') {
    if (isArray(arr)) {
        let newArr : any[] = [],
            result : any[] = arr,
            temp = [],
            i = 0,
            len = result.length;
        if (len && len > 1) {
            for (; i < len; i++) {
                let item = result[i];
                ((newArr[i] = new String(item && item[arrKey] || '')) as any)._obj  = item;
            }
        }
        newArr.sort();
        for (i = 0; i < len; i++) {
            temp[i] = newArr[i]._obj;
        }
        if (orderby == 'desc') temp.reverse();
        return temp;
    } else throw Error('数据格式错误');
}
export default quickSort