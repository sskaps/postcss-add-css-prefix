# postcss-add-css-prefix
a postcss plugin to add a custom prefix

### 快速上手

```
npm i postcss-add-css-prefix -D


<!-- postcss.config.js -->
const addCssPrefix = require('postcss-add-css-prefix')

module.exports = {
  plugins: [
    addCssPrefix({
      prefix: 'app'
    })
  ],
}

```

### options

1. prefix
    * type: string, 可选
    * 需要被添加的前缀
    * default: package.name