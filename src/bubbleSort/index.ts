import { isArray } from '../index';
/**
 * 
 * @param obj 
 * @param arrKey 
 * @param orderby  fall => 降序 反之 升序，默认升序
 * @returns 
 * 对象数组使用  bubbleSort(arr,key,orderby)
 * 普通数组使用  bubbleSort(arr) bubbleSort(arr,'',orderby)
 */
function bubbleSort(obj: any, arrKey: string, orderby: string) {
    var result = obj;
    var temp = null;
    if (isArray(obj)) {
        if (obj.length > 1) {
            for (var i = 0; i < result.length; i++) {
                for (var j = 0; j < i; j++) {
                    var resultfiled_i = result[i][arrKey]
                        ? result[i][arrKey]
                        : result[i],
                        resultfiled_j = result[j][arrKey]
                            ? result[j][arrKey]
                            : result[j];
                    // 降序
                    if (orderby === 'fall') {
                        if (parseInt(resultfiled_i) > parseInt(resultfiled_j)) {
                            temp = result[j];
                            result[j] = result[i];
                            result[i] = temp;
                        }
                    // 升序
                    } else {
                        if (parseInt(resultfiled_i) < parseInt(resultfiled_j)) {
                            temp = result[j];
                            result[j] = result[i];
                            result[i] = temp;
                        }
                    }
                }
            }
        }
        return result;
    }else throw Error('数据格式错误');
}
export default bubbleSort;
