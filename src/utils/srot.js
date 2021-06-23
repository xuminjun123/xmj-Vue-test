/*
 * @Description: 排序的Utils
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 16:28:48
 */
// sort 排序 （升序/降序）
export function sortData(arrData) {
    arrData.sort(function (a, b) {
        // return a-b; ——>升序排列
        return b - a;  //降序排列，
    })
}

// 插入排序
export function insertSortData(arrData) {
    for (let i = 0; i < arr.length; i++) {
        let n = i;
        while (arrData[n] > arrData[n + 1] && n >= 0) {
            let temp = arrData[n];
            arrData[n] = arrData[n + 1];
            arrData[n + 1] = temp;
            n--;
        }
    }
}

// 冒泡排序
// 性能一般
// 冒泡排序,每一趟找出最大的,总共比较次数为arr.length-1次,每次的比较次数为arr.length-1次，依次递减
export function bubblingSortData(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 选择排序
// 性能一般
export function chooseSortData(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// 桶排序
export function bareelSortData(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        arr2[key] = 1;
    }
    for (let j in arr2) {
        console.log(j);
    }
}

// 希尔排序
export function xier(arr) {
    var interval = parseInt(arr.length / 2);  //分组间隔设置
    while (interval > 0) {
        for (var i = 0; i < arr.length; i++) {
            var n = i;
            while (arr[n] < arr[n - interval] && n > 0) {
                var temp = arr[n];
                arr[n] = arr[n - interval];
                arr[n - interval] = temp;
                n = n - interval;
            }
        }
        interval = parseInt(interval / 2);
    }
    return arr;
}
// xier([10,44,82,50,70,74,29,1,40,36,58,21,56,44,43,61,222,48]);

// 快速排序
export function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var midIndex = parseInt(arr.length / 2);
    var mid = arr[midIndex];
    for (var i = 0; i < arr.length; i++) {
        if (i == midIndex) continue;
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([mid], quickSort(right));
}
// [1, 2].concat([3], [4, 5]);   //[1, 2, 3, 4, 5]