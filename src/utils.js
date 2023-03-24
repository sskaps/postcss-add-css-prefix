const path = require('path');
const pkgDir = require('pkg-dir').sync;

function getPkgInfo (targetPath = '') {
  const dir = pkgDir(targetPath || process.cwd());
  const pgkInfo = require(path.resolve(dir, 'package.json'));
  if (Object.prototype.toString.call(pgkInfo) === '[object Object]') {
    return pgkInfo
  }
  return {};
}

let reg = new RegExp(`(^|(\\s)+|\\.|=)`);
function replaceStr(str, prefix) {
  const selectors = str.split(',');
  selectors.forEach((selector, index) => {
    selectors[index] = selector.replace(reg, `${prefix}$1`).trim();
  });
  return selectors.join(', ');
}

module.exports = {
  getPkgInfo,
  replaceStr
};
