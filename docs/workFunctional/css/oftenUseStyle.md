## 文本溢出

**css开发经常需要处理文本溢出，在此之前可以先学习几个css属性，方便我们更好掌握处理溢出的技巧。**

### 常用属性
#### overflow 
CSS 属性 word-break 指定了怎样在单词内断行。
```css
 .box{
    width: 200px;
    height: 200px;
    overflow:visible; /*默认值，显示内容*/
    overflow:hidden; /*隐藏多余内容*/
    overflow:scroll; /*显示滚动条*/
    overflow:auto; /*自动滚动，空间足够不显示滚动条*/
    overflow-y:auto; /*纵向滚动*/
    overflow-x:auto; /*横向滚动*/
}
```
#### word-break 属性
```css
.box{
  word-break: normal;/*使用默认的断行规则。*/
  word-break: break-all;/*对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。*/
  word-break: keep-all;/*CJK 文本不断行。Non-CJK 文本表现同 normal。*/
  word-break: break-word; /* deprecated */
  
}
```
#### overflow-wrap
CSS 属性 overflow-wrap 应用于行级元素，用来设置浏览器是否应该在一个本来不能断开的字符串中插入换行符，以防止文本溢出其行向盒。
>备注： 与 `word-break` 相比，`overflow-wrap` 仅在无法将整个单词放在一行而不会溢出的情况下才会产生换行。
```css
.box{
  /* 关键词值 */
  overflow-wrap: normal;/*行只能在正常的单词断点（例如两个单词之间的空格）处换行。*/
  overflow-wrap: break-word;/*与 anywhere 值相同，如果行中没有其他可接受的断点，则允许在任意点将通常不可断的单词换行，但在计算最小内容内在大小时不考虑断字引入的软换行机会。*/
  overflow-wrap: anywhere;/*为防止溢出，如果行中没有其他可接受的断点，则不可断的字符串（如长词或 URL）可能会在任何时候换行。在断点处不会插入连字符。在计算最小内容内在大小时，会考虑由单词换行引入的软换行机会。*/
  
}
```

#### text-overflow
text-overflow CSS 属性用于确定如何提示用户存在隐藏的溢出内容。其形式可以是裁剪、显示一个省略号（“…”）或显示一个自定义字符串。
```css
.box{
  text-overflow: clip;/*默认值。这个关键字会在内容区域的极限处截断文本，因此可能会在单词的中间发生截断。*/
  text-overflow: ellipsis /*这个关键字会用一个省略号来表示被截断的文本。*/;
  text-overflow: ellipsis ellipsis;/*如果赋两个值，第一个值指定行左端溢出行为，第二个值指定行右端溢出行为。*/
  
}
```
#### white-space
CSS white-space 属性用于设置如何处理元素内的空白字符。
```css
/* 单个关键字值 */
white-space: normal;/*连续的空白符会被合并。源码中的换行符会被当作空白符来处理。并根据填充行框盒子的需要来换行。*/
white-space: nowrap;/*和 normal 一样合并空白符，但阻止源码中的文本换行。*/
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

```
#### word-wrap
word-wrap属性允许长的内容可以自动换行。

```css
word-wrap: normal;/*只在允许的断字点换行（浏览器保持默认处理）。*/
word-wrap: break-word;/*在长单词或 URL 地址内部进行换行。*/
```

