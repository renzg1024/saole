# TypeScript 编译配置

## 安装 TypeScript
**部分代码编辑器（VS Code）只集成了`TypeScript`语言服务，但不包含编译器，还需要单独安装`TypeScript`。**
```shell
npm i -g typescript

#按照指定版本
npm i -g typescript@3.9.*
```
如果你是 Mac 或者 Linux 用户，就极有可能在 `npm i -g typescript` 中遭遇 `“EACCES: permission denied”` 错误，此时我们可以通过以下 4 种办法进行解决：
* 使用 nvm 重新安装 npm
* 修改 npm 默认安装目录
* 执行 sudo npm i -g xx
* 执行 sudo chown -R [user]:[user] /usr/local/lib/node_modules

安装完成后查看当前安装的`TypeScript`版本。
```shell
tsc -v

# 输出版本信息：
Version 3.9.2
```

在`Terminal`命令行中直接支持运行`TypeScript`代码（`Node.js`侧代码），可以使用`ts-node`命令。
```shell
npm i -g ts-node
```

## 编译配置
项目安装了`TypeScript`库之后，会生成`TypeScript`编译器，`TypeScript`编译器通过`tsc`（TypeScript Compiler）命令和`tsconfig.json`配置文件来描述如何将`TypeScript`代码编译为可执行的`JavaScript`代码.
`tsc`命令工具的作用是启动编译器进行编译，`tsconfig.json`文件，用来设置参数选项来配置`TypeScript`的编译行为。
执行`tsc`命令,编译器会自动在项目的根目录查找`tsconfig.json`文件，根据文件里的配置参数进行编译配置，如果没有该文件，编译器会执行默认的编译选项。

输入`tsc --init`命令快速创建一个`tsconfig.json`文件
```shell
tsc --init
```

### tsconfig.json 文件的配置

> * compilerOptions 是用于配置 TypeScript 编译器的选项
> * include 是用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径和 glob 模式）
> * exclude 用来指定解析 include 配置中需要跳过的文件或者文件匹配路径。
> * files files 选项用来指定 TypeScript 项目中需要包含的文件列表。
> * extends 用来声明当前配置需要继承的另外一个配置的路径
>

[tsconfig.json 详细配置-官方文档](https://www.typescriptlang.org/zh/tsconfig)

**简单示例**
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "preserve",
    "incremental": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "baseUrl": "./",
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "strict": true,
    "paths": {"@/*": ["./src/*"]}
  },
  "include": ["./**/*.d.ts", "./**/*.ts", "./**/*.tsx"],
  "exclude": [],
  "files": [],
  "extends": "@tsconfig/node12/tsconfig.json"
}

```

#### compilerOptions.paths
paths 指的是路径设置，用来将模块路径重新映射到相对于 baseUrl 定位的其他路径配置。这里我们可以将 paths 理解为 webpack 的 alias 别名配置。

下面我们看一个具体的示例：
```json
{

  "compilerOptions": {
    "paths": {
      "@src/*": ["src/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```
在上面的例子中，TypeScript 模块解析支持以一些自定义前缀来寻找模块，避免在代码中出现过长的相对路径。
>
> 注意：因为 paths 中配置的别名仅在类型检测时生效，所以在使用 tsc 转译或者 webpack 构建 TypeScript 代码时，
> 我们需要引入额外的插件将源码中的别名替换成正确的相对路径。
> 

#### compilerOptions.types
在默认情况下，所有的 typeRoots 包都将被包含在编译过程中。

手动指定 types 时，只有列出的包才会被包含在全局范围内，如下示例：

```json
{

  "compilerOptions": {

    "types": ["node", "jest", "express"]

  }

}

```
在上述示例中可以看到，手动指定 types 时 ，仅包含了 node、jest、express 三个 node 模块的类型包。

#### compilerOptions.allowSyntheticDefaultImports

allowSyntheticDefaultImports****允许合成默认导出。

当 allowSyntheticDefaultImports 设置为 true，即使一个模块没有默认导出（export default），我们也可以在其他模块中像导入包含默认导出模块一样的方式导入这个模块，如下示例：
```js
// allowSyntheticDefaultImports: true 可以使用

import React from 'react';

// allowSyntheticDefaultImports: false

import * as React from 'react';

```
在上面的示例中，对于没有默认导出的模块 react，如果设置了 allowSyntheticDefaultImports 为 true，则可以直接通过 import 导入 react；但如果设置 allowSyntheticDefaultImports 为 false，则需要通过 import * as 导入 react。

#### include 
用来指定需要包括在 TypeScript 项目中的文件或者文件匹配路径。如果我们指定了 files 配置项，则 include 的 默认值为 []，否则 include 默认值为 ["**/*"] ，即包含了目录下的所有文件。
如果 glob 匹配的文件中没有包含文件的扩展名，则只有 files 支持的扩展名会被包含。 一般来说，include 的默认值为.ts、.tsx 和 .d.ts。如果我们开启了 allowJs 选项，还包括 .js 和 .jsx 文件。

#### exclude 
exclude 用来指定解析 include 配置中需要跳过的文件或者文件匹配路径。一般来说，exclude 的默认值为 ["node_modules", "bower_components", "jspm_packages"]。

需要注意：exclude配置项只会改变include配置项中的结果。

#### files
files 选项用来指定 TypeScript 项目中需要包含的文件列表。

如果项目非常小，那么我们可以使用 files指定项目的文件，否则更适合使用include指定项目文件。

#### extends
extends 配置项的值是一个字符串，用来声明当前配置需要继承的另外一个配置的路径，这个路径使用 Node.js 风格的解析模式。TypeScript 首先会加载 extends 的配置文件，然后使用当前的 tsconfig.json 文件里的配置覆盖继承的文件里的配置。

TypeScript 会基于当前 tsconfig.json 配置文件的路径解析所继承的配置文件中出现的相对路径。

### tsconfig.node.json
TypeScript 3.0 新增的 “项目引用（Project References）” 功能，它允许用户为项目的不同部分使用不同的 TypeScript 配置。
vite.config.ts 文件的运行环境是NodeJS，不是浏览器， 需要单独配置一份TypeScript 配置文件 tscnofig.node.json 。


```json
//tscnofig.json

{
  "compilerOptions": {},
  "include": [],
  "references": [{ "path": "./tsconfig.node.json" }] 
}
```
通过 references 字段引入 tsconfig.node.json 中的配置。
```json
//tscnofig.node.json

{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}

```
设置 composite: true 字段，组合项目，允许将多个项目组合成一个项目，以优化编译速度。
并用 include 属性指明配置覆盖的文件范围 "vite.config.ts"。

