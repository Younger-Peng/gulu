# plearner-wheel - 一个 Vue UI 组件

Author: Younger-Peng

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

4. 引入 svg symbols

```
<script src="//at.alicdn.com/t/font_848807_jcxxloee6zf.js"></script>
```

## 文档