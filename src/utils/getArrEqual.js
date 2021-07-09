/*
 * @Description: 找出相同的 元素
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-08 16:59:13
 */
// 取出两个数组的相同元素
export function getArrEqual(arr1 = [], arr2 = []){
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                newArr.push(arr1[j]);
            }
        }
    };
    return newArr;
}
