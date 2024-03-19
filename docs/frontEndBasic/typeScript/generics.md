# 泛型

在使用函数，接口，类时，无法确定最终返回值的数据类型，可以像定义参数一样定义类型。
将类型当参数传入，最终返回实际使用的类型，使用泛型可以明确返回类型。


```ts
 function f5(arg:any) {
        return arg
    }
    let e = f5('234') //any 而不是string
//使用泛型，不同入参类型确定最终返回类型
 function f4<T>(arg:T):T {
        return arg
    }
    let q = f4<number>(123) //number
    let w = f4('qwe')  //string 通过参数的类型也可以推导出类型


 	function createArr<T>(length:number,value:T):T[] {
       let result:T[] = []
       for (let i=0;i<length;i++){
           result[i] = value;
       }
       return result
   }
   createArr(3,'t') //string[]
    createArr<number>(4,34) //手动指定类型 number[]
    createArr(4,34) //也可以不用手动，自动推导出来类型 number[]
```

## 多个类型参数

定义泛型的时候可以一次性定义多个参数

```ts
function f6<T,U>(tuple:[T,U]):[U,T] {
    return [tuple[1],tuple[0]]
}
let q = f6([3,'three']) //['three',3] [string,number]
```

## 泛型约束

由于不能明确参数是哪种类型，所以不能随便访问和操作它的属性或方法，这时候可以使用泛型约束

```ts
function f7<T>(arg:T) {
    return arg.length //TS2339: Property 'length' does not exist on type 'T'.
    //arg类型不确定，不一定包含属性length，所以编译报错了
}
//使用泛型约束 关键字 extends
function f8<T extends T[]>(arg:T):number {
    return arg.length
}

//也可定义用有length属性的接口
interface LengthProps{
    length:number
}
function f9<T extends LengthProps>(arg:T):T {
    console.log(arg.length)
    return arg
}
//如果传入的实际参数没有拥有length属性 编译还是会爆粗欧
f9(123) 
//TS2345: Argument of type 'number' is not assignable to
//parameter of type 'LengthProps'.
```

多个类型参数之间互相约束

```ts
function f10<T extends U,U>(target:T,source:U):T {
   
    for (let id in source){
        target[id] = source[id] //error source[id]不可分配给target[id]。target可以有source没有的属性
        target[id] = (<T>source)[id] //OK 所以使用(<T>source)[id] 来约束source
    }
    return target
}
let x = { a: 1, b: 2, c: 3, d: 4 };

f10(x, { b: 10, d: 20 });
```

## 泛型类型

类型本身可以被定义为拥有不明确的类型参数的泛型，并且可以接收明确类型作为入参，从而衍生出更具体的类型

```ts
function reflect<P>(param: P): P {
    return param;
}

const reflectFn: <P>(param: P) => P = reflect //ok
// 为变量reflectFn 注解了 泛型类型 并且将函数 reflect 作为值 赋给他
/*也可以吧 reflectFn 的类型注解 提取作为一个能被服用的类型别名或者接口*/
```

```ts
interface IReflectFun {
    <P>(param: P): P
}

const reflectFn2: ReflectFuntion = reflect;
const reflectFn3: IReflectFun = reflect;
/*将类型入参的定义移动到类型别名或接口名称后， 定义一个接收具体类型入参后返回一个新类型的类型就是泛型类型 */
```

```ts
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 
这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary\<string>而不只是Dictionary）。 
这样接口里的其它成员也能知道这个参数的类型了。

```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
    
```

注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

## 泛型接口

可以使用含有泛型的接口来定义函数的形状：

```ts
interface CreateArrFunc {
    <T>(length:number,value:T):T[]
}
let createArr1:CreateArrFunc
createArr1 = function<T>(lengt:number,val:T):T[] {
    let result:T[] = []
    for (let i=0;i<length;i++){
        result.push(val)
    }
    return result
}
createArr1(5,Math.random()*10) //number[]
                                
```

进一步，我们可以把泛型参数提前到接口名上

```ts
interface CreateArrFunc {
    <T>(length:number,value:T):T[]
}
let createArr2:CreateArrFunc<number>
createArr2 = function<T>(lengt:number,val:T):T[] {
    let result:T[] = []
    for (let i=0;i<length;i++){
        result.push(val)
    }
    return result
}
createArr1(5,Math.random()*10) //number[]
```

注意，此时在使用泛型接口的时候，需要定义泛型的类型。

## 泛型类

与泛型接口类似，泛型也可以用于类的类型定义中：

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
        
```

GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
        
```

与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
