# Git 提交规范

```
<Header>
<type>(<scope>): <subject>

<Body>
是对本次 commit 的详细描述，可以分成多行。（可省略）

<Footer>
如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略
    突破性的变更：
    当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。
    关闭缺陷：
    如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。
```

- type : 用于说明 commit 的类型

  - feat: 新增功能 feature
  - fix: 修复 Bug
  - docs: 仅仅修改了文档，如 `readme.md`
  - style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
  - refactor: 代码重构，没有新增功能或修复 bug
  - perf: 优化相关，如提升性能、用户体验等。
  - test: 测试用例，包括单元测试、集成测试。
  - build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
  - ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
  - chore: 改变构建流程、或者增加依赖库、工具等。
  - revert: 版本回滚

- scope : 用于说明 commit 影响的范围

- subject : commit 目的的简短描述

> **Example:**

- feat

```text
feat(browser): onUrlChange event (popstate/hashchange/polling)

Added new event to browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

- fix

```
fix(compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

- style

```
style(location): add couple of missing semi colons
```

- chore

```
chore(release): v3.4.2
```

## 工具

`npm install commitizen -D`

https://juejin.cn/post/6951649464637636622
