// function sum(a: number, b: number): number {
//   return a + b;
// }

const sum = function(a: number, b: number) :number{
    return a+b
}

type Sum = (a: number, b: number) => number


// ` type Sum = `的语法称为类型别名，我们先不用理解它到底是个什么语法，
// 只要了解它能用来给一个类型起一个新名字，

// 在typeScript中函数没有显示return的话标注为void，但在js中是undefined
// 因为ts中如果标注undefined需要显式return在5.1版本修复了

// ts中的重载是伪重载，java才有
// 函数重载声明
function sum(base: number, incre: number): number;
function sum(baseArray: number[], incre: number): number[];
function sum(incre: number, baseArray: number[]): number[];
function sum(baseArray: number[], increArray: number[]): number[];

// 函数实现
function sum(x: number | number[], y: number | number[]): number | number[] {
  if (typeof x === 'number' && typeof y === 'number') {
    // 两个数字相加
    return x + y;
  } else if (Array.isArray(x) && typeof y === 'number') {
    // 一个数组和一个数字相加，数字加到数组的每个元素
    return x.map(item => item + y);
  } else if (typeof x === 'number' && Array.isArray(y)) {
    // 一个数字和一个数组相加，数字加到数组的每个元素
    return y.map(item => item + x);
  } else if (Array.isArray(x) && Array.isArray(y)) {
    // 两个数组对应位置相加
    return x.map((item, index) => item + (y[index] || 0)); // 防止第二个数组短于第一个数组
  } else {
    // 如果没有匹配到以上任何情况，抛出错误
    throw new Error('Invalid input types');
  }
}

// 测试用例
console.log(sum(5, 3)); // 输出 8
console.log(sum([1, 2, 3], 2)); // 输出 [3, 4, 5]
console.log(sum(3, [1, 2, 3])); // 输出 [4, 5, 6]
console.log(sum([1, 2], [3, 4])); // 输出 [4, 6]
