/*
* 判断两棵树是否相同。
* */
let f

function check(a, b) {
  if(a === null && b === null)return false
  if(a === null && b !== null)return true
  if(a !== null && b === null) return true
  if(a.val === b.val) return false
  return true
}


function dfs(a, b) {
  if(!f)return
  if(check(a, b)) {
    f = false
    return
  }
  if(a&&b&&a.left !== undefined && b.left !== undefined){
    dfs(a.left, b.left)
  }
  if(a&&b&&a.right !== undefined && b.right !== undefined){
    dfs(a.right, b.right)
  }
}

function isSameTree(p, q) {
  f = true
  dfs(p, q)
  return f
}
