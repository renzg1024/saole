# 基础类型

**(简单基础类型)原始类型： number string boolean symbol bigint undefined null**

**复杂基础类型：数组 Array，元组 Tuple，any ,void ，unknown，never ，object**

## 布尔类型 boolean

> boolean类型的值一般有两种 true 和false

```ts
let flag:boolean = false
let isShow:boolean = '123' //2322
new Boolean //是构造函数的实力 不是 boolean类型
let isDo:boolean = new Boolean() //2322
//返回的是一个 Boolean对象
let createByBoolean:Boolean = new Boolean() //Boolean
//直接调用 Boolean()的是 boolean类型
let bool:boolean = Boolean(1) //boolean
//在ts中其他基本类型的构造函数（除了null和undefined）以外都一样
let num:number = new Number(1) //2322
let Num:Number = new Number(1) //Number
let str:string = new String('123') //2322
let Str:String = new String('123') //String
```

## 数字类型 number

> TS和JS一样，使用 number类型表示 十进制整数，浮点数，二进制数，八进制数，十六进制数

```ts
//十进制整数
let integer:number = 19
let integer1:number = Number(4)
//浮点数
let decimal:number = 3.4
/** 二进制整数 */
let binary: number = 0b1010;
/** 八进制整数 */
let octal: number = 0o744;
/** 十六进制整数 */
let hex: number = 0xf00d;
//使用较少的大整数，那么我们可以使用bigint类型来表示
let big:bigint = 100n
```

**number 和 bigint虽然都表示数字，但是二者类型不兼容**

```ts
big = integer
integer = big 
//类型检测会报2322 错误
```

```ts
let num:number = 123
let num1:number = '123' //2322
let anything:any
let num2:number = anything //可以给变量赋值anything类型变量值
let unknow: unknow
let num3:number = unknow //2322
let num4:number = null //2322
let num5:number = undefined //2322 严格模式下会报2322

let v:void
let n6:number = v //2322
let v1:void = unddefined
let v2:void = null //2322
```

## 字符串类型 string

```ts
let str:string = 'string' //字符串字面量
let str1:string = String('asd') //显式类型转换
let str11:string = String(123) //显示类型转换
let str2:string = 123 //2322 不能赋值其他类型值，除了any类型

//可以使用模版字符串，它可以定义多行文本和内嵌表达式。 
//这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let name:string = 'jack'
let age:number = 123
let str3:string = `name is:${name},age is:${age+1}`
let str4:string = 'name is:'+ name + 'age is:' + (age+1)
```

## 数组类型 array

**多种方式定义数组类型**

### 【类型+[]】表示法 
**number[]只寻允许数组元素是同一类型的**
```ts
let arr1:number[] = [1,2,3]
let arr11:number[] = ['1',3,4]  //报错
// Type 'string' is not assignable to type 'number'.
let numOfArr: number[] = [1, 2, 3, 4]
let strOfArr: string[] = ['a', 'b', 'c']
let boolOfArr: boolean[] = [true, false]
//不允许有其他类型
 let a: any[] = []
 a = [1, null, undefined, '123']
```

**数组的一些方法也会根据定义数组类型时的约定来进行限制**

```ts
let arr:number = [1,32]
arr.push('4') 
// Argument of type '"4"' is not assignable to parameter of type 'number'.
```

#### 使用数组泛型表示

**会造成与JSX的语法冲突，尽量避免使用**

```ts
let arr:Array<number> = [1,2,3]
//会造成与JSX的语法冲突，尽量避免使用
let arr2: Array<any> = []
```

#### 使用接口表示数组

```ts
interface StringArray {
    [index:number]:string
}
//StringArray 表示：只要索引的类型是数字时，那么值的类型必须是字符串。
//虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
let strOfArr:StringArray = [1,2,3] 
//TS2451: Cannot redeclare block-scoped variable 'strOfArr'.
let strOfArr1:StringArray = ['123','asd']
```

**定义指定对象成员的数组，数组元素里面是对象**

```ts
interface ArrObj{
  name:string
  age:number
}
const arr:ArrObj[] = [{name:'masr',age:23}]
```

