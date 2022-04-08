# hexo-theme-MiHoYo

## 初心

hexo 不是我开发的，但是 hexo-theme 可以啊，看多了 hexo-theme 就会有一种想开发的冲动，就像[【编写自己的 Hexo 主题】](https://easyhexo.com/4-High-order-hexo-gamer/4-2-theme-develop/#%E7%BC%96%E5%86%99%E8%87%AA%E5%B7%B1%E7%9A%84-hexo-%E4%B8%BB%E9%A2%98)中讲的那样：“当你看到你用的主题出现在两个以上的博客的时候，那你就要考虑自己写一个了。”，其实这个东西是我两周时间开发出来的，很快也很烂，根本比不上同时期的其他作品，可是人啊，就是想去实现一些梦想，想要一些做不到的东西，开发这段时间让我对自己的前端技术产生了彻头彻尾的反思，因为技术实在是太烂了，我都没想到自己的技术什么时候这么不堪（因为其实好的样式并非看上去那么好做），是的我也在慢慢来，慢慢变强，一切都要慢慢来。。。，现在是第一版只有三种页面，后面我会努力的，加油 🎉

如果想联系不妨用 **issue** 来留言，或者邮箱联系我：1907065810@qq.com，我会在第一时间回复。🎈

## 说明

该 hexo 主题是想表达出一股浓浓的二次元风格的 hexo 主题，后面会针对这一风格进行改进，以 MiHoYo 的官方页面作为主要的模仿目标，打造出一种让 MiHoYo 玩家一种亲切的感觉，一种较为浓厚的二次元风格的内容，我现在也在寻找一种合适的样式进行开发。如果你有更好的想法欢迎联系我，让我们一起为能力打造一款合适的二次元风格的 hexo-theme 而努力！！！😁

## 预览

PC 端：

![预览图片](https://i.loli.net/2021/10/24/bNlAoIfzGPQJcnt.png)

![gif](https://github.com/redhat123456/pohots/blob/master/gif/1.gif?raw=true)

Tanger: http://mihoyo.tanger.ltd/

如果您使用了该主题并想展示你的 blog~，欢迎在<a href="https://github.com/redhat123456/hexo-theme-MiHoYo/issues">issue</a>给我留言，我会把你展示出来 🎃

## 安装

手动安装

请按照以下步骤安装配置该主题

1、下载 hexo-theme-MiHoYo

在选中 `根目录/themes` 该文件后右键选择 `Git Bash Here` 或者 `PowerShell` 都可以（以下统一将这些命令行窗口称为命令行）。

`git clone git@github.com:redhat123456/hexo-theme-MiHoYo.git`
or
`git clone https://github.com/redhat123456/hexo-theme-MiHoYo.git`

我们就完成了第一步下载主题的扩展包

2、配置`_config.yml`（⚠ 值得注意的是：此处的`_config.yml`文件指的是在根目录下的`_config.yml`）

用编辑器打开该文件，之后在

`theme: XXXX` 这一行中将 theme 后面的`XXXX`去掉改成 `hexo-theme-MiHoYo`

3、部署 hexo 页面以及预览 hexo 页面

在根目录下打开命令行，依次输入`hexo g`和`hexo s`，打开浏览器输入`http://localhost:4000`，预览主题效果。

## 写作

- 可以参考 [Hexo|写作](https://hexo.io/zh-cn/docs/writing)

* 也可以参考 GitHub 的 [markdown 教程](https://guides.github.com/features/mastering-markdown/)

* 添加文章标题与分类，更多特性可以参考[Hexo|Front-matter](https://hexo.io/zh-cn/docs/front-matter) ，示例：

  ```markdown
  ---
  title: 'Hello World !'
  date: 2020-10-23 21:54:02
  tags: code
  category: Example
  ---
  ```

## 修改基础样式

我们可以通过在`theme/hexo-theme-MiHoYo`文件下的`_config.yml`来对主题样式进行修改，主要有如下样式可以修改

### 顶部导航栏设置

可以在主题页面中的`_config.yml`中对该代码行进行修改如下：

```markdown
menuname: Tanger's blog

# 你的昵称 | Your Name

author: Your Name

# main menu navigation

menu:
关于我 👀: /about
访问主站 🎃: http://tanger.cloud/
GitHub🧨: https://github.com/redhat123456
```

#### author

blog 作者名字

#### menuname

左侧链接，默认指向 blog 首页

#### menu

右侧顶部导航栏

设置：
`:`号前对应的是 标题名 后面代表链接 ，顶部导航栏就是根据该行代码写出自定义的导航栏

### 信息栏设置

对应的是`_config.yml`中的

```markdown
topmenu:
首页: /
关于: /about

## 网站描述

description: 嘿，我是 Tanger ～这是我的子站，用于展示写的 Hexo 主题：MiHoYo。欢迎访问！

## 网站关键词：用英文逗号分割

keywords: hexo,theme,MiHoYo

## blog 头像

img_src: https://avatars.githubusercontent.com/u/57751257?v=4

# 网站标题 | Title

logo_title: Hexo Theme

#标语 | Your Slogan
words: Your Words
```

可以根据对应的信息进行修改

## 评论系统

本主题支持[Valine](https://valine.js.org/) 。
请修改主题目录下 `_config.yml` 文件中 `valine:` 的 `app_id:` 与 `app_key:` 。

参考 [Valine 快速开始](https://valine.js.org/quickstart.html)

开启邮件提醒：[zhaojun1998 / Valine-Admin](https://github.com/zhaojun1998/Valine-Admin)

## 参与开发

### 开发人员

- [Tanger](https://github.com/redhat123456)
- [Yue_plus](https://github.com/Yue-plus)

> 欢迎提交 [Issues](https://github.com/redhat123456/hexo-theme-MiHoYo/issues/new) 与 [PR](https://github.com/redhat123456/hexo-theme-MiHoYo/issues/pulls)

### 参与开发可能需要的文档

- [Hexo 官方文档](https://hexo.io/zh-cn/docs/templates)
- [ejs 模板引擎中文文档](https://ejs.bootcss.com/)

- 另外引用几个大佬的 blog
  > - <https://easyhexo.com/>
  > - [让 Hexo 搭建的博客支持 LaTeX](http://cps.ninja/2019/03/16/hexo-with-latex/)
  > - [Hexo 主题开发 - ﹏猴子请来的救兵 - 博客园](https://www.cnblogs.com/yyhh/p/11058985.html)
  > - 【墙】[Hexo 主题开发经验杂谈 | MARKSZ の Blog](https://molunerfinn.com/make-a-hexo-theme/)
  > - 【墙】[Hexo 主题开发指南 | Peak Xin's Blog](https://xinyufeng.net/2019/04/15/hexo-theme-guide/)

## 下一步实现的功能

* 适应移动端
* 加入背景图
* 更新信息卡的效果

## 支援主题开发

喜欢这个主题的话可以：

- 给颗小星星吧 `(/▽＼)`
  > - 给个小目标 100star 做个新主题哦~
- 加入 QQ 群：808985048 
  > 群内开发为主，吹水晒卡，分享线索 7 也都欢迎哦~ `d=====(￣▽￣*)b`
