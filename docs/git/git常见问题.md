# git 踩坑记录

## 1. 拉取时警告分支

```
warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.

译文：
warning: 不建议在没有为偏离分支指定合并策略时执行pull操作。
您可以在执行下一次pull操作之前执行下面一条命令来抑制本消息：

git config pull.rebase false  # 合并（缺省策略）
git config pull.rebase true   # 变基
git config pull.ff only       # 仅快进

您可以将 "git config" 替换为 "git config --global" 以便为所有仓库设置
缺省的配置项。您也可以在每次执行 pull 命令时添加 --rebase、--no-rebase，
或者 --ff-only 参数覆盖缺省设置。
```

**解决方案：** `git config --global pull.ff false`

> https://blog.csdn.net/wq6ylg08/article/details/114106272

---