**定义联合类型数组**

```ts
//联合类型值可以是字符串或者 是number元素类型的数组
let add:string|number[];
add = [1,2]
add = ['1','qwe',3] //不匹配 报错
add = '11231' 

// 联合类型 数组成员可以是 字符串或者数字，其他元素类型不可以
let add1:(string|number)[];
add1 = [1,'s',2]
add1 = [1,2]
add1 = ['a','b']
add1 = ['a','b',null] //报错
add1 = '1231asd'  //报错
//TS2322: Type 'string' is not assignable to type '(string | number)[]'.
```

## 元组类型Tuple

**明确限制数组元素的个数和类型，元素类型不一定相同**

```ts
//直接对元组初始化时候 需要满足元组类型定义的所有元素
let tup:[number,string]
tup = [1,'3']
tup = ['d','1] //报错，不匹配
tup = [1,'2',2] //报错
//也可以赋值其中一项
let tup1:[number,string]
tup1[1] = 'abc'

//访问一个已知元组元素索引时 会得到正确的类型 
let tup2:[string,number]
tup2[0] = 'tom'
tup2[1] = 123

tup2[0].slice(1)
tup2[1].toFixed(2)

//当添加越界元素时候，所添加的元素类型会被限制被元组中每个类型的联合类型
let tup3 = [string,number]
tup3.push(1) //ok
tup3.push('a') //ok
tup3.push(null) //error

//与联合类型数组相比较
let unionArr:(number|string|null)[] = [1,'d',null,23]
//联合类型数组与元组 相比较：
//联合类型数组不限制 元素个数和顺序
//元组在初始化的会严格限制元素的类型 和顺序
```

## any 任意值

>any是任意类型，拥有可以避过静态类型检测的特点。声明的any类型可以为其赋值任意类型。
>可以对any 类型的变量进行任何操作，比如获取可能不存在的属性，方法等，且Ts无法检测是否存在，是否正确。
>可以把任何类型的值，赋值给any类型的变量，也可以把any类型的值赋值给任何类型的变量

```ts
let anything:any = {}
anything.toFiexd(1) //ok
anything.doAnything() //ok
anything = 1 //ok
anything = 'qw' //ok
let str:string = anything //ok
let num:number = anything //ok

let numArr:number[] = anything //ok
//any类型成员的数组
let anyArr:any[] = [1,'qwe',null,undefined]
```

**any类型在对象的调用链中会进行传导，所有any类型的任意属性的类型也是any**

**声明一个变量为任意类型后，对这个变量操作的属性，方法。返回的值都是任意类型**

```
let anything:any
let c = anything.x.c //类型也是any
```

**声明 的变量如果未指定类型，那么默认会是 any 类型**

```ts
let anyth
anyth = 12
anyth = 'asd'
anyth = null 
```

**any类型与Object类型变量的区别**

**声明Object类型的变量也可以给该变量赋任意类型的值，但不能对其调用方法，即使该变量真的有此方法**

```ts
let anyth:any = 4
anhty.toFixed(2) //ok
let obj:Object = 4 //ok
obj.toFixed(2) //error
// Error: Property 'toFixed' doesn't exist on type 'Object'.
```

## unknown

**Ts3.0添加类型，用来描述不确定类型的变量。可以给unknown 类型的变量赋值任意类型的值，但是unknown类型的值只能赋值给 unknown 或any 类型的变量**

```ts
let ukn:unknown
ukn = 123 //ok
ukn = 'asd' //ok
let anyth:any = ukn //ok
let ukn1:unknown = ukn //ok
let num:number = ukn //error 2322
let str:string = ukn //error 2322
```

**Ts会对unknown类型的变量做类型检测**

**需要对unknown类型的变量做类型缩小处理（类型条件判断），该unknown类型的变量操作方法时候才不会报错**

```ts
let ukno:unknown
ukno.toFixed(2) //2571
ukno.toString() //2571
//不确定 unknown具体类型操作方法时会报错

//对unknown 类型进行变量缩小，不会提示错误
   if (typeof ukn ==='string'){
        ukn.toUpperCase() //string
    }
    if (typeof ukn ==='number'){
        ukn.toFixed(2) //number
    }
```

