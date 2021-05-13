# Git

## 1、git 配置命令

> 第一次使用 git，配置用户信息

- 配置用户名：`git config --global user.name "your name";`
- 配置用户邮箱：`git config --global user.email "youremail@github.com";`

> ssh

- 生成秘钥：`ssh-keygen -t rsa -C "name@email.com"`
- 多账户添加：`ssh-add ~/.ssh/id_rsa_github`
- 测试可用性：`ssh -T git@github.com`

```
# ~/.ssh/config 文件
# 配置github
Host github.com
    HostName github.com
    IdentityFile /root/.ssh/id_rsa_github
    PreferredAuthentications publickey
    User xxxx@gmail.com
```

> 查询配置信息

- 列出当前配置：`git config --list;`
- 列出 repository 配置：`git config --local --list;`
- 列出全局配置：`git config --global --list;`
- 列出系统配置：`git config --system --list;`

## 2、工作区上的操作命令

> 新建仓库

- 将工作区中的项目文件使用 `git` 进行管理，即创建一个新的本地仓库：`git init`；
- 从远程 `git` 仓库复制项目：`git clone <url>`，如：`git clone git://github.com/wasd/example.git`;克隆项目时如果想定义新的项目名，可以在 `clone` 命令后指定新的项目名：`git clone git://github.com/wasd/example.git mygit`；

> 提交

- 提交工作区所有文件到暂存区：`git add .`
- 提交工作区中指定文件到暂存区：`git add <file1> <file2> ...`;
- 提交工作区中某个文件夹中所有文件到暂存区：`git add [dir]`;

> 撤销

- 删除工作区文件，并且也从暂存区删除对应文件的记录：`git rm <file1> <file2>`;
- 从暂存区中删除文件，但是工作区依然还有该文件:`git rm --cached <file>`;
- 取消暂存区已经暂存的文件：`git reset HEAD <file>...`;
- 撤销上一次对文件的操作：`git checkout --<file>`。要确定上一次对文件的修改不再需要，如果想保留上一次的修改以备以后继续工作，可以使用 stashing 和分支来处理；
- 隐藏当前变更，以便能够切换分支：`git stash`；
- 查看当前所有的储藏：`git stash list`；
- 应用最新的储藏：`git stash apply`，如果想应用更早的储藏：`git stash apply stash@{2}`；重新应用被暂存的变更，需要加上`--index` 参数：`git stash apply --index`;
- 使用 `apply` 命令只是应用储藏，而内容仍然还在栈上，需要移除指定的储藏：`git stash drop stash{0}`；如果使用 `pop` 命令不仅可以重新应用储藏，还可以立刻从堆栈中清除：git stash pop;
- 在某些情况下，你可能想应用储藏的修改，在进行了一些其他的修改后，又要取消之前所应用储藏的修改。Git 没有提供类似于 `stash unapply` 的命令，但是可以通过取消该储藏的补丁达到同样的效果：`git stash show -p stash@{0} | git apply -R`；同样的，如果你沒有指定具体的某个储藏，Git 会选择最近的储藏：`git stash show -p | git apply -R`；

> 更新文件

- 重命名文件，并将已改名文件提交到暂存区：`git mv [file-original] [file-renamed]`;

> 查新信息

- 查询当前工作区所有文件的状态：`git status`;
- 比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容：`git diff`；指定文件在工作区和暂存区上差异比较：`git diff <file-name>`;

## 3、暂存区上的操作命令

> 提交文件到版本库
