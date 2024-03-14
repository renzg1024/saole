# mark down语法笔记

## 标题写法

```md
# 一级标题
## 二级
### 三级
#### 四级
##### 五级
#### 六级 
最高六级
```

## 列表

```md
1. 有序列表
2. 有序列表
3. 有序列表
```
> 1. 有序列表
> 2. 有序列表
> 3. 有序列表
```md
* 无序列表
* 无序列表
* 无序列表
```
> * 无序列表
> * 无序列表
> * 无序列表

## 区块引用

```md
> 区块引用
> 
> 区块引用
> 
> 区块引用 区块引用
```
> 区块引用
> 
> 区块引用
> 
> 区块引用 区块引用

```md
> 层级引用
> 层级引用
>> 层级引用
>>> 层级引用
```
> 层级引用
> 层级引用
>> 层级引用
>>> 层级引用

```md
> 区块+列表
> * 无序列表
> * 无序列表
> * 无序列表
```
> 区块+列表
> * 无序列表
> * 无序列表
> * 无序列表

```md
> 区块+代码
> ```js
> const localforage = import('localforage').then(async (localforage) => {
> // workaround for https://github.com/localForage/localForage/issues/1038
> if (typeof window === 'object') await localforage.default.ready();
> return localforage.default;
> });
> \```(\ 为转义)
```

> 区块+代码
> ```js
> const localforage = import('localforage').then(async (localforage) => {
> // workaround for https://github.com/localForage/localForage/issues/1038
> if (typeof window === 'object') await localforage.default.ready();
> return localforage.default;
> });
> ```


## 分割线
使用 `***`或者`___`表示
```
***
* * * 间隔也可以
___
_ _ _ 
```
***
---


## 链接

### 行内式
```md
这是[百度](www.baidu.com)的网站
```
这是[百度](www.baidu.com)的网站

### 链接列表
```md
* [这是淘宝](www.taobao.com)
* [这是天猫](www.tianmao.com)
```
* [这是淘宝](www.taobao.com)
* [这是天猫](www.tianmao.com)

### 链接携带 title
`[有title的链接](http://www.baidu.com "主页")`

[有title的链接](http://www.baidu.com "主页")

### 参数式链接
```md
[baidu]: http://www.baidu.com
[taobao]: http://www.taobao.com
[支持中文]: http://www.taobao.com
这是[baidu]，这是[taobao]，这是 [支持中文]
```
[baidu]: http://www.baidu.com
[taobao]: http://www.taobao.com
[支持中文]: http://www.taobao.com
这是[baidu]，这是[taobao]，这是 [支持中文]


## 图片

### 常规图片
```md
alt="我是图片"

![我是图片](https://tojoyshop.com/images/firework.png)
```

![我是图片](../../public/icons/chatgpt.png)

```md
图说明为空 alt=" "
 
![](https://tojoyshop.com/images/icon-close.png)
```

![](../../public/ninja_turtles.png)

### 参数式图片

```md
[参数式图片]:https://tojoyshop.com/images/home.png

这是小图标![参数式图片]
```
[参数式图片]:../../public/ninja_turtles60px.png
这是小图标![参数式图片]

## 代码框

### 单行代码框
使用 \` \`闭合代码
>
> \` import instance from '@/untils/interceptor'; \`
>

`import instance from '@/untils/interceptor';`

### 多行代码框
使用 \``` \```闭合代码
>
> \```
> export const queryUserPermissions = () => {
> return post<TMenu[], any>(`/system/sysMenu/admin/userMenuTree`, {});
> };
> \```
>

```
export const queryUserPermissions = () => {
  return post<TMenu[], any>(`/system/sysMenu/admin/userMenuTree`, {});
};
```


## 强调
一个星号或者是一个下划线包起来，会转换为\<em>倾斜，如果是2个，会转换为\<strong>加粗
```md
*字体倾斜*

_字体倾斜_

**字体加粗**

__字体加粗__
```
*字体倾斜*

_字体倾斜_

**字体加粗**

__字体加粗__

## 转义
正斜杠 + 符号
```md
* \\
* \|
* \.
* \+
* \*
```


## 删除线
使用~~ 闭合内容
```md
~~删掉我吧删掉我吧删掉我吧删掉我吧删掉我吧~~
```
~~删掉我吧删掉我吧删掉我吧删掉我吧删掉我吧~~