可以在多个 if else 条件分支下，使用unknown作为临时变量来接受不同条件下变量为类型各异的返回值。

```ts
let result: unknown;

if (x) {

  result = x();

} else if (y) {

  result = y();

}
```

## void类型

使用于表示没有返回值的函数，如果一个函数没有返回值，它的类型就是void。

## never类型

表示永远不会发生值的类型

```ts

function throwErr(msg:string):nerver{
  throw Error(msg); 
}
```

## 类型断言

清楚知道一个实体具有比他先有类型更确切的类型，类型断言来手动指定该值的类型，类型断言只在编译阶段起作用，不在运行时影响。

类型断言的两种方式

```ts
//值 as 类型

let someVal:any = 'this is a string'
let strLength:number = (someVal as string).length
let strLen1:number = someVal.length


//<类型>值
let someVal1:any = 'this is a string'
let strLength1:number = (<string>someVal1).length
```

**当你在TypeScript里使用JSX时，只有** **as** **语法断言是被允许的，类型断言能够欺骗TS编译阶段，却在运行时程序依然会出错，所以请谨慎使用类型断言**

### 类型断言的作用

**将一个联合类型断言为其中一个类型**

```ts
//TS 不确定一个联合类型的变量到底是什么类型时候，只能访问该联合类型的共有属性和方法
interface Cat {
    name: string

    run(): void
}

interface Fish {
    name: string

    swim(): void
}

function getName(animal: Cat | Fish) {
    return animal.name
}
```

如果确实需要访问其中一个类型的方法或者属性的时候

```ts
function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true
    }
    return false
}
//TS2339: Property 'swim' does not exist on type 'Cat | Fish'.  
//Property 'swim' does not exist on type 'Cat'.

//不确定animal的类型是Cat 还是Fish 所以想要直接访问Fish的swim方法会报错
//这时候可以使用类型断言，将animal的断言成为Fish,在编译阶段 如果animal的类型是 Fish即拥有swim方法 那么不会报错
//如果animal的类型不是Fish，没有swim方法，程序执行时候依然会报错
```

```ts
function isFish1(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true
    }
    return fasle
}

{
    let arr: number[] = [1, 2, 3, 4, 5]
    let _item: number = arr.find(num => num > 2)
    let _item1:number = arr.find(num=>num>2) as number //值 as 类型
  //arr.find(num=>num>2) 返回值有可能是undefined 或者number 不确定返回类型，
  //断言为numbe类型，编译阶段不会报错。 
}
```

```ts
interface Cat {
    name:string
    run():void
}

interface Fish {
    name:string
    swim():string
}

function swim(animal:Cat|Fish) {
    (animal as Fish).swim()
}

const tom:Cat = {
    name:'Tom',
    run(){console.log('run')}
}

swim(tom)
//编译不会报错，运行时候会报错，(animal as Fish).swim()隐藏了 animal有可能成为 Cat
```

**将一个父类断言为更加具体的子类**

```ts
class ApiError extends Error{
    code:number = 0;
}
function isApiError(error:Error) {
    if (typeof (error as ApiError).code === 'number'){
        return true
    }
    return false
}
```

**将任何一个类型断言为any**

```ts
//当引用一个此类型上不存在的属性和方法的时候，会报错
{
    let num:number =1
    num.length = 1
}
//number类型不存在 length属性

//有时候确定代码不会报错，可以将类型断言为any
window.foo = 1 //ts 编译检测 window 不存在foo 会报错提示
(window as any).foo =1 //断言为any类型，any类型的变量访问任何属性和方法都是允许的
```

**将any类型断言为一个具体的类型**

```ts
//将any断言为一个具体类型 ，在处理 any 类型的变量中，比如第三方库未能定义好自己的类型，或者别人遗留的代码未能确定类型
// 可以通过类型断言 把any类型 断言为精确的类型 提高代码的可维护性

//方法返回值是any，可以在调用它之后将返回值断言成一个精确的类型，方便后续的操作
function getCacheData(key:string):any {
    return (window as any).cache[key]
}

interface Cat {
    name:string
    run():void
}
{
    let tom = getCacheData('Tom') as Cat
    tom.run()
}
```

