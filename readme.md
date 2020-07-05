# Blog

[blog](https://ModeSpr.github.io)


## 01 配置

```
git config --global user name "your-naem"

git config --global user email "your-email"

ssh-keygen-t rsa -C "your-email"

```

## 02 本地初始化

```
git init

# 与远程库连接
git remote add origin <git地址>
# 允许不相关历史合并
git pull origin master --allow-unrelated-histories
# 设置默认上传分支
git push --set-upstream origin master

```

## 03 上传

```
# 先拉取
git pull
git pull origin master

# 添加更改到本地库
git add .
git add a.txt

# 填写提交信息
git commit -m "修改信息"

# 最后推，提交
git push
```

# 04 分支
```
branch

```
