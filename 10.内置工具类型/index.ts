// 学习一门语言，语法，内置对象，内置方法

// 这一节学习的是ts内置，用于对类型进行变成的工具方法--工具类型

type A = Partial<{}>

// Partial接收一个对象，将所有属性标记为可选

type User = {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>

const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

// 可以不实现全部的属性了！
const partialUser: PartialUser = {
  name: 'John Doe',
  age: 30
};


type RequiredUser = Required<User>
// 将所有属性标记为必选


type ReadonlyUser = Readonly<User>;
// 将所有属性标记为只读