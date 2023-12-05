# Git配置ssh-key

## 关于 SSH

使用 SSH 协议可以连接远程服务器和服务并向它们验证。 利用 SSH 密钥可以连接到 GitHub，而无需在每次访问时都提供用户名和 personal access token。

## 检查现有SSH密钥

```
ls -al ~/.ssh 
```

如果已经有密钥会返回信息

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1689cc2eb7494ce78f7da8d1a97acb5b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=465&h=174&s=22993&e=png&b=fdfdfd)

如果收到错误提示 ～/.ssh 不存在，表明默认位置没有ssh密钥，可以新建ssh 密钥

## 生成新的SSH密钥

在生成新的SSH密钥前，先检查下 我们使用的git平台（github，gitlab,gitee等等）支持的算法

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03d8b533ca434c2898947ea44634f663~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=901&h=468&s=39376&e=png&b=ffffff)

1.  打开终端
1.  粘贴一下文本命令，将示例中使用的电子邮件替换为 GitHub 电子邮件地址。其中的-C "your_email@example.com" 实际上是一条注释信息，可以填写成你的邮箱地址，并不影响生成密钥的过程。

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

注意：如果你使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：

```
 ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/917e4a485f9c4046834c59c9885f738a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1215&h=504&s=73135&e=png&b=fdfdfd)

当系统提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，可以按 Enter 键接受默认文件位置。 请注意，如果以前创建了 SSH 密钥，则 ssh-keygen 可能会要求重写另一个密钥，在这种情况下，我们建议创建自定义命名的 SSH 密钥。 为此，请键入默认文件位置，并将 id_ALGORITHM 替换为自定义密钥名称。

```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/tojoy/.ssh/id_ed25519):[回车使用默认路径,也可以输入指定自定义文件密钥名称]
Created directory '/Users/tojoy/.ssh'.
Enter passphrase (empty for no passphrase):[可输入密钥密码]
Enter same passphrase again:[再次输入密钥密码]
Your identification has been saved in /Users/tojoy/.ssh/id_ed25519
Your public key has been saved in /Users/tojoy/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:BjlFiHdNt3tI95XnKimBpUV2mhBinfm0jOL9JeG+YDg your_email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|     .o+=*+ o    |
|    ..o+=+o= .  .|
|     .+. ==.o ..o|
|      .o.==. + oo|
|     . oS...o . o|
|      .o. o..o . |
|      E oo.oo .  |
|       o .o. .   |
|          ..     |
+----[SHA256]-----+
```

~/.ssh/id_ed25519 是私钥，保护好私钥，不要暴露在网络中

~/.ssh/id_ed25519.pub 是公钥

## 向git账户添加SSH密钥

1.将SSH公钥复制

2.在任何页面的右上角，单击个人资料照片，然后单击“设置”。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e12fd30c561a43ddabcab9ba7b6ec5f2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=320&h=512&s=58667&e=png&b=ffffff)

1.  在边栏的“访问”部分中，单击 “SSH 和 GPG 密钥”。
1.  单击“新建 SSH 密钥”或“添加 SSH 密钥” 。
1.  在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果使用的是个人笔记本电脑，则可以将此密钥称为“个人笔记本电脑”。
1.  选择密钥类型（身份验证或签名）。 有关提交签名的详细信息，请参阅“[关于提交签名验证](https://docs.github.com/zh/authentication/managing-commit-signature-verification/about-commit-signature-verification)”。
1.  在“密钥”字段中，粘贴公钥。
1.  单击“添加 SSH 密钥”。

## 测试 SSH 连接

打开终端，输入以下内容：

```
ssh -T git@github.com //clone with ssh git服务器域名地址 
// colne 选择的 ssh 仓库地址 git@gitlab.tdcq.com
```

您可能会看到类似如下的警告：

```
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> Are you sure you want to continue connecting (yes/no)?
```

验证所看到消息中的指纹是否与 [GitHub 的公钥指纹](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)匹配。 如果是，则键入 yes：

```
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

显示连接成功！

如果收到“权限被拒绝”消息，极大多数情况是由于github账号没有设置ssh公钥信息所致。

