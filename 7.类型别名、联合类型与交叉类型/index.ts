// 1.type起类型别名
type Handler = () => void;
const handler1: Handler = ()=>{}
const handler2: Handler = () =>{}
// 也可以使用类型别名来替换接口
type User =  {
  userName: string;
  userAge: number;
  userMarried: boolean;
  userJob?: string;
}

// const user: User = { /* ... */ }


// 2.联合类型
type PossibleTypes = string | number | boolean

// 联合类型对其中的类型成员并没有限制，你可以混合原始类型，字面量类型，函数类型，对象类型等等等等
// 在实际应用中，最常见的应该是字面量联合类型，它表示一组精确的字面量类型：
type Status = 'success' | 'failure'
type Code = 200 | 404 | 502

// 字面量类型

const status: Status = ''

interface VisitorUser {}
interface CommonUser {}
interface VIPUser {}
interface AdminUser {}

type User = VisitorUser | CommonUser | VIPUser | AdminUser;

const user: User = {
  // ...任意实现一个组成的对象类型
}

// 3.交叉类型
// 满足所有条件

