// TypeScript 的本质，是在对类型进行编程
// 上一节课学到类型别名充当变量
// type Status = 'success' | 'failure' | 'pending'
// 类型别名充当函数，并且添加一个入参，就是泛型

type Status<T> = 'success' | 'failure' | 'pending' | T

type CompleteStatus = Status<'offline'>

// function factory(input: string | number): string | number{

// }
// 这种写法无法准确描述出参和入参完全一致的

function factory<T>(input: T): T{
    return input
}

// <T>声明了泛型，后面的就是普通的类型标注了
factory([1,2,3])  
// 自动推到T是number[]