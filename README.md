[![Build Status](https://api.travis-ci.org/Younger-Peng/gulu.svg?branch=master)](https://travis-ci.org/Younger-Peng/gulu)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，我有两个昵称， Younger-Peng 和 Plearner，所以这个轮子命名为plearner-wheel,希望这个框架对你有用

## 开始使用

1. 添加 CSS 样式

  使用本框架前，请在 CSS 对所有元素中开启 border-box

  ```
  *, *::before, *::after { box-sizing: border-box; }
  ```
  IE 8 及以上浏览器都支持此样式
  
  你还需要设置默认颜色等变量
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式

2. 安装 plearner-wheel

```
npm i --save plearner-wheel
```

3. 引入 plearner-wheel

```
import { Button, ButtonGroup, Icon } from 'plearner-wheel'
import 'plearner-wheel/dist/index.css'

export default {
    name: 'app',
    components: {
        'p-button': Button,
        'p-icon': Icon
    }
}
```


## 文档