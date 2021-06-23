/*
 * @Description: 装饰器模式 在不改变原对象的基础上，通过对其拓展功能和属性来实现更复杂的逻辑
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 09:23:59
 */

/** 使用装饰器mode */
function Car(){
    this.price = 10;
}

function carWithHeatSeat(carClass){
    carClass.hasHeatSeat = true;
    carClass.price += 2;
}

function carWithAutoMirror(carClass){
    carClass.hasAutoMirror = true;
    carClass.price += 0.8;
}
let car = new Car();
console.log(car.price); //10 
carWithHeatSeat(car);
carWithAutoMirror(car);
console.log(car.price); // 12.8

