let reg = new RegExp(`(^|(\\s)+|\\.|=)`);
function replaceStr(str, prefix) {
  const selectors = str.split(',');
  selectors.forEach((selector, index) => {
    selectors[index] = selector.replace(reg, `${prefix}$1`).trim();
  });
  return selectors.join(', ');
}

module.exports = {
  replaceStr
};
