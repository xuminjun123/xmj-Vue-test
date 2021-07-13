/*
 * @Description: promise - test 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-12 17:35:37
 */
/*
 * @Description: promise 面试题
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-12 15:58:46
 */
// 1. 执行async 函数 ，返回的都是 Promise 
async function test1(){
    return 1; //  Promise { 1 } 
}

async function test2(){
    return Promise.resolve(2);  // Promise { <pending> }
}

const result1 = test1();
const result2 = test2()
console.log('result1--->',result1);
console.log('reslut2--->',result2);


// 2. promise.then 成功的情况 对应 await
async function tets3(){
    const p3 = Promise.resolve(3);
    p3.then((data)=>{
        console.log("data3",data); //3
    })

    const data = await p3;  // await 内部封装 new Promise
    console.log('data3',data); // 3
    
}
tets3();

// 3. promise.catch 异常的情况 对应 try...catch
async function tets6(){
    const p6 = Promise.reject(6);
    try {
        const data6 = await p6;  
        console.log('data6',data6); // 3
    } catch(e) {
        console.log('e',e); // 6 
    }
    // const data6 = await p6; 
    // console.log('data6',data6); 
}
tets6();