### 类型断言的限制

-   联合类型可以被断言为其中一个类型
-   父类可以被断言为一个子类
-   任何类型都可以被断言为any
-   any可以被断言为任何类型
-   *A 兼容 B ，则 A可以被断言为B，B也可以被断言为 A*

```ts
//Animal和Cat 都有name属性，Animal没有run()方法， 所以 Animal 兼容了 Cat
{
    interface Animal {
        name:string
    }
    interface Cat {name:string
        run():void
    }
    function testCat(animal:Cat) {
        return (animal as Animal)
    }
    function testAnimal(animal:Animal) {
        return (animal as Cat)
    }
}
```

### 双重断言

*任何类型可以被断言为any*

*any可以被断言为任何类型*

*可以使用 as any as 类型 将任何一个类型断言为另一个任何类型*

```ts
interface Cat {
    run():void
}
interface Fish {
    swim():void
}

function testCat(cat:Cat) {
    return (cat as any as Fish);
}
//双重断言容易出错，迫不得已千万不用
```

### 类型断言 vs 类型转换

类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：

```ts
function toBoolean(something: any): boolean {
    return something as boolean;
}

toBoolean(1);
// 返回值为 1

//代码在编译后会变成
function toBoolean(something) {
    return something;
}

toBoolean(1);
// 返回值为 1
```

所以类型断言不是类型转换，它不会真的影响到变量的类型。

若要进行类型转换，需要直接调用类型转换的方法：

```ts
function toBoolean(something: any): boolean {
    return Boolean(something);
}

toBoolean(1);
// 返回值为 true
```

### 类型断言 vs 类型声明/泛型

```ts
function getCacheData(key:string):any {
    return (window as any).cache[key]
}

interface Cat {
    name:string
    run():void
}
//类型断言
let tom = getCacheData('tom') as Cat
tom.run()

//类型声明
let tom1:Cat = getCacheData('tom')

//泛型

function getCacheData<T>(key:string):T {
    return (window as any).cache[key]
}
let tom3 = getCacheData<Cat>('tom')
//更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决
```

## 类型推论

变量如果没有明确指出类型，TS会根据类型推论的规则推断出一个类型

```ts
let num = 3
//这种推断发生在初始化变量和成员，函数默认参数，和函数决定返回值的时候
```

```ts
let str = 'string'
str = 7 //2322
//实际等价于
let str1:string = 'string'
str = 7

//变量如果声明了没有赋值，会默认推论为any 类型
let num
num = 'str'
num = 7 //不会报错
```

## 函数类型

### 函数声明

```ts
//函数声明
function f3(x,y) {
    return x+y
}
//函数表达式，函数字面量声明
const f4 = (x,y)=>{
    return x+y
}
const f5 = function (x,y) {
    return x+y
}
```

一个函数有输入（参数）和输出（返回值），Ts需要把参数和返回值都要考虑到

```ts
function f6(x:number,y:number):number {
    return x+y; //number
}
```

实际参数多余或者少于形参都会报错提示

```ts
function f7(x:number,y:number):number {
    return x+y;
}
f7(1,2,3) //error
f7(1) //error
```

### 函数表达式

```ts
const f4 = (x,y)=>{
    return x+y
}
const f5 = function (x,y) {
    return x+y
}
//一个函数有输入（参数）和输出（返回值），Ts需要把参数和返回值都要考虑到
function f6(x:number,y:number):number {
    return x+y; //number
}

//实际参数多余或者少于形参都会报错提示
function f7(x:number,y:number):number {
    return x+y;
}
f7(1,2,3) //error
f7(1) //error

//函数表达式
let sum = function (x:number,y:number):number {
    return x+y
}
//以上代码只是对等号右侧对匿名函数做了类型定义，等号左边对变量是通过类型推论而推断出来对类型
//如果需要手动给等号左边对变量进行类型定义
let sum1:(x:number,y:number)=>number = (x:number,y:number)=>{
    return x+y;
}
//Ts的箭头函数 区别于 ES6的箭头函数，TS的=>表示函数的定义，左边是输入类型，右边是输出类型
```

