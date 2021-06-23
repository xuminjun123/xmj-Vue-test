/*
 * @Description: 建造者模式 : 注重创建对象的细节。使用这种模式创建的复杂对象或者符合对象结构非常清晰
                            一般创建复杂对象
* @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 16:54:52
 */


// 太复杂 不懂
// let data = [
//     {
//         name: "张三",
//         age: 23,
//         work: "student"
//     },
//     {
//         name: "李四",
//         age: 20,
//         work: "teacher"
//     }, {
//         name: "王五",
//         age: 21,
//         work: "xxx"
//     },
// ]

// // 使用建造这模式
// function Person(param) {
//     this.name = param.name;
//     this.age = param.age
// }
// function CreateName(name) {
//     this.wholeName = name;
//     this.firstName = name.split("")[0];
//     this.secondName = name.split("")[1];
// }
// function CreateWork(work) {
//     switch (work) {
//         case "student":
//             this.name = "学生";
//             this.description = "热爱学习";
//             break;
//         case "teacher":
//             this.name = "老师";
//             this.description = "热爱教书";
//             break;
//         case "xxx":
//             this.name = "xxx";
//             this.description = "热爱xxx";
//             break;
//         default :
//             this.name =work;
//             this.description = "无"    
//     }
// }

// CreateWork.prototype.changeWork = function(work){
//     this.name = work;
// }
// CreateWork.prototype.changeDesc = function(desc){
//     this.description = desc;
// }

// function Candidate(param) {
//     let candidate = new Person();
//     candidate.name = new CreateName(param.name);
//     candidate.work = new CreateWork(param.work);

//     return candidate;
// }

// let candidateArr = [];
// data.forEach((item, i) => {
//     candidateArr[i] =  Candidate(data[i])
// })
