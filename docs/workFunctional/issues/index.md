
### error An unexpected error occurred: "https://registry.npm.taobao.org/axios: certificate has expired"

淘宝镜像证书过期问题,解决方法就是切换淘宝最新镜像地址
```shell
npm config set registry https://registry.npmmirror.com
```
其他镜像源
```
npm 官方原始镜像网址是：https://registry.npmjs.org/
淘宝最新 NPM 镜像：https://registry.npmmirror.com
阿里云 NPM 镜像：https://npm.aliyun.com
腾讯云 NPM 镜像：https://mirrors.cloud.tencent.com/npm/
华为云 NPM 镜像：https://mirrors.huaweicloud.com/repository/npm/
网易 NPM 镜像：https://mirrors.163.com/npm/
中科院大学开源镜像站：http://mirrors.ustc.edu.cn/
清华大学开源镜像站：https://mirrors.tuna.tsinghua.edu.cn/
腾讯，华为，阿里的镜像站基本上比较全

```
