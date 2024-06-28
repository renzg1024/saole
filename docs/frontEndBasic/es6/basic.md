# ES6 基础

## let/const命令

### let 命令

* 块级作用域：代码块作用域内的变量不会被外层作用域访问到
* 变量声明不再提升：声明的函数和变量不再提升到作用域顶端，在调用函数时，如果该函数没有声明会报错 fun is not function
* 暂时性死区：在作用域内 使用未声明到变量会报错，存在暂时性死区，变量声明后到区域可以正常使用不报错

**在以前没有块级作用域概念的时候，隔离变量声明用的匿名立即执行函数表达式（匿名 IIFE）**

```js
{
  //匿名函数写法
  (function () {
    let tmp = ''
  })()

  //块级作用域写法
  {
    let tmp = '...'
  }
}
```

```js
const fun = () => {
  let foo = 1
}
// console.log(foo) 直接报错
```

```js
let arr = []
for (var i = 0; i < 10; i++) {
  arr[i] = i
}
console.log(i)
//i 是var 声明的 会提升作用域到顶层，所以 i 每次都会改变，循环结束后 i 值为10
{
  let arr1 = []
  for (let i = 0; i < 10; i++) {
    arr1[i] = i
  }
  console.log(i) //ReferenceError: i is not defined
}
{
  var a = [];
  for (let i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); //6
}
//i是 let命令声明的 在循环体内，每次都会重新生成i的变量值，JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，
// 就在上一轮循环的基础上进行计算。
```

```js
/**
 * for循环有特别的情况，循环语句部分可以理解为父级的作用域，循环体内部分是单独的子级作用域*/
for (let i = 0; i < 3; i++) {
  const i = 'qwe'
  console.log(i)
}
```

**不存在变量提升**

```js
{
  console.log(foo)
  let foo = 1
//ReferenceError: Cannot access 'foo' before initialization
//foo 变量没有提升，直接使用 会报错没有初始化声明
}
{
  console.log(foo)
  var foo = 1
//undefined var会让变量提升
}
```

**暂时性死区:块级作用域内存在let命令，他所声明的变量就绑定了这区域不会受到外部影响**

```js
{

  var tmp = 1
  if (true) {
    tmp = 'qwe'
    let tmp = 'abc'
  }
}
//虽然声明了tmp的全局变量，但是在 作用域里 绑定了let命令，相同变量名的 tmp，未声明就使用tmp会造成暂时性死区
// 这种语法称为“暂时性死区”（temporal dead zone，简称 TDZ）
{
// TDZ开始
  tmp = 'asd' // ReferenceError
  console.log(tmp) // ReferenceError
//实际浏览器测试中上面报错了，下面的代码也就不再执行了
  let tmp = '123'
  tmp = 345;// TDZ结束
  console.log(tmp) //345
}

{
//以下情况也会存在暂时性死区
// typeof 的使用
  typeof x; // ReferenceError
  let x;

// 函数内参数 未声明变量赋值给形参
  function f(x = b, b = 2) {
    return [x, b]
  }

  f() //报错
}
```

### const 命令

**const命令 一旦声明不可以修改变量值，其他特性与let相同**
>
> const声明变量不是变量值不能改变而是，保存的内存地址不能改变，基本类型值就保存在变量指向的那个内存地址等同于常量
> 如果是引用类型的（对象或者数组这种）那么变量保存的内存地址实际是指向这个内存地址的一个数据指针，这个指针不能随意改变就是这个固定的指针，
> 内存地址的数据可以改变的，只要指针指向的内存地址不变，const 声明的变量不会报错

```js
{
  const foo = {}
  foo.prop = 123 //不报错
  console.log(foo)

  foo = {} //如果将变量foo 指向另一个对象，内存地址变了 就会报错
}
{
  const bar = {}
  bar = ['23']//内存地址 发生变化 报错
}
```

## 字符串模板

**定义对象变量key**

```js
let a = 'name'
let b = 'age'
let obj = {}
obj[a] = 123
obj[`${b}s`] = 32
// obj.name =123
//obj.ages = 32
```
**字符串变量拼接**
```js
let c = 'hello'
let d = `${c}world`
```

## 变量解构
**解构的概念是声明变量的一种写法，从数组和对象中获取提取值，对变量进行赋值
。本质还是拆解复杂类型数据的元素和属性，获取他们的value。**
### 对象解构

### 数组解构
### 函数参数解构