### 文字超出部分显示省略号
单行文字的文字显示忽略号（块级元素宽度固定）
#### 单行文本显示省略号 
```css
 p{   
   width:200px;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
}
```
#### 多行文本显示省略号
```css
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### 中英文自动换行
```css
p{
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
}
/*不换行*/
.wrap {
  white-space:nowrap;
}
/*自动换行*/
.wrap {
  word-wrap: break-word;
  word-break: normal;
}
/*强制换行*/
.wrap {
  word-break:break-all;
}
```
### 为文字添加阴影
text-shadow 为文字添加阴影。可以为文字与 decoration 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 X 和 Y 方向的偏移量、模糊半径和颜色值组成。

这个属性同时适用于 ::first-line 以及 ::first-letter 伪元素。
```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/*多重阴影*/
.white-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    "Bitstream Charter",
    "URW Bookman L",
    "Century Schoolbook L",
    serif;
}
```
### 设置inpput元素的placeholder的字体样式
```css
input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: red;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: red;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: red;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: red;
}
```

### 解决IOS页面跳卡顿
```css
div{
  -webkit-overflow-scrolling: touch;
}
```
### 实现隐藏滚动条同时又可以滚动
```css
.demo::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.demo {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
```
### CSS三角形
#### 普通实体三角形
```css
div {
  width: 0;
  height: 0;
  border-width: 0 40px 40px;
  border-style: solid;
  border-color: transparent transparent red;
}
```
#### 带边框三角形
```css
#blue {
  position:relative;
  width: 0;
  height: 0;
  border-width: 0 40px 40px;
  border-style: solid;
  border-color: transparent transparent blue;
}
#blue:after {
  content: "";
  position: absolute;
  top: 1px;
  left: -38px;
  border-width: 0 38px 38px;
  border-style: solid;
  border-color: transparent transparent yellow;
}
```
#### 空心三角形
```css
   /*实心右箭头*/
  .to_solid_right {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent #000;
  }
  /*实心左箭头*/
  .to_solid_left {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent #000 transparent transparent;
  }
  /*实心上箭头*/
  .to_solid_top {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 20px 10px;
    border-color: transparent transparent #000 transparent;
  }
  /*实心下箭头*/
  .to_solid_botton {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 10px 0 10px;
    border-color: #000 transparent transparent transparent;
  }
  /*空心下箭头*/
  .to_botton {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
  }
  /*空心上箭头*/
  .to_top {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top: 1px solid #000;
    border-left: 1px solid #000;
  }
  /*空心右箭头*/
  .to_right {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-right: 1px solid #000;
    border-top: 1px solid #000;
  }
  /*空心左箭头*/
  .to_left {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
```
### 页面动画出现问题
在 Chrome 和 Safari 中，当我们使用 CSS 转换或者动画时可能会有页面闪烁的效果，下面的代码可以修复此情况：
```css
.cube {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
   -webkit-perspective: 1000;
  perspective: 1000;
  /* Other transform properties here */
}
```
在webkit内核的浏览器中，另一个行之有效的方法是
```css
.cube {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);  /* Other transform properties here */
}
```

### 识别字符串里的'\n'并换行
```css
body {
  white-space: pre-line;
}
```
### 修改input插入光标的颜色
```css
input{
  color:  #fff;
  caret-color: red;
}
```
### 解决1px边框变粗的问题
Ps：出现1px变粗的原因，比如在2倍屏时1px的像素对应2个物理像素。
```css
.dom{
  height: 1px;
  background: #dbdbdb;
  transform:scaleY(0.5);
}
```

### 通过彩色图标变灰
一张彩色的图片实现了，移出变灰的效果。
```css
.icon{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
.icon:hover{
  filter: none;
  -webkit-filter: grayscale(0%);
}
```
### 行内标签元素出现空白问题
```css
/*方式一：父级font-size设置为0*/
.father{ font-size:0;}

/*方式二：父元素上设置word-spacing的有合适的值*/
.father{   word-spacing:-2px}
```
### 解决vertical-align属性不生效
在使用vertical-align:middle实现垂直居中的时候，经常会发现不生效的情况。
作用环境：父元素设置line-height。需要和高度一致。将显示属性设置为表格单元，将块元素转化为单元格。
作用对象：子元素中的inline-block和inline元素。
```html
<div class="box">  <img src=".\test.jpg"/>
<span>内部文字</span></div>

<style>
.box{
  width:300px;
  line-height: 300px;
  font-size: 16px;
}
.box img{
  width: 30px;
  height:30px;
  vertical-align:middle;
}
.box span{
  vertical-align:middle;
}
</style>
```
Ps：垂直对齐不可继承，必须对子元素单独设置。同时需要注意的是线高的高度基于字体大小（即字体的高度），如果文字要转行会出现异常哦。