github 也列出了一些错误的相关原因 [权限被拒绝（公钥）](https://docs.github.com/zh/authentication/troubleshooting-ssh/error-permission-denied-publickey)

```
The authenticity of host 'gitlab.rsdx.com (132.59.10.87)' can't be established.
```

## 为多台Git服务器配置多个 SSH 私钥

比如自己的git服务，公司里存在多个git服务，需要配置多个ssh 公钥在自己的主机电脑上

```
//生成公司项目使用的 ssh
ssh-keygen -t ed25519 -C 'me@company.com' -f ~/.ssh/gitlab
//生成自己项目使用的 ssh 
ssh-keygen -t ed25519 -C 'me@yourself.com' -f ~/.ssh/github
```

新建 ~/.ssh/config 配置文件

示例文件，两种配置方式 参数名 参数值 ，参数名=参数值

```
# configuration 1
Host github.com-repo-0
	HostName github.com
	User git
	Port 22


# configuration 2
Host=gitlab.com-repo-1
	Hostname=gitlab.com
	User git
	Port 22 
```

主要的规则如下：

1.  每项配置都是参数名 参数值或参数名=参数值的形式，其中参数名不区分大小写，而参数值区分大小写，如上面的参数名HostName和Hostname是同一个参数
1.  不同主机的配置通过Host参数来区分，一个配置文件里面可以有针对多个Host的配置
1.  以#开头的是注释，会被忽略
1.  同一个Host的配置内部，参数名 参数值和参数值=参数名的形式可以混用，如上例#2配置所示  
    下面详细展开常见的参数类型。

### 常见参数类型

-   Host github.com-repo-0 - 存储库的别名。类似昵称，用于标识某个特定的配置，在ssh命令中使用，例如我们想要ssh连接到上例中的#1配置的主机，则在命令行执行如下命令即可：

```
ssh github.com-repo-0
```

-   Hostname github.com - 将主机名配置为与别名一起使用。需要ssh连接过去的主机名，一般是IP地址
-   User 登录主机的用户名
-   Port SSH访问主机的端口号，默认是22端口，同上，只有在非默认情况下才需要设置该值
-   IdentityFile=/home/user/.ssh/repo-0_deploy_key - 将私钥分配给别名。IdentityFile 填写对应的私钥的路径

## 在同一git服务器上配置多个仓库

如果在一台服务器上使用多个仓库，则需要为每个仓库生成专用密钥对。 不能对多个仓库重复使用一个部署密钥。

在服务器的 SSH 配置文件中（通常为 ~/.ssh/config），为每个存储库添加别名条目。 例如：

```
Host github.com-repo-0
        Hostname github.com
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host github.com-repo-1
        Hostname github.com
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

以上两种同一台电脑配置多个SSH密钥在 ~/.ssh/config文件中都可以混用

## ssh key的配置是针对每台主机电脑

设置成功后，即可不需要账号密码clone和push代码

注意之后在clone仓库的时候要使用ssh的url，而不是https！

## 更改 SSH 密钥口令

在创建 SSH 密钥时，您可以根据 ssh-keygen 程序的提示设置一个密钥口令，这个口令可以保护您的私钥安全。然而，这个口令并不是必须的，所以在一些网络教程、甚至服务器密钥初始化中都直接跳过口令设置步骤。

设置 SSH 密钥口令可以更好地保护您的私钥安全。如果您的私钥文件被泄露，那么攻击者就可以使用您的私钥进行身份验证，访问您的远程服务器。如果您设置了密钥口令，那么攻击者就需要知道您的密钥口令才能解密您的私钥，进而访问您的远程服务器。因此，设置 SSH 密钥口令可以在一定程度上缓解攻击者滥用您的私钥进行恶意活动。

通过以下命令，您可以更改现有私钥的密码而无需重新生成密钥对：

```
$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: [输入旧密码]
> Key has comment 'your_email@example.com'
> Enter new passphrase (empty for no passphrase): [输入新密码]
> Enter same passphrase again: [重复确认新密码]
> Your identification has been saved with the new passphrase.
```

### 使用 ssh-agent 可以避免重复输入私钥密码

ssh-agent 是一个守护进程，它可以管理您的 SSH 私钥，并且自动为您解密私钥。这样，您就不需要每次使用 SSH 命令时都输入私钥口令。但要注意的是 ssh-agent 仅仅将数据保存在内存中，程序重启后历史记录全部丢失，需要重新配置。

要使用 ssh-agent，首先需要启动它。通常，可以在命令行中输入以下命令来启动 ssh-agent：

```
eval "$(ssh-agent -s)"
```

启动 ssh-agent 之后，您可以使用以下命令将您的 SSH 私钥添加到 ssh-agent 中：

```
ssh-add ~/.ssh/id_ed25519
```

您可以将多个私钥添加到 ssh-agent 中，这样就可以使用不同的私钥访问不同的远程服务器。