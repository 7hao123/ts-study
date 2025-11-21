// 基础数据类型
let userAge = 0
// userAge = 'linbudu'
// ts的类型不能够改变了

// 数组有两种写法，两种没有区别
const userNames1: string[]= []
const userNames2: Array<string> = []

// 对于对象类型

interface User {
  userName: string;
  userAge: number;
  userMarried: boolean;
}

const user: User = {
  userName: 'test',
  userAge: 20,
  userMarried: false,
};
// 为什么要写两遍呢？？？
// 将对象类型抽象为一个接口，我们能够在后续很方便地复用这个类型标注，
// 以及在类型编程中，对这个接口类型进行各种处理获得新的类型


const userList: User[] = []
// 使用接口来描述对象类型意味着，代码中的赋值需要完全符合这个接口定义的接口：
// 必须拥有所有接口中定义的属性，不能多也不能少：
// 我的对象中，存在一个比较飘忽的属性，它可能存在也可能不存在，
// 而是否存在都不影响我这个对象是否符合类型的判断，应该怎么做？

interface User {
  userName: string;
  userAge: number;
  userMarried: boolean;
  userJob?: string;
}


// 在 JavaScript 中，我们还经常使用对象来存放常量：这样方便维护者查看变量是什么？
const userLevelCode = {
  Visitor: 10001,
  NonVIPUser: 10002,
  VIPUser: 10003,
  Admin: 10010,
  // ... 
}

// 在ts中用枚举改写
// enum UserLevelCode{
//   Visitor = 10001,
//   NonVIPUser = 10002,
//   VIPUser = 10003,
//   Admin = 10010
// }


// 枚举值可以自动累加的，因此可以省略vipUser
// 枚举值可以同时支持数字，字符串，函数计算等

function getRandom(){
    return Math.random()* 10000
}
enum UserLevelCode {
  Visitor = 10001,
  NonVIPUser = 10002,
  VIPUser,
  Admin,
  Mixed = 'Mixed',
  Random = getRandom(),
  // ...
}

console.log(UserLevelCode.NonVIPUser)
