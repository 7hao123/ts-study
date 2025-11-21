// class Person {
//   name;
//   age;

//   constructor(personName: string, personAge: number) {
//     this.name = personName;
//     this.age = personAge;
//   }

//   getDesc(): string {
//     return `${this.name} at ${this.age} years old`;
//   }
// }

// const person1 = new Person("Linbudu", 18);
// const person2 = new Person("Charles", 20);

class Person {
  private name: string;
  private age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }

  public getDesc(): string {
    return `${this.name} at ${this.age} years old`;
  }

  public getName(): string {
    return this.name;
  }

  public getUpperCaseName(): string {
    return this.name.toLocaleUpperCase();
  }
}

const person = new Person('Linbudu', 18);

// ts中有private私有变量关键字

console.log(person.name); // 属性“name”为私有属性，只能在类“Person”中访问。
console.log(person.getName()); // Linbudu
console.log(person.getUpperCaseName()); // LINBUDU


// 之前在Class里面用public/private修饰的属性与方法称为“实例成员”，
// static关键字修饰的是‘静态成员’，可以在类上面直接访问
// 很常见的场景是util里面的工具函数，分不同的类

export class DateUtils {
  static isSameDate(){ }
  static diffDate(){ }
}

export class NumberUtils { }
export class UserListUtils { }
// ...

// 类似的，如图片地址、配置信息这样的常量，也可以使用 Class + 静态成员来定义。
// public/private是ts独有的，static js也有