### 使用接口定义函数

采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}

let search1: SearchFunc = function (a, b) {
    return a.search(b) === 1
}
```

### 可选参数

有时候参数不是必传项，利用?表示可选的参数

```ts
function f8(f:string,l?:string) {
    if (l){
        return f+l;
    }
    else{
        return f
    }
}
let funk = f8('f','l')
let funl = f8('f')
```

**可选参数后面不允许再出现必选参数**

### 参数默认值

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

在 ES6 中，我们允许给函数的参数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数**：

此时就不受「可选参数必须接在必需参数后面」的限制了：

```ts
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```

### 剩余参数

可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

```ts
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);
```

事实上，items 是一个数组。所以我们可以用数组的类型来定义它：

```ts
function push(arr:any[],...items:any[]){
  items.forEach(item=>{
    arr.push(item)
  })
}
let a = []
push(a,1,2,3,4)
```

**注意，rest 参数只能是最后一个参数**

### 函数this

Js里 ，this的值在函数被调用的时候才能确定，需要搞清楚 函数调用的上下文  
尤其在是返回一个函数或者将函数当作参数调用的时候。

```ts
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCradPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cradPicker = deck.createCradPicker();
let pickedCrad = cradPicker(); //调用了返回的函数， 已经是独立的函数，
// 此时里面this指向了window而不是deck对象了，在严格模式下，this此时为 undefined而不是window
alert('card' + pickedCrad.card + 'of' + pickedCrad.suit);
//执行程序会报错 顶级的非方法式调用会将this视为window
```

为了解决该问题，可以在函数被返回时候绑定好正确的this,后面无论怎么使用它，都会引用绑定好的'deck'  
对象，ES6箭头函数能保存函数创建时候的this的值，而不是调用的值

```ts
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCradPicker: function () {
        //箭头函数 可以在这个返回函数创建时候 保存this的值，此时为deck
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
```

更好事情是，TypeScript会警告你犯了一个错误，如果你给编译器设置了--noImplicitThis标记。  
它会指出 this.suits[pickedSuit]里的this的类型为any。

this.suits[pickedSuit]的类型依旧为any。 这是因为 this来自对象字面量里的函数表达式。  
修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面：

```ts
function f9(this) { //TS7006: Parameter 'this' implicitly has an 'any' type.
    //this 的类型是any 发出警告
}

function f10(this: void) { //提供一个显式的 this参数 假的参数

}
```

增加接口类型，类型重用变得清晰简单

```ts
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    card: number[];
    createCradPicker(this: Deck): () => Card
}

