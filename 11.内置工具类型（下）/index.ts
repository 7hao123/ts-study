// record的用法
type UserProps = 'name' | 'job' | 'email';

// 等价于你一个个实现这些属性了
// type User = Record<UserProps, string>;

// const user: User = {
//   name: 'John Doe',
//   job: 'fe-developer',
//   email: 'john.doe@example.com'
// };

// 你可以使用 Record 类型来声明属性名还未确定的接口类型

type User = Record<string, string>;

const user: User = {
  name: 'John Doe',
  job: 'fe-developer',
  email: 'john.doe@example.com',
  bio: 'Make more interesting things!',
  type: 'vip',
  // ...
};

// 内置工具类型中还包括用于对象类型裁剪的 Pick 与 Omit。

type User = {
  name: string;
  age: number;
  email: string;
  phone: string;
};

// 只提取其中的 name 与 age 信息
type UserBasicInfo = Pick<User, 'name' | 'age'>;

const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  phone: '1234567890'
};

const userBasicInfo: UserBasicInfo = {
  name: 'John Doe',
  age: 30
};


// Omit 类型就是 Pick 类型的另一面，
// 它的入参和 Pick 类型一致，但效果却是相反的——它会移除传入的属性名的部分

type User = {
  name: string;
  age: number;
  email: string;
  phone: string;
};

// 只移除 phone 属性
type UserWithoutPhone = Omit<User, 'phone'>;

const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  phone: '1234567890'
};

const userWithoutPhone: UserWithoutPhone = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

// Exclude和Extract
// Exclude 差集合
type UserProps = 'name' | 'age' | 'email' | 'phone' | 'address';
type RequiredUserProps = 'name' | 'email';

// OptionalUserProps = UserProps - RequiredUserProps
type OptionalUserProps = Exclude<UserProps, RequiredUserProps>;

const optionalUserProps: OptionalUserProps = 'age'; // 'age' | 'phone' | 'address';

// Extract 交集

type UserProps = 'name' | 'age' | 'email' | 'phone' | 'address';
type RequiredUserProps = 'name' | 'email';

type RequiredUserPropsOnly = Extract<UserProps, RequiredUserProps>;

const requiredUserPropsOnly: RequiredUserPropsOnly = 'name'; // 'name' | 'email';

// 内置工具类型中提供了 Parameters 和 ReturnType 这两个类型来提取函数的参数类型与返回值类型：
const addHandler = (x: number, y: number) => x + y;

type Add = typeof addHandler; // (x: number, y: number) => number;

type AddParams = Parameters<Add>; // [number, number] 类型
type AddResult = ReturnType<Add>; // number 类型

const addParams: AddParams = [1, 2];
const addResult: AddResult = 3;

// 使用 TypeScript 提供的类型查询操作符
// ，即 typeof（记得和 JavaScript 的 typeof 区分一下），来获得一个函数的结构化类型，


// 对于异步函数类型，提取出的返回值类型是一个 `Promise<string>` 这样的类型，
// 如果我想提取 Promise 内部的 string 类型呢？
// 贴心的 TypeScript 为你准备了 Awaited 类型用于解决这样的问题：

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

type PromiseInput = Promise<string>;
type AwaitedPromiseInput = Awaited<PromiseInput>; // string