const postcss = require('postcss');
const {replaceStr} = require('./utils');

module.exports = postcss.plugin('postcss-add-css-prefix', function (options = {}) {
  const { prefix = '' } = options || {};

  return function (css) {
    css.walkRules(rule => {
      // 遍历当前ast所有rule节点
      const { selector } = rule;
      if (prefix && !selector.includes(`.${prefix} `)) {
        const clone = rule.clone();
        clone.selector = replaceStr(selector, `.${prefix} `);
        rule.replaceWith(clone);
      }
    });
  };
});