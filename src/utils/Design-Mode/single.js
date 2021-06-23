/*
 * @Description: 单例模式 是设计模式中最常用的一种
                1. 在创建对象时候 ， 无论创建多少次对象都只指向同一个 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 17:35:47
 */
// 在大多数情况下 创建的对象都是独立的
// 如 ：
function notSingle() {
    return {
        a: 1
    }
}
let a = notSingle();
let b = notSingle();

console.log(a === b); // false 创建的是独立对象

// 使用构造函数时候创建对象也是 独立 的
// 如 ：
function notSingle2() {
    this.a = 123
}

let a1 = new notSingle2();
let b1 = new notSingle2();
console.log(a1 === b1); // false  创建的是独立对象


/** 
 * 使用单例创建的同一个对象 （没有使用闭包）
 * */
let unique = null;
function createSingle() {
    let obj = {
        a: 1
    }
    if (unique === null) {
        unique = obj
    }
    return unique;
}
let a3 = createSingle();
let b3 = createSingle();
let d = a3; // 相当于浅拷贝
console.log(a3 === b3); // true
console.log(d === a3); // true

/** 
 * 使用单例创建的同一个对象 （使用闭包）
 * */
let createSingle4 = (function () {
    let unique = null;

    function single(){
        return {
            a:1
        }
    }

    return function () {
       if(unique === null){
           unique = single()
       }
        return unique
    }
})()

let a4 = createSingle4();
let b4 = createSingle4()
console.log(a4 === b4);
