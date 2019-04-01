/*
* 实现一个函数，求字符串数组中，每个字符串中共同的前缀ss
* */
function longestCommonPrefix(array) {
  if(!array.length)return ''
  let len = array.reduce((pre, item) => {
    return Math.min(pre, item.length)
  }, Number.MAX_VALUE)

  let ans = ''
  for(let i = 0; i < len; i++) {
    let a = array[0][i]
    let f = array.every((item) => {
      return item[i] === a
    })
    if(!f)break
    ans += a
  }
  return ans
}

console.log(longestCommonPrefix(['acbcb','abcd', 'abcdefg', 'abcdddd', 'abcdfef']))
