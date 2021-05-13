# npm / yarn

## 1、设置仓库

> 管理仓库 `nrm`

```
# 安装
npm install nrm -g

# 查看
nrm ls  
* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

# 切换
nrm use taobao

# 增加：其中reigstry为源名，url为源的路径
nrm add <registry> <url>

# 删除
nrm del <registry>

# 测试速度
nrm test npm
```

1. 全局

> 文件保存在 C:/Users/用户名/.npmrc

```
# 设置registry
npm config set registry https://registry.npm.taobao.org
# 查看registry
npm config get registry
# 查看配置列表
npm config list
# 查看所有的默认配置
npm config ls -l
# 查看安装的modules
npm list
```

2. 项目内添加 `.npmrc` 或 `.yarnrc`

```
registry "https://registry.npm.taobao.org"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
```

3. 临时

```
# 安装时指定镜像源

npm install --registry=https://registry.npm.taobao.org

npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass
```

## 2、设置全局目录

> 设置 node_modules 和 node_cache 设置全局安装目录和缓存目录

假设 nodejs 安装目录为 D:\Program Files\nodejs

1. 在 nodejs 安装目录下新建 node_global 和 node_cache 目录
2. 添加环境变量 NODE_PATH=D:\Program Files\nodejs\node_modules
3. PATH 追加 D:\Program Files\nodejs\node_global，注意;符号分隔
4. 执行 npm config set prefix D:\APP\nodejs\node_global
5. 执行 npm config set cache D:\APP\nodejs\node_cache

```

```

## 3、问题

1. 安装报错

```

Could not resolve dependency: peer

npx -p npm@6 npm i --legacy-peer-deps

```

`ERESOLVE`与`npm@7`有关的问题很常见，因为`npm7.x`对某些事情比 npm6.x 更严格。通常，最简单的解决方法是将`--legacy-peer-deps`标志传递给`npm`(e.g.，`npm i --legacy-peer-deps`），或者使用`npm@6`。

如果这不能立即起作用，也许可以先删除`node_modules`和`package-lock.json`。它们将被重新创建。

（提示：使用 npm@6 不需要卸载`npm@7`。使用`npx`指定`npm`的版本。例如：`npx -p npm@6 npm i --legacy-peer-deps`。）

**结果：淘宝源是 https，但是设成 http 了**

2. 缓存问题

```
# 清除缓存
npm cache clean
```
