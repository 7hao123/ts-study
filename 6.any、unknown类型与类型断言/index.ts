// any表示任何类型，相当于回到js了，告诉类型系统放弃类型检查

// any类型 = 万能类型 + 放弃类型检查

// 由于any比较危险，提供类似的家伙：unknown

// function myFunc(param: unknown) {
//   // ...
// }

// myFunc({});
// myFunc([]);
// myFunc(true);

function myFunc(param: unknown) {
  param.forEach((element) => {}); // X “param”的类型为“未知”。
}

// 在我们使用一个unknown类型的变量的时候，类型检查系统报错，需要我们指定一个类型，那我们怎么解决呢
// 这下就需要使用类型断言了，我们告诉ts这个变量看起来是一个xx类型

function myFunc(param: unknown){
    (param as unknown[]).forEach((element)=>{
        element = element + 1;
    })
}

// 后面我们需要对数组操作，希望element是数字类型，因此完善成下

function myFunc(param: unknown) {
  (param as number[]).forEach((element) => {
    element = element + 1;
  });
}

function myFunc(param: unknown) {
  (param as unknown[]).forEach((element) => {
    element = (element as number) + 1;
  });
}

// 上面我们了解的是初始提供 any / unknown 类型，然后通过类型断言将其断言到预期类型的操作。
// 实际上，还有一个更常见的场景是将一个拥有具体类型的变量断言到 any / unknown 类型：
const str: string = "linbudu";

(str as any).handler().result.prop; // ...
// 为什么我们需要这么做？因为很多时候，你面临的项目中并不会是完全没有类型定义的，这些变量可能最开始也是被维护者精心设计了类型的，但随着项目的不断迭代和维护者的更替，它们才日渐年久失修，导致你在使用这些变量时需要面对大量的类型报错。所以这个时候我们就可以请出类型断言，先将其断言到一个万能类型，然后就重复我们上面学习的，随着一步步调用不断完善类型，然后最后回头补全的过程。

// 另外一个常见的场景是，某些时候 TypeScript 的类型分析会显得不那么符合直觉，比如这个例子：

interface IUser {
  name: string;
  job?: IJob;
}

interface IJob {
  title: string;
}

const user: IUser = {
  name: 'foo',
  job: {
    title: 'bar',
  },
};

const { name, job = {} as IJob } = user;

const { title } = job; // 类型“{}”上不存在属性“title”。赋值{}ts会认为job是一个空对象
console.log(title)