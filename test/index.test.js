const assert = require('assert')
const { replaceStr } = require('../src/utils')

describe('添加前缀', () => {
  generateIt('.el-menu', '.app .el-menu')
  generateIt('.el-menu .el-menu-item', '.app .el-menu .el-menu-item')

  generateIt('[class*=el-col-]', '.app [class*=el-col-]')

  function generateIt(str, expect) {aa     
    it(`添加${str}`, () => {
      assert.equal(replaceStr(str, '.app'), expect)
    })
  }
})
