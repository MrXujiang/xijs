/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-05-13 11:28:06
 * @FilePath: \xijs\src\getDom\index.ts
 * @Description:计算字符串中重复字符以及重复字符的次数(用对象的方法，key为字符，value为个数，然后遍历对象)
 */
export default getRepeatCharacter;



function getRepeatCharacter(
  str:string
) {

  const obj:{[key:string]:number}={};
  for(let i=0; i<str.length;i++){
      let char=str.charAt(i);
      if(obj[char]){
          obj[char]++;
      }else{
          obj[char]=1;
      }
  }
return obj

}
