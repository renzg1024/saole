# demo

```css
a[title]{
  /*匹配 a 标签带有属性为 title 的元素*/
}

a[href="https://example.com"]{
  /*匹配 a 标签带有属性为 title 且value="https://example.com" 的元素*/
}

div[class="item"]{
  /*匹配 div 标签带有属性为 class 且value="item" 的元素*/
}

p[class~="special"]{
  /* <p class="special item"></p>
   匹配带有一个名为attr的属性的元素，其值正为value，或者匹配带有一个attr属性的元素，其值有一个或者更多，至少有一个和value匹配。
    注意，在一列中的好几个值，是用空格隔开的。
   */
}
```
> li[class="a"] li[class~="a"]
```html
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
    <li class="a">Item 2</li>
    <li class="a b">Item 3</li>
    <li class="ab">Item 4</li>
</ul>
```
```css
li[class] {
font-size: 200%;
}

li[class="a"] {
background-color: yellow;
}

li[class~="a"] {
color: red;
}
```


> li[class^="a"] li[class$="a"] li[class*="a"]

```html
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>
```

```css
li[class^="a"] {
  font-size: 200%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

## calc() 运算函数

css 一个特殊的函数，满足于 css 属性值 的基本数学运算 ，加减乘除 都可以。

```css
.main {
  /* 盒子的高度是100vh-80px */
  height: calc(100vh - 80px);
}

.cont{
  height: calc(100% - 50px) /*这里的100% 是父元素的高度*/
}
```

calc()函数的值，只能作为 属性里面的值使用

```css
.el {
  font-size: calc(3vw + 2px);
  width:     calc(100% - 20px);
  height:    calc(100vh - 20px);
  padding:   calc(1vw + 5px);
}

.el {
  margin: 10px calc(2vw + 5px);
  border-radius: 15px calc(15px / 3) 4px 2px;
  transition: transform calc(1s - 120ms);
}

.el {
  background: #1E88E5 linear-gradient(
    to bottom,
    #1E88E5,
    #1E88E5 calc(50% - 10px),
    #3949AB calc(50% + 10px),
    #3949AB
  );
}
```

calc() 可以将不同的单位混合在一起 .

```
width: calc(100% - 20px);
```

calc() 中可以使用加减乘除 , 但他们在使用方法上有所不同。  
**加法(+)和减法(-)要求这两个数都是长度**

```css
.el {
  /* 有效 */
  margin: calc(10px + 10px);

   /* 无效的 */
  margin: calc(10px + 5);
}
```

**除法(/)要求第二个数字是无单位的**

```css
.el {
  /* 有效的 */
  margin: calc(30px / 3);

  /* 无效的 */
  margin: calc(30px / 10px);

  /* 无效的 (不能除以0) */
  margin: calc(30px / 0);
}
```
