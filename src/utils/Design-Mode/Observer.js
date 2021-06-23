/*
 * @Description: 观察着模式 ：又叫做发布订阅模式或者消息模式
        - 这种模式一般会定义一个主体和众多的个体 ，这里主体可以想象为一个消息中心里面有各种各样的消息，
         众多的个体可以订阅不同的消息， 当未来消息中心发布某条消息的时候，订阅过他的个体就会得到通知。
 * @Author: xmj
 * @Date: 2021-06-10 10:51:01
 */


// 普通写法
let msgCenter = (function(){
    let msg = {};  // 存储消息
    return {
        // 用于订阅一个消息
        register: function(type ,fn){
            if(msg[type]){
                msg[type].push(fn)
            }else{
                msg[type] = [fn]
            }
        },
        // 用于发布消息
        fire:function(type,args){
            if(!msg[type]){
                return
            }
        },
        // 用于取消订阅消息
        cancel:function(type,fn){

        }
    }
})();

function Person(){
    this.alreadyRegister = {}
}
Person.prototype.register  = function(type,fn){
    msgCenter.register(type,fn);
    this.alreadyRegister[type] = fn;
}
Person.prototype.cancel = function(type){
    msgCenter.cancel(type,this.alreadyRegister[type]);
    delete this.alreadyRegister[type];
}
let person1 = new Person();
let person2 = new Person();
let person3 = new Person();
person1.register('carInfo',function(e){
    console.log('person得到了关于' + e.type + "消息,消息的内容是：" + e.args.info);
})
person2.register('carInfo',function(e){
    console.log('person得到了关于' + e.type + "消息,消息的内容是：" + e.args.info);
})
person3.register('carInfo',function(e){
    console.log('person得到了关于' + e.type + "消息,消息的内容是：" + e.args.info);
})

msgCenter.fire('carInfo',{info:"xxx上市"});
msgCenter.fire("newsInfo",{info:"某国家领导人访华!"})