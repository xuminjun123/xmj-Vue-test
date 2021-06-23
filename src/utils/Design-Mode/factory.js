/*
 * @Description: 工厂模式 ：主要用来创建对象
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 16:07:22
 */

// 没有封装
// let catA = {
//     name:"catA",
//     eat:function(){
//         console.log('catA');
//     }
// }
// let catB = {
//     name:"catB",
//     eat:function(){
//         console.log('catB');
//     }
// }
// let catC = {
//     name:"catC",
//     eat:function(){
//         console.log('catC');
//     }
// }

/**  使用工厂模式封装 */ 
// 方式1. 不使用面向对象的封装
// function createCat(name){
//     let obj = {};
//     obj.name = name;
//     obj.eat = function(){
//         console.log(name);
//     }
//     return obj;
// }

// let catA = createCat('catA');
// let catB = createCat('catB');
// let catC = createCat('catB');

// 方式2. 使用面向对象的封装的工厂模式
function CreateCat(name){
    this.name = name;
    this.eat = function(){
        console.log(name);
    } 
}
let catA = new CreateCat('catA');
catA.eat(); // catA
let catB = new CreateCat('catB');
catB.eat(); // catB
let catC = new CreateCat('catC');
catC.eat();  // catC