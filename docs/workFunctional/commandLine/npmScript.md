# npm script 详解

### 什么是 npm script

`npm script` 是记录在 `package.json` 中的 `scripts` 字段中的一些自定义脚本，使用自定义脚本，用户可以将一些项目中常用的命令行记录在 `package.json` 不需要每次都要敲一遍。

将常用命令行写入脚本当中，直接执行脚本，等于在执行复杂的命令行

```
//统计项目中的代码行数：
find src -name "*.js" | xargs cat | wc -l
```

可以将以上命令行写入 package.json 的 script 中

```
"script":{
  "lines":'find src -name "*.js" | xargs cat | wc -l'
}
```

以后只需要执行 npm run lines 就可以了，需要注意的是，因为命令是写在 json 文件中的，有些特字符需要进行转译，比如上面的双引号。

### 环境变量 PATH

npm scripts 不是简简单单地执行 shell 语句而已，在执行之前它会将 node_modules/.bin/ 加入到环境变量 PATH 中，所以在 npm scripts 中可以直接使用那些存在于 node_modules/.bin/ 中的可执行文件。

很多使用 mocha 作为测试框架的项目中都有这么一个 npm script

```
"scripts":{     "test": "mocha" }
```

mocha 并没有全局安装，它的命令行工具存在于 node_modules/.bin/ 中，之所以能够访问到它，正是因为 npm 背后的这一操作才使得这样的命令能够正常执行，在 npm script 执行完成后，会从 PATH 中移除。

在执行 npm run test (后面会看到这可以简写为 npm test) 的时候就等同于：

```
./node_modules/.bin/mocha
```

### 传入参数

对于上面的脚本 "test": "mocha" 如果希望给 mocha 传入一些选项，比如希望执行：

```
mocha --reporter spec
```

需要这样执行 npm test：

```
npm test -- --reporter spec
```

需要使用两个短线将选项隔开，或者将选项直接写在 package.json 中：

```
"scripts":{     "test": "mocha --reporter spec" }
```

在 shell 中传入的参数都要使用 -- 隔开，这个 -- 被视作 npm run 命令参数的结束，-- 后面的内容都会原封不动地传给运行的命令。

### 环境变量

在执行 npm script 的时候还可以访问到一些特殊的环境变量，通过 process.env.npm_package_xxx 可以获得到 package.json 中的内容。比如 process.env.npm_package_name 可以获得到 package.json 中 name 的值 "sv"。

```
{
  "name": "sv",
  "version": "1.3.0",
  "description": "",
  "main": "index.js",
  "repository": {
		"type": "git",
    "url": "git+ssh://git@gitlab.com/wy-ei/sv.git"
  }
}
```

通过 process.env.npm_package_repository_type 可以拿到值 "git"。

另外可以通过 process.env.npm_config_xxx 来拿到 npm config 中的值。比如通过 process.env.npm_config_user_email 可以拿到 user.email 的值。

还有一个比较特殊的环境变量 process.env.npm_lifecycle_event 在执行不同的 npm script 的时候这个值是不同的，比如执行 npm run build 的时候，这个值为 build，通过判断这个变量，将一个脚本使用在不同的 npm script 中。

使用任何脚本语言编写的 npm script 都可以拿到环境变量，比如在 shell 中要想拿到只需要使用 $npm_config_user_email 就好了。不同的脚本需要使用其自身获取环境变量的方法来读取环境变。

另外，这些环境变量只能在执行 npm script 的时候拿到，正常执行的 node 脚本是获取不到的。

### cross-env

**cross-env**：运行跨平台设置和使用环境变量的脚本

当您使用NODE_ENV =production, 来设置环境变量时，大多数**Windows**命令提示将会阻塞(报错)。 （异常是Windows上的Bash，它使用本机Bash。）同样，Windows和POSIX命令如何使用环境变量也有区别。 使用POSIX，您可以使用：$ ENV_VAR和使用％ENV_VAR％的Windows。

windows不支持NODE_ENV=development的设置方式。

(cross-env)能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。

```
npm install --save-dev cross-env
```

```
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

### process.env

process.env.BASE_API 可以获取脚本写入不同环境变量的键值对，

```
//package.json
script:{
 "dev": "cross-env BASE_API=dev APP_ID=wxe1f9457e node ./scripts/index.js",
 "pro": "cross-env BASE_API=pro APP_ID=wxe1f9457e node ./scripts/index.js",
}
```

```
打包编译的时候 如果执行 npm run dev 命令 那么process.env.BASE_API 获取的直就是 "dev" ,
  如果 执行 npm run pro 那么process.env.BASE_API 获取的就是 "pro"
```

```
node ./scripts/index.js
node 脚本命令行, npm run dev 执行命令时候会启动执行该脚本文件代码运行
也可以写入其他shell 脚本 
```

### process.argv

```
npm run dev
```

脚本命令 可以传固定参数 也可以传动态参数

```
npm install packagename
```

安装模块如不指定版本号 默认会安装最新的版本

```
npm install packagename 0.0.1
```

安装指定版本的模块

```
npm init
```

这个命令会在当前目录生成一个package.json文件，这个文件中会记录一些关于项目的信息，比如：项目的作者，git地址，入口文件、命令设置、项目名称和版本号等等，一般情况下这个文件是必须要有的，方便后续的项目添加和其他开发人员的使用。

```
npm install packagename --save 或 -S
```

--save、-S参数意思是把模块的版本信息保存到dependencies（生产环境依赖）中，即你的package.json文件的dependencies字段中；

```
npm install packagename --save-dev 或 -D
```

--save-dev 、 -D参数意思是吧模块版本信息保存到devDependencies（开发环境依赖）中，即你的package.json文件的devDependencies字段中；
