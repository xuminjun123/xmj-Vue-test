/*
 * @Description: 数组洗牌
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-07 16:07:01
 */

/*
 * @Description: getRandomNumber 得到min-max之间
 * @param :  {min} 最小值 ，{max} 最大值 
 * @return: [min,max]
 */
function getRandomNumber(min, max) {
    // min,max 之间的一个数字

    return Math.floor(Math.random(Math.random() * (max - min + 1) + min));
}

export function shuffle(arr) {
    let _arr = arr.slice(); // 定义一个变量来 作为arr 副本

    for (let i = 0; i < _arr.length; i++) {
        const j =  getRandomNumber(0,i);
        // arr[j] <-> arr[i]
        const temp = arr[i];
        _arr[i] = arr[j];
        _arr[j] = temp;
    }

    return _arr;
}