let deck:Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCradPicker: function (this:Deck) {
        //箭头函数 可以在这个返回函数创建时候 保存this的值，此时为deck
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
/*现在TypeScript知道createCardPicker期望在某个Deck对象上调用。
也就是说 this是Deck类型的，而非any，因此--noImplicitThis不会报错了。*/
```

this 在函数被调用时候才能确定值，指向谁

箭头函数在函数创建时候可以保存this，调用时候不改变this初始的引用对象

this 使用后或者当参数 是any 类型，可以指定一个假参数void,或者明确调用的类型，接口类型

### *this* *参数在回调函数里*

你可以也看到过在回调函数里的this报错，当你将一个函数传递到某个库函数里稍后会被调用时。 因为当回调被调用的时候，它们会被当成一个普通函数调用， this将为undefined。 稍做改动，你就可以通过 this参数来避免错误。 首先，库函数的作者要指定 this的类型：

```ts
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
```

this: void means that addClickListener expects onclick to be a function that does not require a this type. Second, annotate your calling code with this:

```ts
class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.message;
    }
}
let h = new Handler();
uiElement.addClickListener(h.onClickBad); // error!
```

指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 然后TypeScript会检测到 addClickListener要求函数带有this: void。 改变 this类型来修复这个错误：

```ts
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}
let h = new Handler();
uiElement.addClickListener(h.onClickGood);
```

因为onClickGood指定了this类型为void，因此传递addClickListener是合法的。 当然了，这也意味着不能使用 this.info. 如果你两者都想要，你不得不使用箭头函数了：

```ts
class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}
```

这是可行的因为箭头函数不会捕获this，所以你总是可以把它们传给期望this: void的函数。 缺点是每个 Handler对象都会创建一个箭头函数。 另一方面，方法只会被创建一次，添加到 Handler的原型链上。 它们在不同 Handler对象间是共享的。

### 函数重载

Js是动态的语言，函数里根据传入不同类型的参数而返回不同类型的数据很常见

Ts定义了重载来为函数提供返回不同类型的数据

```ts
//函数reverse 反转 传入 number 123 输出 number 321，传入 'hello' 输出 'olleh'
function reverse(x:number|string):number|string|void {
    if (typeof x ==='number'){
        return  Number(x.toString().split('').reverse().join(''))
    }
    else if (typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}
let a = reverse(231) //a 类型为 number|string|void
//需要将输出的类型准确的
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string|void {
    if (typeof x ==='number'){
        return  Number(x.toString().split('').reverse().join(''))
    }
    else if (typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}
```

重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现

**注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。**

## 对象-接口类型

### 接类型口描述对象
接口类型可以对类的一部分进行抽象，也可以描述对象的形状，接口首字母一般要大写。

```ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

接口的形状 和变量要保持一致，多属性和少属性都会报错

```ts
interface IPerson {
  name:string;
  age?:number;
}

let tom:IPerson = {
  name:'tom',
  age:12,
  gener:'male'
}
```

可选属性 ，可以存在也可以缺省

```ts
interface IPer{
  name:string;
  age?:number;
}

let suoni:IPer ={
  name:'suoni'
}
```

只读属性，属性初始化一个值后，不能再次赋值修改该属性

```ts
interface IPer{
  readonly id:string;
  name:'suoni'
  age?:number
}

let tony:IPer ={
  id:'string',
  name:'suoni',
  age:12
}

tony.id = '123' //error
```

任意属性 ，确定属性和可选属性的必须是任意属性的子集 ，或者任意属性是他们的联合类型

```ts
interface IPer{
    name:string
    age?:number
    [propsName:string]:string
}

let tony:IPer = {
    name:'tony',
    age:12,
    gender:'male'
}

//TS2322: Type '{ name: string; age: number; gerner: string; }' is not assignable to type 'IPer'.
//Property 'age' is incompatible with index signature.
//Type 'number' is not assignable to type 'string'.
// 任意属性 gender 是字符串类型 number 不是他的子集 所以报错

//可以定义为any类型
interface IPer{
    name:string
    age?:number
    [propsName:string]:any
}
//或者确定属性和可选的属性的联合类型
interface IPer{
    name:string
    age?:number
    [propsName:string]:string|number
}

let tony1:IPer = {
    name:'tony',
    age:12,
    gerner:'male'
}
```

**只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**

```ts
let tony :IPer = {
    id:'123',
    name:'tony'
}

tony.id = '3453' 
//TS2540: Cannot assign to 'id' because it is a read-only property.
//再次赋值修改了ID 属性 报错

let tony1 :IPer = {
    name:'tony',
    age:12
}
//TS2741: Property 'id' is missing in type '{ name: string; age: number; }'
//but required in type 'IPer'.
//没有给ID属性初始化值
```

### 接口类型描述函数

```ts
interface SearchFun {
    (source:string,substring:string):boolean
}

let mySearch123:SearchFun;
mySearch123 = function (source:string,substring:string) {
    return source.search(substring) !== -1;
}
```

## 枚举类型
### 定义声明

枚举类型适合-描述一组映射常量值

声明枚举 使用 enum 关键字

访问枚举成员 Color.Key=== 0 , 反响映射 Color[0] === 'Key'

```ts
enum Color {
  Red,Blue,Green
}
```

枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

所有成员的类型都是枚举变量的子类型

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

### 数字枚举

成员值为数字，类型为数字字面量

未使用初始化生成器（手动赋值），枚举成员 从0 开始，后面的成员 +1递增

```ts
    enum Day {
        SUNDAY, //=0
        MONDAY, //=1
        TUSEDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY
    }
```

手动赋值后，后面的成员值+1递增

```ts
//成员值递增
enum Day1 {
    SUNDAY = 4,
    MONDAY = 7,
    TUESDAY, //=8
    WEDNESDAY = 10,
    THURSDAY, //=11
    FRIDAY,
    SATURDAY
}
```

如果定义了成员是小数或者负数，后面的成员依然+1递增

```ts
enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1.5); // true
console.log(Days["Tue"] === 2.5); // true
console.log(Days["Sat"] === 6.5); // true
```

手动赋值的成员可能会与后面递增的成员值相等，Ts 不会报错，后者会覆盖前者

```ts
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true

//上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，
//但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，
//而后又被 "Wed" 覆盖了。编译的结果是
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

两个数字枚举结构一样，仍然不是恒等，所有的枚举类型都只兼容自身

```ts
enum Day {
    SUNDAY,
    ...
}

enum MyDay {
    SUNDAY,
    ...
}
Day.SUNDAY === MyDay.SUNDAY; // ts(2367) 两个枚举值恒不相等

work(MyDay.SUNDAY); // ts(2345) 'MyDay.SUNDAY' 不能赋予 'Day'
function work(d: Day) {
    switch (d) {
        case Day.SUNDAY:
        case Day.SATURDAY:
            return 'take a rest';
        case Day.MONDAY:
        case Day.TUESDAY:
        case Day.WEDNESDAY:
        case Day.THURSDAY:
        case Day.FRIDAY:
            return 'work hard';
    }
}
```

```ts
//枚举类型  商品订单状态
enum OrderStatue {
        all,
        unpay,
        unsend,
        sended,
        complete
    }

    function showOrderStatus(status: OrderStatue) {
        switch (status) {
            case OrderStatue.all:
                console.log('all')
                break;
            case OrderStatue.unpay:
                console.log('unpay')
                break;
            case OrderStatue.unsend:
                console.log('unsend')
                break;
            case OrderStatue.sended:
                console.log('sended')
                break;
            case OrderStatue.complete:
                console.log('complete')
                break;
            default:
                console.log('default')
                break;
        }
    }

    showOrderStatus(OrderStatue.all)
    showOrderStatus(1)
    showOrderStatus(14)
```

### 字符串枚举

成员必须是字符串字面量

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

如果前面成员手动赋值，后面的成员没有赋值会报错，字符串枚举不能再+1递增

```ts
enum Color {
    reg ,
    green='green',
    blue //TS1061: Enum member must have initializer.
}
//blue 无法+1 递增 没有初始值就报错提示 
```

### 异构枚举

数字和字符串混合的枚举类型，很少用到

```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

### 常量成员和计算值成员

枚举成员的值分两种行为获得，常量成员 和计算值所得成员

```ts
enum Color {Red, Green, Blue = "blue".length};
//计算值所得成员
```

下面是常数项和计算所得项的完整定义

当满足以下条件时，枚举成员被当作是常数：

-   不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。
-   枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：

<!---->

-   -   数字字面量
-   引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
-   带括号的常数枚举表达式
-   +, -, ~ 一元运算符应用于常数枚举表达式
-   +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错

所有其它情况的枚举成员被当作是需要计算得出的值。

### 常数枚举

常数枚举是使用 const enum 定义的枚举类型：

```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

上例的编译结果是：

```ts
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```

假如包含了计算成员，则会在编译阶段报错：

```ts
const enum Color {Red, Green, Blue = "blue".length};

// index.ts(1,38): error TS2474: In 'const' enum declarations member initializer
//must be constant expression.
```

### 外部枚举

外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

```ts
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

上例的编译结果是：

```ts
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

外部枚举与声明语句一样，常出现在声明文件中。

同时使用 declare 和 const 也是可以的：

```ts
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

编译结果：

```ts
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```





